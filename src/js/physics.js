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

    // Check collision with walls (improved for rotation)
    checkWallCollision(player, tileSize, level) {
        const playerTileX = Math.floor(player.x / tileSize);
        const playerTileY = Math.floor(player.y / tileSize);

        // Get current tile
        const tile = level.tiles.find(t => t.x === playerTileX && t.y === playerTileY);
        
        if (!tile) return;

        const playerRadius = player.radius;
        const tileX = playerTileX * tileSize;
        const tileY = playerTileY * tileSize;
        const wallThickness = 6; // 벽 두께 증가 (4 → 6)

        // Check each wall of the tile with improved collision
        // North wall
        if (!tile.paths.includes('N')) {
            if (player.y - playerRadius < tileY + wallThickness) {
                player.y = tileY + wallThickness + playerRadius;
                player.velocityY = Math.abs(player.velocityY) * 0.3; // 반발력 감소
                // Play collision sound
                if (window.audioManager && Math.abs(player.velocityY) > 0.5) {
                    window.audioManager.playCollision();
                }
            }
        }

        // South wall
        if (!tile.paths.includes('S')) {
            if (player.y + playerRadius > tileY + tileSize - wallThickness) {
                player.y = tileY + tileSize - wallThickness - playerRadius;
                player.velocityY = -Math.abs(player.velocityY) * 0.3; // 반발력 감소
                // Play collision sound
                if (window.audioManager && Math.abs(player.velocityY) > 0.5) {
                    window.audioManager.playCollision();
                }
            }
        }

        // West wall
        if (!tile.paths.includes('W')) {
            if (player.x - playerRadius < tileX + wallThickness) {
                player.x = tileX + wallThickness + playerRadius;
                player.velocityX = Math.abs(player.velocityX) * 0.3; // 반발력 감소
                // Play collision sound
                if (window.audioManager && Math.abs(player.velocityX) > 0.5) {
                    window.audioManager.playCollision();
                }
            }
        }

        // East wall
        if (!tile.paths.includes('E')) {
            if (player.x + playerRadius > tileX + tileSize - wallThickness) {
                player.x = tileX + tileSize - wallThickness - playerRadius;
                player.velocityX = -Math.abs(player.velocityX) * 0.3; // 반발력 감소
                // Play collision sound
                if (window.audioManager && Math.abs(player.velocityX) > 0.5) {
                    window.audioManager.playCollision();
                }
            }
        }
    }

    // Check collision with obstacles
    checkObstacleCollision(player, obstacles, tileSize) {
        for (const obstacle of obstacles) {
            const obstacleX = obstacle.x * tileSize + tileSize / 2;
            const obstacleY = obstacle.y * tileSize + tileSize / 2;
            const obstacleRadius = tileSize * 0.3;

            const dx = player.x - obstacleX;
            const dy = player.y - obstacleY;
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

    // Check if player reached goal
    checkGoalReached(player, goal, tileSize) {
        const goalX = goal.x * tileSize + tileSize / 2;
        const goalY = goal.y * tileSize + tileSize / 2;
        const goalRadius = tileSize * 0.3;

        const dx = player.x - goalX;
        const dy = player.y - goalY;
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
        this.checkWallCollision(player, tileSize, level);

        if (level.obstacles && level.obstacles.length > 0) {
            this.checkObstacleCollision(player, level.obstacles, tileSize);
        }

        // Check goal
        return this.checkGoalReached(player, level.goal, tileSize);
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PhysicsEngine };
}
