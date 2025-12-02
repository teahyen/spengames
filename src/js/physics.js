// Physics Engine for the game
class PhysicsEngine {
    constructor() {
        this.gravity = 0.5;
        this.friction = 0.9;
        this.maxVelocity = 8;
    }

    // Apply gravity to player (always downward in screen space)
    applyGravity(player, rotation, isRotating) {
        // 회전 중에는 중력 적용 안 함 (공이 맵과 함께 회전)
        if (isRotating) {
            return;
        }
        
        // 회전이 멈춘 상태에서는 항상 아래(Y+) 방향으로 중력 적용
        // 화면 기준으로 아래 방향이므로 회전 각도 무관
        player.velocityY += this.gravity;

        // Clamp velocity
        player.velocityX = Math.max(-this.maxVelocity, Math.min(this.maxVelocity, player.velocityX));
        player.velocityY = Math.max(-this.maxVelocity, Math.min(this.maxVelocity, player.velocityY));
    }

    // Apply friction
    applyFriction(player) {
        player.velocityX *= this.friction;
        player.velocityY *= this.friction;

        // Stop if velocity is very small
        if (Math.abs(player.velocityX) < 0.01) player.velocityX = 0;
        if (Math.abs(player.velocityY) < 0.01) player.velocityY = 0;
    }

    // Update player position
    updatePosition(player) {
        player.x += player.velocityX;
        player.y += player.velocityY;
    }

    // Check collision with walls (rotation-aware)
    checkWallCollision(player, tileSize, level, rotation, canvasWidth, canvasHeight) {
        // 화면 좌표를 맵 좌표로 변환 (역회전)
        const centerX = canvasWidth / 2;
        const centerY = canvasHeight / 2;
        
        // 공의 화면 상 상대 위치
        const relX = player.x - centerX;
        const relY = player.y - centerY;
        
        // 역회전하여 맵 좌표 구하기
        const rad = (-rotation * Math.PI) / 180;
        const cos = Math.cos(rad);
        const sin = Math.sin(rad);
        
        const mapX = centerX + (relX * cos - relY * sin);
        const mapY = centerY + (relX * sin + relY * cos);
        
        // 맵 좌표에서 타일 위치 계산
        const playerTileX = Math.floor(mapX / tileSize);
        const playerTileY = Math.floor(mapY / tileSize);

        // Get current tile
        const tile = level.tiles.find(t => t.x === playerTileX && t.y === playerTileY);
        
        if (!tile) return;

        const playerRadius = player.radius;
        const tileX = playerTileX * tileSize;
        const tileY = playerTileY * tileSize;
        const wallThickness = 6; // 벽 두께

        // 맵 좌표에서 충돌 체크
        let collisionOccurred = false;
        let correctedMapX = mapX;
        let correctedMapY = mapY;
        let correctedVelX = player.velocityX;
        let correctedVelY = player.velocityY;

        // Check each wall of the tile
        // North wall
        if (!tile.paths.includes('N')) {
            if (mapY - playerRadius < tileY + wallThickness) {
                correctedMapY = tileY + wallThickness + playerRadius;
                // 속도를 맵 좌표로 변환하여 수정
                const velMapY = player.velocityX * sin + player.velocityY * cos;
                const correctedVelMapY = Math.abs(velMapY) * 0.3;
                // 다시 화면 좌표로 변환
                correctedVelX = player.velocityX * cos + correctedVelMapY * (-sin);
                correctedVelY = player.velocityX * (-sin) + correctedVelMapY * cos;
                collisionOccurred = true;
            }
        }

        // South wall
        if (!tile.paths.includes('S')) {
            if (mapY + playerRadius > tileY + tileSize - wallThickness) {
                correctedMapY = tileY + tileSize - wallThickness - playerRadius;
                const velMapY = player.velocityX * sin + player.velocityY * cos;
                const correctedVelMapY = -Math.abs(velMapY) * 0.3;
                correctedVelX = player.velocityX * cos + correctedVelMapY * (-sin);
                correctedVelY = player.velocityX * (-sin) + correctedVelMapY * cos;
                collisionOccurred = true;
            }
        }

        // West wall
        if (!tile.paths.includes('W')) {
            if (mapX - playerRadius < tileX + wallThickness) {
                correctedMapX = tileX + wallThickness + playerRadius;
                const velMapX = player.velocityX * cos - player.velocityY * sin;
                const correctedVelMapX = Math.abs(velMapX) * 0.3;
                correctedVelX = correctedVelMapX * cos + player.velocityY * sin;
                correctedVelY = correctedVelMapX * sin + player.velocityY * cos;
                collisionOccurred = true;
            }
        }

        // East wall
        if (!tile.paths.includes('E')) {
            if (mapX + playerRadius > tileX + tileSize - wallThickness) {
                correctedMapX = tileX + tileSize - wallThickness - playerRadius;
                const velMapX = player.velocityX * cos - player.velocityY * sin;
                const correctedVelMapX = -Math.abs(velMapX) * 0.3;
                correctedVelX = correctedVelMapX * cos + player.velocityY * sin;
                correctedVelY = correctedVelMapX * sin + player.velocityY * cos;
                collisionOccurred = true;
            }
        }
        
        if (collisionOccurred) {
            // 수정된 맵 좌표를 다시 화면 좌표로 변환
            const correctedRelX = correctedMapX - centerX;
            const correctedRelY = correctedMapY - centerY;
            
            const forwardRad = (rotation * Math.PI) / 180;
            const fCos = Math.cos(forwardRad);
            const fSin = Math.sin(forwardRad);
            
            player.x = centerX + (correctedRelX * fCos - correctedRelY * fSin);
            player.y = centerY + (correctedRelX * fSin + correctedRelY * fCos);
            player.velocityX = correctedVelX;
            player.velocityY = correctedVelY;
            
            // Play collision sound
            if (window.audioManager && (Math.abs(correctedVelX) > 0.5 || Math.abs(correctedVelY) > 0.5)) {
                window.audioManager.playCollision();
            }
        }
    }

    // Check collision with obstacles (rotation-aware)
    checkObstacleCollision(player, obstacles, tileSize, rotation, canvasWidth, canvasHeight) {
        const centerX = canvasWidth / 2;
        const centerY = canvasHeight / 2;
        const rad = (rotation * Math.PI) / 180;
        const cos = Math.cos(rad);
        const sin = Math.sin(rad);
        
        for (const obstacle of obstacles) {
            // 장애물의 맵 좌표
            const obstacleMapX = obstacle.x * tileSize + tileSize / 2;
            const obstacleMapY = obstacle.y * tileSize + tileSize / 2;
            const obstacleRadius = tileSize * 0.3;
            
            // 장애물을 화면 좌표로 변환
            const relObstX = obstacleMapX - centerX;
            const relObstY = obstacleMapY - centerY;
            
            const obstacleScreenX = centerX + (relObstX * cos - relObstY * sin);
            const obstacleScreenY = centerY + (relObstX * sin + relObstY * cos);

            const dx = player.x - obstacleScreenX;
            const dy = player.y - obstacleScreenY;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < player.radius + obstacleRadius) {
                // Play collision sound
                if (window.audioManager && Math.abs(player.velocityX) + Math.abs(player.velocityY) > 2) {
                    window.audioManager.playCollision();
                }
                
                // Push player away from obstacle
                const angle = Math.atan2(dy, dx);
                const overlap = player.radius + obstacleRadius - distance;
                
                player.x += Math.cos(angle) * overlap;
                player.y += Math.sin(angle) * overlap;

                // Bounce effect
                const normalX = dx / distance;
                const normalY = dy / distance;
                const dotProduct = player.velocityX * normalX + player.velocityY * normalY;

                player.velocityX = (player.velocityX - 2 * dotProduct * normalX) * 0.7;
                player.velocityY = (player.velocityY - 2 * dotProduct * normalY) * 0.7;

                return true;
            }
        }
        return false;
    }

    // Check if player reached goal (rotation-aware)
    checkGoalReached(player, goal, tileSize, rotation, canvasWidth, canvasHeight) {
        // 골의 맵 좌표
        const goalMapX = goal.x * tileSize + tileSize / 2;
        const goalMapY = goal.y * tileSize + tileSize / 2;
        const goalRadius = tileSize * 0.3;
        
        // 골을 화면 좌표로 변환 (회전 적용)
        const centerX = canvasWidth / 2;
        const centerY = canvasHeight / 2;
        
        const relGoalX = goalMapX - centerX;
        const relGoalY = goalMapY - centerY;
        
        const rad = (rotation * Math.PI) / 180;
        const cos = Math.cos(rad);
        const sin = Math.sin(rad);
        
        const goalScreenX = centerX + (relGoalX * cos - relGoalY * sin);
        const goalScreenY = centerY + (relGoalX * sin + relGoalY * cos);
        
        // 화면 좌표에서 거리 계산
        const dx = player.x - goalScreenX;
        const dy = player.y - goalScreenY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        return distance < player.radius + goalRadius;
    }

    // Keep player within bounds
    constrainToBounds(player, width, height) {
        if (player.x - player.radius < 0) {
            player.x = player.radius;
            player.velocityX = Math.abs(player.velocityX) * 0.5;
        }
        if (player.x + player.radius > width) {
            player.x = width - player.radius;
            player.velocityX = -Math.abs(player.velocityX) * 0.5;
        }
        if (player.y - player.radius < 0) {
            player.y = player.radius;
            player.velocityY = Math.abs(player.velocityY) * 0.5;
        }
        if (player.y + player.radius > height) {
            player.y = height - player.radius;
            player.velocityY = -Math.abs(player.velocityY) * 0.5;
        }
    }

    // Update physics for one frame
    update(player, level, tileSize, rotation, isRotating) {
        // Apply forces
        this.applyGravity(player, rotation, isRotating);
        this.applyFriction(player);

        // Update position
        this.updatePosition(player);

        // Check collisions
        const canvasWidth = level.size * tileSize;
        const canvasHeight = level.size * tileSize;
        
        this.constrainToBounds(player, canvasWidth, canvasHeight);
        this.checkWallCollision(player, tileSize, level, rotation, canvasWidth, canvasHeight);

        if (level.obstacles && level.obstacles.length > 0) {
            this.checkObstacleCollision(player, level.obstacles, tileSize, rotation, canvasWidth, canvasHeight);
        }

        // Check goal
        return this.checkGoalReached(player, level.goal, tileSize, rotation, canvasWidth, canvasHeight);
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PhysicsEngine };
}
