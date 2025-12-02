// Main Game Engine
class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.physics = new PhysicsEngine();
        
        // Game state
        this.currentLevel = null;
        this.levelIndex = 0;
        this.rotation = 0;
        this.targetRotation = 0;
        this.isRotating = false;
        this.rotationSpeed = 5;
        
        // Player state
        this.player = {
            x: 0,
            y: 0,
            velocityX: 0,
            velocityY: 0,
            radius: 0
        };
        
        // Game stats
        this.moveCount = 0;
        this.startTime = 0;
        this.elapsedTime = 0;
        this.isPaused = false;
        this.isGameOver = false;
        
        // Animation
        this.animationId = null;
        this.particles = [];
        
        // Input handling
        this.setupInputHandlers();
        
        // Level completion tracking
        this.completedLevels = this.loadProgress();
    }

    // Load saved progress from localStorage
    loadProgress() {
        const saved = localStorage.getItem('mixSpinMix_progress');
        if (saved) {
            try {
                return JSON.parse(saved);
            } catch (e) {
                return {};
            }
        }
        return {};
    }

    // Save progress to localStorage
    saveProgress() {
        localStorage.setItem('mixSpinMix_progress', JSON.stringify(this.completedLevels));
    }

    // Setup input handlers
    setupInputHandlers() {
        // Keyboard controls
        document.addEventListener('keydown', (e) => {
            if (this.isPaused || this.isGameOver) return;
            
            if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
                this.rotateLeft();
            } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
                this.rotateRight();
            }
        });

        // Touch/Mouse controls for rotation
        let touchStartX = 0;
        let touchStartY = 0;
        let isDragging = false;

        this.canvas.addEventListener('mousedown', (e) => {
            touchStartX = e.clientX;
            touchStartY = e.clientY;
            isDragging = true;
        });

        this.canvas.addEventListener('touchstart', (e) => {
            e.preventDefault();
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
            isDragging = true;
        });

        const handleDrag = (clientX, clientY) => {
            if (!isDragging || this.isPaused || this.isGameOver) return;
            
            const deltaX = clientX - touchStartX;
            const deltaY = clientY - touchStartY;
            
            // Determine rotation direction based on drag
            if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 30) {
                if (deltaX > 0) {
                    this.rotateRight();
                } else {
                    this.rotateLeft();
                }
                isDragging = false;
            } else if (Math.abs(deltaY) > 30) {
                // Vertical drag can also trigger rotation
                if (deltaY > 0) {
                    this.rotateLeft();
                } else {
                    this.rotateRight();
                }
                isDragging = false;
            }
        };

        this.canvas.addEventListener('mousemove', (e) => {
            handleDrag(e.clientX, e.clientY);
        });

        this.canvas.addEventListener('touchmove', (e) => {
            e.preventDefault();
            handleDrag(e.touches[0].clientX, e.touches[0].clientY);
        });

        this.canvas.addEventListener('mouseup', () => {
            isDragging = false;
        });

        this.canvas.addEventListener('touchend', () => {
            isDragging = false;
        });

        // Gyro sensor support
        if (window.DeviceOrientationEvent) {
            let lastGamma = 0;
            window.addEventListener('deviceorientation', (e) => {
                if (this.isPaused || this.isGameOver) return;
                
                const gamma = e.gamma; // Left-right tilt (-90 to 90)
                
                // Detect significant tilt change
                if (Math.abs(gamma - lastGamma) > 20) {
                    if (gamma > lastGamma + 20) {
                        this.rotateRight();
                    } else if (gamma < lastGamma - 20) {
                        this.rotateLeft();
                    }
                    lastGamma = gamma;
                }
            });
        }
    }

    // Load a level
    loadLevel(levelIndex) {
        if (levelIndex < 0 || levelIndex >= LEVELS.length) {
            return false;
        }

        this.levelIndex = levelIndex;
        this.currentLevel = LEVELS[levelIndex];
        this.rotation = 0;
        this.targetRotation = 0;
        this.moveCount = 0;
        this.startTime = Date.now();
        this.elapsedTime = 0;
        this.isGameOver = false;
        this.isPaused = false;
        this.particles = [];

        // Setup canvas
        const tileSize = this.calculateTileSize();
        this.canvas.width = this.currentLevel.size * tileSize;
        this.canvas.height = this.currentLevel.size * tileSize;

        // Initialize player
        this.player = {
            x: (this.currentLevel.start.x + 0.5) * tileSize,
            y: (this.currentLevel.start.y + 0.5) * tileSize,
            velocityX: 0,
            velocityY: 0,
            radius: tileSize * 0.15
        };

        return true;
    }

    // Calculate tile size based on level and screen
    calculateTileSize() {
        const maxCanvasSize = Math.min(window.innerWidth * 0.8, window.innerHeight * 0.6, 600);
        return Math.floor(maxCanvasSize / this.currentLevel.size);
    }

    // Rotate left
    rotateLeft() {
        if (!this.isRotating) {
            this.targetRotation -= 90;
            this.isRotating = true;
            this.moveCount++;
        }
    }

    // Rotate right
    rotateRight() {
        if (!this.isRotating) {
            this.targetRotation += 90;
            this.isRotating = true;
            this.moveCount++;
        }
    }

    // Update rotation animation
    updateRotation() {
        if (this.isRotating) {
            const diff = this.targetRotation - this.rotation;
            
            if (Math.abs(diff) < this.rotationSpeed) {
                this.rotation = this.targetRotation;
                this.isRotating = false;
            } else {
                this.rotation += Math.sign(diff) * this.rotationSpeed;
            }
        }
    }

    // Update game state
    update() {
        if (this.isPaused || this.isGameOver) return;

        // Update rotation
        this.updateRotation();

        // Update elapsed time
        this.elapsedTime = Math.floor((Date.now() - this.startTime) / 1000);

        // Check time limit
        if (this.currentLevel.timeLimit && this.elapsedTime >= this.currentLevel.timeLimit) {
            this.gameOver(false);
            return;
        }

        // Check move limit
        if (this.currentLevel.moveLimit && this.moveCount > this.currentLevel.moveLimit) {
            this.gameOver(false);
            return;
        }

        // Update physics
        const tileSize = this.calculateTileSize();
        const goalReached = this.physics.update(this.player, this.currentLevel, tileSize, this.rotation);

        // Update particles
        this.updateParticles();

        // Check goal
        if (goalReached) {
            this.levelComplete();
        }
    }

    // Update particles
    updateParticles() {
        this.particles = this.particles.filter(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.life--;
            p.alpha = p.life / p.maxLife;
            return p.life > 0;
        });
    }

    // Create particle effect
    createParticles(x, y, color, count = 20) {
        for (let i = 0; i < count; i++) {
            const angle = (Math.PI * 2 * i) / count;
            const speed = 2 + Math.random() * 3;
            this.particles.push({
                x: x,
                y: y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                color: color,
                life: 30,
                maxLife: 30,
                alpha: 1,
                size: 3 + Math.random() * 3
            });
        }
    }

    // Draw everything
    draw() {
        const ctx = this.ctx;
        const tileSize = this.calculateTileSize();

        // Clear canvas
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Save context and apply rotation
        ctx.save();
        ctx.translate(this.canvas.width / 2, this.canvas.height / 2);
        ctx.rotate((this.rotation * Math.PI) / 180);
        ctx.translate(-this.canvas.width / 2, -this.canvas.height / 2);

        // Draw tiles
        this.drawTiles(ctx, tileSize);

        // Draw obstacles
        if (this.currentLevel.obstacles) {
            this.drawObstacles(ctx, tileSize);
        }

        // Draw goal
        this.drawGoal(ctx, tileSize);

        // Draw player
        this.drawPlayer(ctx);

        // Restore context
        ctx.restore();

        // Draw particles (not rotated)
        this.drawParticles(ctx);

        // Draw UI overlay
        this.drawUI(ctx);
    }

    // Draw tiles with paths
    drawTiles(ctx, tileSize) {
        ctx.strokeStyle = '#333';
        ctx.lineWidth = 3;

        for (const tile of this.currentLevel.tiles) {
            const x = tile.x * tileSize;
            const y = tile.y * tileSize;

            // Draw tile background
            ctx.fillStyle = '#f0f0f0';
            ctx.fillRect(x, y, tileSize, tileSize);

            // Draw walls (where there are no paths)
            ctx.fillStyle = '#333';
            const wallThickness = 5;

            if (!tile.paths.includes('N')) {
                ctx.fillRect(x, y, tileSize, wallThickness);
            }
            if (!tile.paths.includes('S')) {
                ctx.fillRect(x, y + tileSize - wallThickness, tileSize, wallThickness);
            }
            if (!tile.paths.includes('W')) {
                ctx.fillRect(x, y, wallThickness, tileSize);
            }
            if (!tile.paths.includes('E')) {
                ctx.fillRect(x + tileSize - wallThickness, y, wallThickness, tileSize);
            }
        }
    }

    // Draw obstacles
    drawObstacles(ctx, tileSize) {
        ctx.fillStyle = '#e74c3c';
        
        for (const obstacle of this.currentLevel.obstacles) {
            const x = obstacle.x * tileSize + tileSize / 2;
            const y = obstacle.y * tileSize + tileSize / 2;
            const radius = tileSize * 0.3;

            ctx.beginPath();
            ctx.arc(x, y, radius, 0, Math.PI * 2);
            ctx.fill();
            
            // Add danger symbol
            ctx.strokeStyle = '#c0392b';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(x - radius * 0.5, y - radius * 0.5);
            ctx.lineTo(x + radius * 0.5, y + radius * 0.5);
            ctx.moveTo(x + radius * 0.5, y - radius * 0.5);
            ctx.lineTo(x - radius * 0.5, y + radius * 0.5);
            ctx.stroke();
        }
    }

    // Draw goal
    drawGoal(ctx, tileSize) {
        const x = this.currentLevel.goal.x * tileSize + tileSize / 2;
        const y = this.currentLevel.goal.y * tileSize + tileSize / 2;
        const radius = tileSize * 0.3;

        // Animated goal
        const pulse = Math.sin(Date.now() / 200) * 0.1 + 1;
        
        // Outer glow
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius * pulse * 1.5);
        gradient.addColorStop(0, 'rgba(255, 165, 0, 0.8)');
        gradient.addColorStop(1, 'rgba(255, 165, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, radius * pulse * 1.5, 0, Math.PI * 2);
        ctx.fill();

        // Main goal
        ctx.fillStyle = '#ff9500';
        ctx.beginPath();
        ctx.arc(x, y, radius * pulse, 0, Math.PI * 2);
        ctx.fill();

        // Inner circle
        ctx.fillStyle = '#ffb84d';
        ctx.beginPath();
        ctx.arc(x, y, radius * pulse * 0.5, 0, Math.PI * 2);
        ctx.fill();
    }

    // Draw player
    drawPlayer(ctx) {
        // Shadow
        ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
        ctx.beginPath();
        ctx.arc(this.player.x + 2, this.player.y + 2, this.player.radius, 0, Math.PI * 2);
        ctx.fill();

        // Player body
        ctx.fillStyle = '#ffd700';
        ctx.beginPath();
        ctx.arc(this.player.x, this.player.y, this.player.radius, 0, Math.PI * 2);
        ctx.fill();

        // Player outline
        ctx.strokeStyle = '#ffed4e';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Player face
        ctx.fillStyle = '#333';
        ctx.beginPath();
        ctx.arc(this.player.x - this.player.radius * 0.3, this.player.y - this.player.radius * 0.2, 
                this.player.radius * 0.15, 0, Math.PI * 2);
        ctx.arc(this.player.x + this.player.radius * 0.3, this.player.y - this.player.radius * 0.2, 
                this.player.radius * 0.15, 0, Math.PI * 2);
        ctx.fill();
    }

    // Draw particles
    drawParticles(ctx) {
        for (const p of this.particles) {
            ctx.save();
            ctx.globalAlpha = p.alpha;
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
    }

    // Draw UI overlay
    drawUI(ctx) {
        // Time limit indicator
        if (this.currentLevel.timeLimit) {
            const remaining = this.currentLevel.timeLimit - this.elapsedTime;
            const percentage = remaining / this.currentLevel.timeLimit;
            
            ctx.fillStyle = percentage > 0.3 ? '#4caf50' : '#e74c3c';
            ctx.fillRect(0, 0, this.canvas.width * percentage, 5);
        }
    }

    // Level complete
    levelComplete() {
        this.isGameOver = true;
        this.isPaused = true;

        // Save progress
        const stars = this.calculateStars();
        this.completedLevels[this.levelIndex] = {
            completed: true,
            stars: stars,
            moves: this.moveCount,
            time: this.elapsedTime
        };
        this.saveProgress();

        // Create celebration particles
        const tileSize = this.calculateTileSize();
        const goalX = this.currentLevel.goal.x * tileSize + tileSize / 2;
        const goalY = this.currentLevel.goal.y * tileSize + tileSize / 2;
        this.createParticles(goalX, goalY, '#ffd700', 50);

        // Trigger UI update
        if (typeof window.onLevelComplete === 'function') {
            window.onLevelComplete(this.levelIndex, this.moveCount, this.elapsedTime, stars);
        }
    }

    // Calculate stars based on performance
    calculateStars() {
        let stars = 1;

        // Star 2: Complete within move limit (if exists) or under optimal moves
        const optimalMoves = Math.ceil(this.currentLevel.size * 1.5);
        if (this.moveCount <= optimalMoves) {
            stars = 2;
        }

        // Star 3: Complete quickly
        const optimalTime = this.currentLevel.size * 10;
        if (this.elapsedTime <= optimalTime && stars === 2) {
            stars = 3;
        }

        return stars;
    }

    // Game over
    gameOver(won) {
        this.isGameOver = true;
        this.isPaused = true;

        if (typeof window.onGameOver === 'function') {
            window.onGameOver(won);
        }
    }

    // Game loop
    gameLoop() {
        this.update();
        this.draw();
        this.animationId = requestAnimationFrame(() => this.gameLoop());
    }

    // Start game
    start(levelIndex = 0) {
        if (this.loadLevel(levelIndex)) {
            this.gameLoop();
            return true;
        }
        return false;
    }

    // Stop game
    stop() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
    }

    // Reset current level
    reset() {
        this.stop();
        this.start(this.levelIndex);
    }

    // Next level
    nextLevel() {
        this.stop();
        return this.start(this.levelIndex + 1);
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Game };
}
