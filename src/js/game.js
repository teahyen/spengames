// Main Game Engine
class Game {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.physics = new PhysicsEngine();
        
        // Game state
        this.currentLevel = null;
        this.currentLevelIndex = 0;
        this.rotation = 0;
        this.targetRotation = 0;
        this.isRotating = false;
        this.moveCount = 0;
        this.startTime = null;
        this.elapsedTime = 0;
        this.isPaused = false;
        this.isGameWon = false;
        
        // Player state
        this.player = {
            x: 0,
            y: 0,
            velocityX: 0,
            velocityY: 0,
            radius: 0
        };
        
        // Drag and gyroscope removed - button controls only
        
        // Animation
        this.animationId = null;
        
        // Powerup effects
        this.activePowerups = [];
        
        this.setupCanvas();
        this.setupControls();
    }
    
    setupCanvas() {
        // Make canvas responsive
        const container = this.canvas.parentElement;
        const size = Math.min(container.clientWidth - 40, container.clientHeight - 40, 600);
        this.canvas.width = size;
        this.canvas.height = size;
    }
    
    setupControls() {
        // Keyboard controls
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.rotateLeft();
            } else if (e.key === 'ArrowRight') {
                this.rotateRight();
            } else if (e.key === 'r' || e.key === 'R') {
                this.reset();
            }
        });
        
        // No drag controls - removed
        // No gyroscope controls - removed
    }
    

    
    loadLevel(levelIndex) {
        this.currentLevelIndex = levelIndex;
        this.currentLevel = LEVELS[levelIndex];
        
        if (!this.currentLevel) {
            console.error('Level not found:', levelIndex);
            return;
        }
        
        this.setupCanvas();
        
        // Calculate tile size
        this.tileSize = this.canvas.width / this.currentLevel.size;
        
        // Initialize player at start position
        this.player.x = this.currentLevel.start.x * this.tileSize + this.tileSize / 2;
        this.player.y = this.currentLevel.start.y * this.tileSize + this.tileSize / 2;
        this.player.velocityX = 0;
        this.player.velocityY = 0;
        this.player.radius = this.tileSize * 0.2;
        
        // Reset game state (회전도 0으로 초기화)
        this.rotation = 0;
        this.targetRotation = 0;
        this.moveCount = 0;
        this.startTime = Date.now();
        this.elapsedTime = 0;
        this.isPaused = false;
        this.isGameWon = false;
        this.activePowerups = [];
        
        // Start game loop
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        this.gameLoop();
    }
    
    rotateLeft() {
        this.targetRotation -= 90; // 90도씩 회전
        this.moveCount++;
        this.updateMoveDisplay();
        if (window.audioManager) window.audioManager.playRotate();
    }
    
    rotateRight() {
        this.targetRotation += 90; // 90도씩 회전
        this.moveCount++;
        this.updateMoveDisplay();
        if (window.audioManager) window.audioManager.playRotate();
    }
    
    updateMoveDisplay() {
        const moveCountElement = document.getElementById('moveCount');
        if (moveCountElement) {
            moveCountElement.textContent = `이동: ${this.moveCount}`;
        }
    }
    
    reset() {
        this.loadLevel(this.currentLevelIndex);
    }
    
    gameLoop() {
        if (this.isPaused || this.isGameWon) {
            this.animationId = requestAnimationFrame(() => this.gameLoop());
            return;
        }
        
        // Smooth rotation with isRotating flag
        const wasRotating = this.isRotating;
        if (Math.abs(this.rotation - this.targetRotation) > 0.5) {
            this.isRotating = true;
            this.rotation += (this.targetRotation - this.rotation) * 0.15; // 0.1 → 0.15로 증가
            
            // 회전 중에는 속도를 약간 감소시켜 벽 통과 방지
            if (this.isRotating) {
                this.player.velocityX *= 0.95;
                this.player.velocityY *= 0.95;
            }
        } else {
            this.rotation = this.targetRotation;
            this.isRotating = false;
        }
        
        // Update physics
        const goalReached = this.physics.update(
            this.player,
            this.currentLevel,
            this.tileSize,
            this.rotation
        );
        
        // Check powerups
        this.checkPowerups();
        
        // Check win condition
        if (goalReached) {
            this.handleWin();
            return;
        }
        
        // Check time limit
        if (this.currentLevel.timeLimit) {
            this.elapsedTime = (Date.now() - this.startTime) / 1000;
            if (this.elapsedTime >= this.currentLevel.timeLimit) {
                this.handleTimeOut();
                return;
            }
        }
        
        // Check move limit
        if (this.currentLevel.moveLimit && this.moveCount > this.currentLevel.moveLimit) {
            this.handleMoveLimit();
            return;
        }
        
        // Render
        this.render();
        
        // Continue loop
        this.animationId = requestAnimationFrame(() => this.gameLoop());
    }
    
    checkPowerups() {
        if (!this.currentLevel.powerups) return;
        
        for (let i = this.currentLevel.powerups.length - 1; i >= 0; i--) {
            const powerup = this.currentLevel.powerups[i];
            const powerupX = powerup.x * this.tileSize + this.tileSize / 2;
            const powerupY = powerup.y * this.tileSize + this.tileSize / 2;
            
            const dx = this.player.x - powerupX;
            const dy = this.player.y - powerupY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < this.player.radius + this.tileSize * 0.2) {
                this.activatePowerup(powerup);
                this.currentLevel.powerups.splice(i, 1);
            }
        }
    }
    
    activatePowerup(powerup) {
        if (window.audioManager) window.audioManager.playPowerup();
        
        switch (powerup.type) {
            case 'extra_time':
                if (this.currentLevel.timeLimit) {
                    this.startTime += 30000; // Add 30 seconds
                }
                break;
            case 'teleport':
                // Teleport to random safe location
                const safeTiles = this.currentLevel.tiles.filter(t => 
                    !this.currentLevel.obstacles.some(o => o.x === t.x && o.y === t.y)
                );
                const randomTile = safeTiles[Math.floor(Math.random() * safeTiles.length)];
                this.player.x = randomTile.x * this.tileSize + this.tileSize / 2;
                this.player.y = randomTile.y * this.tileSize + this.tileSize / 2;
                this.player.velocityX = 0;
                this.player.velocityY = 0;
                break;
            case 'remove_obstacle':
                if (this.currentLevel.obstacles.length > 0) {
                    this.currentLevel.obstacles.pop();
                }
                break;
        }
    }
    
    handleWin() {
        this.isGameWon = true;
        this.isPaused = true;
        
        // Play win sound
        if (window.audioManager) window.audioManager.playStageClear();
        
        // Calculate stars (based on moves and time)
        let stars = 3;
        if (this.currentLevel.moveLimit) {
            const movesUsed = this.moveCount / this.currentLevel.moveLimit;
            if (movesUsed > 0.8) stars = 1;
            else if (movesUsed > 0.5) stars = 2;
        }
        
        // Save progress
        this.saveProgress(stars);
        
        // Show clear screen
        if (typeof showStageClear === 'function') {
            showStageClear(this.currentLevelIndex + 1, this.moveCount, this.elapsedTime, stars);
        }
    }
    
    handleTimeOut() {
        this.isPaused = true;
        if (window.audioManager) window.audioManager.playGameOver();
        alert('시간 초과! 다시 시도하세요.');
        this.reset();
    }
    
    handleMoveLimit() {
        this.isPaused = true;
        if (window.audioManager) window.audioManager.playGameOver();
        alert('이동 횟수 초과! 다시 시도하세요.');
        this.reset();
    }
    
    saveProgress(stars) {
        const progress = JSON.parse(localStorage.getItem('gameProgress') || '{}');
        const levelId = this.currentLevel.id;
        
        if (!progress[levelId] || progress[levelId].stars < stars) {
            progress[levelId] = {
                completed: true,
                stars: stars,
                moves: this.moveCount,
                time: this.elapsedTime
            };
            localStorage.setItem('gameProgress', JSON.stringify(progress));
        }
    }
    
    render() {
        const ctx = this.ctx;
        const size = this.canvas.width;
        
        // Clear canvas
        ctx.clearRect(0, 0, size, size);
        
        // Save context state
        ctx.save();
        
        // Translate to center for rotation
        ctx.translate(size / 2, size / 2);
        ctx.rotate((this.rotation * Math.PI) / 180);
        ctx.translate(-size / 2, -size / 2);
        
        // Draw maze
        this.drawMaze();
        
        // Draw obstacles
        this.drawObstacles();
        
        // Draw powerups
        this.drawPowerups();
        
        // Draw goal
        this.drawGoal();
        
        // Draw start indicator
        this.drawStart();
        
        // Restore context for player (player doesn't rotate with maze)
        ctx.restore();
        
        // Draw player
        this.drawPlayer();
        
        // Draw UI overlays
        this.drawUI();
    }
    
    drawMaze() {
        const ctx = this.ctx;
        const wallThickness = 4;
        
        for (const tile of this.currentLevel.tiles) {
            const x = tile.x * this.tileSize;
            const y = tile.y * this.tileSize;
            
            // Draw tile background
            ctx.fillStyle = '#f0f0f0';
            ctx.fillRect(x, y, this.tileSize, this.tileSize);
            
            // Draw grid lines
            ctx.strokeStyle = '#ddd';
            ctx.lineWidth = 1;
            ctx.strokeRect(x, y, this.tileSize, this.tileSize);
            
            // Draw walls (where there are NO paths)
            ctx.fillStyle = '#333';
            
            if (!tile.paths.includes('N')) {
                ctx.fillRect(x, y, this.tileSize, wallThickness);
            }
            if (!tile.paths.includes('S')) {
                ctx.fillRect(x, y + this.tileSize - wallThickness, this.tileSize, wallThickness);
            }
            if (!tile.paths.includes('W')) {
                ctx.fillRect(x, y, wallThickness, this.tileSize);
            }
            if (!tile.paths.includes('E')) {
                ctx.fillRect(x + this.tileSize - wallThickness, y, wallThickness, this.tileSize);
            }
        }
    }
    
    drawObstacles() {
        if (!this.currentLevel.obstacles) return;
        
        const ctx = this.ctx;
        for (const obstacle of this.currentLevel.obstacles) {
            const x = obstacle.x * this.tileSize + this.tileSize / 2;
            const y = obstacle.y * this.tileSize + this.tileSize / 2;
            const radius = this.tileSize * 0.3;
            
            // Draw obstacle
            ctx.fillStyle = '#e74c3c';
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, Math.PI * 2);
            ctx.fill();
            
            // Draw highlight
            ctx.fillStyle = '#c0392b';
            ctx.beginPath();
            ctx.arc(x, y, radius * 0.6, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    drawPowerups() {
        if (!this.currentLevel.powerups) return;
        
        const ctx = this.ctx;
        const time = Date.now() / 1000;
        
        for (const powerup of this.currentLevel.powerups) {
            const x = powerup.x * this.tileSize + this.tileSize / 2;
            const y = powerup.y * this.tileSize + this.tileSize / 2;
            const radius = this.tileSize * 0.2;
            
            // Pulsing effect
            const scale = 1 + Math.sin(time * 3) * 0.2;
            
            // Different colors for different powerups
            let color = '#3498db';
            if (powerup.type === 'extra_time') color = '#2ecc71';
            else if (powerup.type === 'teleport') color = '#9b59b6';
            else if (powerup.type === 'remove_obstacle') color = '#f39c12';
            
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.arc(x, y, radius * scale, 0, Math.PI * 2);
            ctx.fill();
            
            // Draw icon
            ctx.fillStyle = 'white';
            ctx.font = `${this.tileSize * 0.25}px Arial`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            
            let icon = '?';
            if (powerup.type === 'extra_time') icon = '+';
            else if (powerup.type === 'teleport') icon = '⚡';
            else if (powerup.type === 'remove_obstacle') icon = '×';
            
            ctx.fillText(icon, x, y);
        }
    }
    
    drawGoal() {
        const ctx = this.ctx;
        const x = this.currentLevel.goal.x * this.tileSize + this.tileSize / 2;
        const y = this.currentLevel.goal.y * this.tileSize + this.tileSize / 2;
        const radius = this.tileSize * 0.3;
        const time = Date.now() / 1000;
        
        // Pulsing animation
        const scale = 1 + Math.sin(time * 2) * 0.1;
        
        // Draw goal with gradient
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius * scale);
        gradient.addColorStop(0, '#ff9500');
        gradient.addColorStop(1, '#ff6b00');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, radius * scale, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw center
        ctx.fillStyle = '#ffd700';
        ctx.beginPath();
        ctx.arc(x, y, radius * 0.5, 0, Math.PI * 2);
        ctx.fill();
    }
    
    drawStart() {
        const ctx = this.ctx;
        const x = this.currentLevel.start.x * this.tileSize + this.tileSize / 2;
        const y = this.currentLevel.start.y * this.tileSize + this.tileSize / 2;
        const radius = this.tileSize * 0.15;
        
        // Draw start marker
        ctx.fillStyle = '#ffeb3b';
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.strokeStyle = '#fbc02d';
        ctx.lineWidth = 2;
        ctx.stroke();
    }
    
    drawPlayer() {
        const ctx = this.ctx;
        
        // Draw shadow
        ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
        ctx.beginPath();
        ctx.arc(this.player.x + 3, this.player.y + 3, this.player.radius, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw player with gradient
        const gradient = ctx.createRadialGradient(
            this.player.x - this.player.radius * 0.3,
            this.player.y - this.player.radius * 0.3,
            0,
            this.player.x,
            this.player.y,
            this.player.radius
        );
        gradient.addColorStop(0, '#667eea');
        gradient.addColorStop(1, '#764ba2');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.player.x, this.player.y, this.player.radius, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw highlight
        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.beginPath();
        ctx.arc(
            this.player.x - this.player.radius * 0.3,
            this.player.y - this.player.radius * 0.3,
            this.player.radius * 0.4,
            0,
            Math.PI * 2
        );
        ctx.fill();
    }
    
    drawUI() {
        const ctx = this.ctx;
        
        // Draw time limit if exists
        if (this.currentLevel.timeLimit) {
            const remaining = Math.max(0, this.currentLevel.timeLimit - this.elapsedTime);
            const minutes = Math.floor(remaining / 60);
            const seconds = Math.floor(remaining % 60);
            
            ctx.fillStyle = remaining < 10 ? '#e74c3c' : '#333';
            ctx.font = 'bold 20px Arial';
            ctx.textAlign = 'right';
            ctx.fillText(`⏱ ${minutes}:${seconds.toString().padStart(2, '0')}`, this.canvas.width - 10, 30);
        }
        
        // Draw move limit if exists
        if (this.currentLevel.moveLimit) {
            const remaining = Math.max(0, this.currentLevel.moveLimit - this.moveCount);
            ctx.fillStyle = remaining < 5 ? '#e74c3c' : '#333';
            ctx.font = 'bold 20px Arial';
            ctx.textAlign = 'left';
            ctx.fillText(`🚶 ${remaining}`, 10, 30);
        }
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Game };
}
