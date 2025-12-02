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
        
        // Moving boxes state (초록 네모 - 중력 영향 받는 상자)
        this.movingBoxes = [];
        
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
        this.isRotating = false;
        this.moveCount = 0;
        this.startTime = Date.now();
        this.elapsedTime = 0;
        this.isPaused = false;
        this.isGameWon = false;
        this.activePowerups = [];
        this.deathCount = 0; // 사망 횟수
        
        // 시작 위치 저장 (리스폰용)
        this.startPosition = {
            x: this.currentLevel.start.x * this.tileSize + this.tileSize / 2,
            y: this.currentLevel.start.y * this.tileSize + this.tileSize / 2
        };
        
        // Initialize moving boxes (초록 네모)
        this.movingBoxes = [];
        if (this.currentLevel.movingBoxes) {
            this.currentLevel.movingBoxes.forEach(box => {
                this.movingBoxes.push({
                    x: box.x * this.tileSize + this.tileSize / 2,
                    y: box.y * this.tileSize + this.tileSize / 2,
                    velocityX: 0,
                    velocityY: 0,
                    size: this.tileSize * 0.4,
                    mass: 2 // 공보다 무거움
                });
            });
        }
        
        // BGM 재시작 (기존 BGM이 있으면 정지 후 재시작)
        if (window.audioManager && window.audioManager.enabled) {
            window.audioManager.stopBGM();
            setTimeout(() => {
                if (window.audioManager) window.audioManager.startBGM();
            }, 100);
        }
        
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
        
        // Smooth rotation with player rotation inheritance
        const wasRotating = this.isRotating;
        if (Math.abs(this.rotation - this.targetRotation) > 0.5) {
            this.isRotating = true;
            
            const prevRotation = this.rotation;
            this.rotation += (this.targetRotation - this.rotation) * 0.15;
            const deltaRotation = this.rotation - prevRotation;
            
            // 회전 중: 공을 맵과 함께 회전 (맵 중심 기준)
            const centerX = this.canvas.width / 2;
            const centerY = this.canvas.height / 2;
            
            // 공의 현재 위치를 중심 기준 상대 좌표로 변환
            const relX = this.player.x - centerX;
            const relY = this.player.y - centerY;
            
            // 회전 변화량만큼 공 위치 회전
            const deltaRad = (deltaRotation * Math.PI) / 180;
            const cos = Math.cos(deltaRad);
            const sin = Math.sin(deltaRad);
            
            const newRelX = relX * cos - relY * sin;
            const newRelY = relX * sin + relY * cos;
            
            // 절대 좌표로 다시 변환
            this.player.x = centerX + newRelX;
            this.player.y = centerY + newRelY;
            
            // 속도도 회전 (방향 유지)
            const oldVelX = this.player.velocityX;
            const oldVelY = this.player.velocityY;
            this.player.velocityX = oldVelX * cos - oldVelY * sin;
            this.player.velocityY = oldVelX * sin + oldVelY * cos;
        } else {
            this.rotation = this.targetRotation;
            this.isRotating = false;
        }
        
        // Update physics (중력은 항상 아래 방향)
        const goalReached = this.physics.update(
            this.player,
            this.currentLevel,
            this.tileSize,
            this.rotation,
            this.isRotating  // 회전 중 여부 전달
        );
        
        // Update moving boxes physics
        this.updateMovingBoxes();
        
        // Check powerups
        this.checkPowerups();
        
        // Check obstacle collision (장애물에 닿으면 리스폰)
        if (this.checkObstacleHit()) {
            this.handleObstacleHit();
            return;
        }
        
        // Check death walls (빨간 벽 - 닿으면 게임 오버)
        if (this.checkDeathWalls()) {
            this.handleDeath();
            return;
        }
        
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
        
        const centerX = this.canvas.width / 2;
        const centerY = this.canvas.height / 2;
        const rad = (this.rotation * Math.PI) / 180;
        const cos = Math.cos(rad);
        const sin = Math.sin(rad);
        
        for (let i = this.currentLevel.powerups.length - 1; i >= 0; i--) {
            const powerup = this.currentLevel.powerups[i];
            // 파워업의 맵 좌표
            const powerupMapX = powerup.x * this.tileSize + this.tileSize / 2;
            const powerupMapY = powerup.y * this.tileSize + this.tileSize / 2;
            
            // 맵 좌표를 화면 좌표로 변환 (회전 적용)
            const relPowerupX = powerupMapX - centerX;
            const relPowerupY = powerupMapY - centerY;
            
            const powerupScreenX = centerX + (relPowerupX * cos - relPowerupY * sin);
            const powerupScreenY = centerY + (relPowerupX * sin + relPowerupY * cos);
            
            // 화면 좌표에서 거리 계산
            const dx = this.player.x - powerupScreenX;
            const dy = this.player.y - powerupScreenY;
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
                    !this.currentLevel.obstacles || !this.currentLevel.obstacles.some(o => o.x === t.x && o.y === t.y)
                );
                const randomTile = safeTiles[Math.floor(Math.random() * safeTiles.length)];
                
                // 맵 좌표에서 텔레포트 위치 계산
                const teleportMapX = randomTile.x * this.tileSize + this.tileSize / 2;
                const teleportMapY = randomTile.y * this.tileSize + this.tileSize / 2;
                
                // 맵 좌표를 화면 좌표로 변환 (회전 적용)
                const centerX = this.canvas.width / 2;
                const centerY = this.canvas.height / 2;
                const rad = (this.rotation * Math.PI) / 180;
                const cos = Math.cos(rad);
                const sin = Math.sin(rad);
                
                const relX = teleportMapX - centerX;
                const relY = teleportMapY - centerY;
                
                this.player.x = centerX + (relX * cos - relY * sin);
                this.player.y = centerY + (relX * sin + relY * cos);
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
        
        // Calculate stars based on death count only
        let stars = 3; // 기본 3개
        
        // 사망 횟수에 따른 별 감소
        if (this.deathCount >= 5) {
            stars = 1;
        } else if (this.deathCount >= 3) {
            stars = 2;
        }
        // 0-2회 사망: 3개 별
        
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
    
    handleDeath() {
        this.isPaused = true;
        if (window.audioManager) window.audioManager.playGameOver();
        alert('게임 오버! 빨간 벽에 닿았습니다.');
        this.reset();
    }
    
    checkObstacleHit() {
        if (!this.currentLevel.obstacles) return false;
        
        const centerX = this.canvas.width / 2;
        const centerY = this.canvas.height / 2;
        const rad = (this.rotation * Math.PI) / 180;
        const cos = Math.cos(rad);
        const sin = Math.sin(rad);
        
        for (const obstacle of this.currentLevel.obstacles) {
            // 장애물의 맵 좌표
            const obstacleMapX = obstacle.x * this.tileSize + this.tileSize / 2;
            const obstacleMapY = obstacle.y * this.tileSize + this.tileSize / 2;
            const obstacleRadius = this.tileSize * 0.3;
            
            // 장애물을 화면 좌표로 변환
            const relObstX = obstacleMapX - centerX;
            const relObstY = obstacleMapY - centerY;
            
            const obstacleScreenX = centerX + (relObstX * cos - relObstY * sin);
            const obstacleScreenY = centerY + (relObstX * sin + relObstY * cos);

            const dx = this.player.x - obstacleScreenX;
            const dy = this.player.y - obstacleScreenY;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.player.radius + obstacleRadius) {
                return true;
            }
        }
        return false;
    }
    
    handleObstacleHit() {
        // 사망 횟수 증가
        this.deathCount++;
        
        // 사망 사운드 재생
        if (window.audioManager) {
            window.audioManager.playGameOver();
        }
        
        // 공을 시작 위치로 리스폰
        this.player.x = this.startPosition.x;
        this.player.y = this.startPosition.y;
        this.player.velocityX = 0;
        this.player.velocityY = 0;
        
        // 회전도 초기화
        this.rotation = 0;
        this.targetRotation = 0;
        this.isRotating = false;
        
        // 무빙 박스도 초기화
        if (this.currentLevel.movingBoxes) {
            this.movingBoxes = [];
            this.currentLevel.movingBoxes.forEach(box => {
                this.movingBoxes.push({
                    x: box.x * this.tileSize + this.tileSize / 2,
                    y: box.y * this.tileSize + this.tileSize / 2,
                    velocityX: 0,
                    velocityY: 0,
                    size: this.tileSize * 0.4,
                    mass: 2
                });
            });
        }
        
        // BGM은 계속 재생 (중단하지 않음)
        // 잠시 일시정지 후 재개
        this.isPaused = true;
        setTimeout(() => {
            this.isPaused = false;
        }, 300);
    }
    
    checkDeathWalls() {
        if (!this.currentLevel.deathWalls) return false;
        
        const centerX = this.canvas.width / 2;
        const centerY = this.canvas.height / 2;
        const rad = (this.rotation * Math.PI) / 180;
        const cos = Math.cos(rad);
        const sin = Math.sin(rad);
        
        // 공의 화면 위치를 맵 좌표로 역변환
        const relX = this.player.x - centerX;
        const relY = this.player.y - centerY;
        const invRad = -rad;
        const invCos = Math.cos(invRad);
        const invSin = Math.sin(invRad);
        const playerMapX = centerX + (relX * invCos - relY * invSin);
        const playerMapY = centerY + (relX * invSin + relY * invCos);
        
        for (const wall of this.currentLevel.deathWalls) {
            const tileX = wall.x * this.tileSize;
            const tileY = wall.y * this.tileSize;
            const wallThickness = 8;
            
            // Check which side has the death wall
            if (wall.side === 'N' && playerMapY - this.player.radius < tileY + wallThickness) {
                if (playerMapX >= tileX && playerMapX <= tileX + this.tileSize) {
                    return true;
                }
            }
            if (wall.side === 'S' && playerMapY + this.player.radius > tileY + this.tileSize - wallThickness) {
                if (playerMapX >= tileX && playerMapX <= tileX + this.tileSize) {
                    return true;
                }
            }
            if (wall.side === 'W' && playerMapX - this.player.radius < tileX + wallThickness) {
                if (playerMapY >= tileY && playerMapY <= tileY + this.tileSize) {
                    return true;
                }
            }
            if (wall.side === 'E' && playerMapX + this.player.radius > tileX + this.tileSize - wallThickness) {
                if (playerMapY >= tileY && playerMapY <= tileY + this.tileSize) {
                    return true;
                }
            }
        }
        return false;
    }
    
    updateMovingBoxes() {
        if (!this.movingBoxes || this.movingBoxes.length === 0) return;
        
        const gravity = 0.5;
        const friction = 0.9;
        
        for (const box of this.movingBoxes) {
            // 회전 중이 아닐 때만 중력 적용
            if (!this.isRotating) {
                box.velocityY += gravity;
            }
            
            // 마찰력 적용
            box.velocityX *= friction;
            box.velocityY *= friction;
            
            // 위치 업데이트
            box.x += box.velocityX;
            box.y += box.velocityY;
            
            // 경계 체크
            const canvasWidth = this.currentLevel.size * this.tileSize;
            const canvasHeight = this.currentLevel.size * this.tileSize;
            const halfSize = box.size / 2;
            
            if (box.x - halfSize < 0) {
                box.x = halfSize;
                box.velocityX = Math.abs(box.velocityX) * 0.5;
            }
            if (box.x + halfSize > canvasWidth) {
                box.x = canvasWidth - halfSize;
                box.velocityX = -Math.abs(box.velocityX) * 0.5;
            }
            if (box.y - halfSize < 0) {
                box.y = halfSize;
                box.velocityY = Math.abs(box.velocityY) * 0.5;
            }
            if (box.y + halfSize > canvasHeight) {
                box.y = canvasHeight - halfSize;
                box.velocityY = -Math.abs(box.velocityY) * 0.5;
            }
            
            // 공과의 충돌 체크
            const dx = this.player.x - box.x;
            const dy = this.player.y - box.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const minDist = this.player.radius + halfSize;
            
            if (distance < minDist) {
                // 충돌 처리 - 공이 상자를 밀음
                const angle = Math.atan2(dy, dx);
                const overlap = minDist - distance;
                
                // 상자를 밀어냄
                box.x -= Math.cos(angle) * overlap * 0.7;
                box.y -= Math.sin(angle) * overlap * 0.7;
                
                // 운동량 전달
                const relVelX = this.player.velocityX - box.velocityX;
                const relVelY = this.player.velocityY - box.velocityY;
                const normalX = dx / distance;
                const normalY = dy / distance;
                const dotProduct = relVelX * normalX + relVelY * normalY;
                
                if (dotProduct > 0) {
                    const impulse = dotProduct * 0.5;
                    box.velocityX += normalX * impulse * 0.5;
                    box.velocityY += normalY * impulse * 0.5;
                    this.player.velocityX -= normalX * impulse;
                    this.player.velocityY -= normalY * impulse;
                }
            }
        }
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
        
        // Draw death walls (빨간 벽)
        this.drawDeathWalls();
        
        // Draw obstacles
        this.drawObstacles();
        
        // Draw moving boxes (초록 네모)
        this.drawMovingBoxes();
        
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
    
    drawDeathWalls() {
        if (!this.currentLevel.deathWalls) return;
        
        const ctx = this.ctx;
        const wallThickness = 8;
        const time = Date.now() / 1000;
        
        // 번쩍이는 효과
        const pulse = 0.7 + Math.sin(time * 5) * 0.3;
        
        for (const wall of this.currentLevel.deathWalls) {
            const x = wall.x * this.tileSize;
            const y = wall.y * this.tileSize;
            
            ctx.fillStyle = `rgba(220, 20, 20, ${pulse})`;
            
            // Draw death wall on specified side
            if (wall.side === 'N') {
                ctx.fillRect(x, y, this.tileSize, wallThickness);
            } else if (wall.side === 'S') {
                ctx.fillRect(x, y + this.tileSize - wallThickness, this.tileSize, wallThickness);
            } else if (wall.side === 'W') {
                ctx.fillRect(x, y, wallThickness, this.tileSize);
            } else if (wall.side === 'E') {
                ctx.fillRect(x + this.tileSize - wallThickness, y, wallThickness, this.tileSize);
            }
            
            // 위험 표시 (작은 삼각형들)
            ctx.fillStyle = `rgba(255, 255, 0, ${pulse})`;
            if (wall.side === 'N' || wall.side === 'S') {
                for (let i = 0; i < 3; i++) {
                    const tx = x + (i + 0.5) * this.tileSize / 3;
                    const ty = wall.side === 'N' ? y + wallThickness / 2 : y + this.tileSize - wallThickness / 2;
                    this.drawWarningTriangle(ctx, tx, ty, 5, wall.side === 'N');
                }
            } else {
                for (let i = 0; i < 3; i++) {
                    const tx = wall.side === 'W' ? x + wallThickness / 2 : x + this.tileSize - wallThickness / 2;
                    const ty = y + (i + 0.5) * this.tileSize / 3;
                    this.drawWarningTriangle(ctx, tx, ty, 5, wall.side === 'W', true);
                }
            }
        }
    }
    
    drawWarningTriangle(ctx, x, y, size, pointUp, horizontal = false) {
        ctx.beginPath();
        if (horizontal) {
            if (pointUp) { // Left
                ctx.moveTo(x - size, y);
                ctx.lineTo(x + size, y - size);
                ctx.lineTo(x + size, y + size);
            } else { // Right
                ctx.moveTo(x + size, y);
                ctx.lineTo(x - size, y - size);
                ctx.lineTo(x - size, y + size);
            }
        } else {
            if (pointUp) {
                ctx.moveTo(x, y - size);
                ctx.lineTo(x - size, y + size);
                ctx.lineTo(x + size, y + size);
            } else {
                ctx.moveTo(x, y + size);
                ctx.lineTo(x - size, y - size);
                ctx.lineTo(x + size, y - size);
            }
        }
        ctx.closePath();
        ctx.fill();
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
    
    drawMovingBoxes() {
        if (!this.movingBoxes || this.movingBoxes.length === 0) return;
        
        const ctx = this.ctx;
        const time = Date.now() / 1000;
        
        for (const box of this.movingBoxes) {
            const halfSize = box.size / 2;
            
            // 그림자
            ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
            ctx.fillRect(box.x - halfSize + 3, box.y - halfSize + 3, box.size, box.size);
            
            // 메인 박스 - 초록색
            const gradient = ctx.createLinearGradient(
                box.x - halfSize, box.y - halfSize,
                box.x + halfSize, box.y + halfSize
            );
            gradient.addColorStop(0, '#2ecc71');
            gradient.addColorStop(1, '#27ae60');
            
            ctx.fillStyle = gradient;
            ctx.fillRect(box.x - halfSize, box.y - halfSize, box.size, box.size);
            
            // 테두리
            ctx.strokeStyle = '#1e8449';
            ctx.lineWidth = 2;
            ctx.strokeRect(box.x - halfSize, box.y - halfSize, box.size, box.size);
            
            // 무늬 (목재 상자 느낌)
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(box.x - halfSize, box.y);
            ctx.lineTo(box.x + halfSize, box.y);
            ctx.moveTo(box.x, box.y - halfSize);
            ctx.lineTo(box.x, box.y + halfSize);
            ctx.stroke();
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
        
        // 사망 횟수 표시 (우측 상단)
        if (this.deathCount > 0) {
            let color = '#333';
            if (this.deathCount >= 5) {
                color = '#e74c3c'; // 빨간색 (1 star)
            } else if (this.deathCount >= 3) {
                color = '#f39c12'; // 주황색 (2 stars)
            }
            
            ctx.fillStyle = color;
            ctx.font = 'bold 24px Arial';
            ctx.textAlign = 'right';
            ctx.fillText(`💀 ${this.deathCount}`, this.canvas.width - 10, 30);
        }
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Game };
}
