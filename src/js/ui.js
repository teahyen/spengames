// UI Controller
class UIController {
    constructor() {
        this.currentScreen = 'mainMenu';
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        // Main menu buttons
        document.getElementById('startButton').addEventListener('click', () => {
            if (window.audioManager) window.audioManager.playClick();
            this.startGame(0);
        });
        
        // Sound toggle
        const soundToggle = document.getElementById('soundToggle');
        if (soundToggle) {
            soundToggle.addEventListener('click', () => {
                if (window.audioManager) {
                    const enabled = window.audioManager.toggle();
                    const icon = document.getElementById('soundIcon');
                    icon.textContent = enabled ? '🔊' : '🔇';
                    soundToggle.classList.toggle('muted', !enabled);
                    
                    // Toggle BGM based on sound state
                    if (enabled) {
                        window.audioManager.playClick();
                        if (this.currentScreen === 'gameScreen') {
                            window.audioManager.startBGM();
                        }
                    } else {
                        window.audioManager.stopBGM();
                    }
                }
            });
        }
        
        // Game control buttons
        document.getElementById('resetButton').addEventListener('click', () => {
            if (window.game) {
                window.game.reset();
            }
        });
        
        document.getElementById('menuButton').addEventListener('click', () => {
            this.showScreen('mainMenu');
            if (window.game) {
                window.game.isPaused = true;
            }
        });
        
        document.getElementById('rotateLeftBtn').addEventListener('click', () => {
            if (window.game) {
                window.game.rotateLeft();
            }
        });
        
        document.getElementById('rotateRightBtn').addEventListener('click', () => {
            if (window.game) {
                window.game.rotateRight();
            }
        });
        
        // Stage clear buttons
        document.getElementById('nextLevelButton').addEventListener('click', () => {
            if (window.audioManager) window.audioManager.playClick();
            if (window.game) {
                const nextLevel = window.game.currentLevelIndex + 1;
                if (nextLevel < LEVELS.length) {
                    this.startGame(nextLevel);
                } else {
                    this.showScreen('allClearScreen');
                }
            }
        });
        
        document.getElementById('returnMenuButton').addEventListener('click', () => {
            if (window.audioManager) window.audioManager.playClick();
            this.showScreen('mainMenu');
        });
        
        // All clear buttons
        document.getElementById('playAgainButton').addEventListener('click', () => {
            localStorage.removeItem('gameProgress');
            this.generateLevelGrid();
            this.startGame(0);
        });
        
        document.getElementById('finalMenuButton').addEventListener('click', () => {
            this.showScreen('mainMenu');
        });
        
        // Game Over screen buttons
        document.getElementById('retryButton').addEventListener('click', () => {
            if (window.game) {
                // 리스폰 로직
                window.game.player.x = window.game.startPosition.x;
                window.game.player.y = window.game.startPosition.y;
                window.game.player.velocityX = 0;
                window.game.player.velocityY = 0;
                
                // 회전 초기화
                window.game.rotation = 0;
                window.game.targetRotation = 0;
                window.game.isRotating = false;
                
                // 무빙 박스 초기화
                if (window.game.currentLevel.movingBoxes) {
                    window.game.movingBoxes = [];
                    window.game.currentLevel.movingBoxes.forEach(box => {
                        window.game.movingBoxes.push({
                            x: box.x * window.game.tileSize + window.game.tileSize / 2,
                            y: box.y * window.game.tileSize + window.game.tileSize / 2,
                            velocityX: 0,
                            velocityY: 0,
                            size: window.game.tileSize * 0.4,
                            mass: 2
                        });
                    });
                }
                
                // 게임 재개
                window.game.isPaused = false;
                this.showScreen('gameScreen');
            }
        });
        
        document.getElementById('gameOverMenuButton').addEventListener('click', () => {
            this.showScreen('mainMenu');
        });
        
        // Generate level selection grid
        this.generateLevelGrid();
        
        // Handle window resize
        window.addEventListener('resize', () => {
            if (window.game && this.currentScreen === 'gameScreen') {
                window.game.setupCanvas();
                window.game.loadLevel(window.game.currentLevelIndex);
            }
        });
    }
    
    generateLevelGrid() {
        const levelGrid = document.getElementById('levelGrid');
        levelGrid.innerHTML = '';
        
        const progress = JSON.parse(localStorage.getItem('gameProgress') || '{}');
        
        for (let i = 0; i < LEVELS.length; i++) {
            const button = document.createElement('button');
            button.className = 'level-button';
            button.textContent = i + 1;
            
            // Check if level is completed
            if (progress[LEVELS[i].id]) {
                button.classList.add('completed');
                const stars = progress[LEVELS[i].id].stars || 0;
                button.textContent = i + 1;
                button.title = `${stars}★`;
            }
            
            // Check if level is locked (only first level and completed levels + 1 are unlocked)
            const isUnlocked = i === 0 || progress[LEVELS[i - 1]?.id];
            if (!isUnlocked) {
                button.classList.add('locked');
                button.disabled = true;
                button.textContent = '🔒';
            } else {
                button.addEventListener('click', () => {
                    if (window.audioManager) window.audioManager.playClick();
                    this.startGame(i);
                });
            }
            
            levelGrid.appendChild(button);
        }
    }
    
    showScreen(screenId) {
        // Hide all screens
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        
        // Show selected screen
        const screen = document.getElementById(screenId);
        if (screen) {
            screen.classList.add('active');
            this.currentScreen = screenId;
        }
        
        // Control BGM based on screen
        if (window.audioManager) {
            if (screenId === 'gameScreen') {
                window.audioManager.startBGM();
            } else {
                window.audioManager.stopBGM();
            }
        }
        
        // Update level grid when showing main menu
        if (screenId === 'mainMenu') {
            this.generateLevelGrid();
        }
    }
    
    startGame(levelIndex) {
        this.showScreen('gameScreen');
        
        // Update level display
        document.getElementById('currentLevel').textContent = `레벨 ${levelIndex + 1}`;
        document.getElementById('moveCount').textContent = '이동: 0';
        
        // Show control hints for first level
        if (levelIndex === 0) {
            const hints = document.getElementById('controlHints');
            hints.classList.add('show');
            setTimeout(() => {
                hints.classList.remove('show');
            }, 5000);
        }
        
        // Initialize or load game
        if (!window.game) {
            window.game = new Game();
        }
        window.game.loadLevel(levelIndex);
    }
    
    showStageClear(level, moves, time, stars) {
        this.showScreen('stageClearScreen');
        
        // Update stats
        document.getElementById('clearLevel').textContent = level;
        document.getElementById('clearMoves').textContent = moves;
        
        // 시간 표시 제거 (사용자 요청)
        // const minutes = Math.floor(time / 60);
        // const seconds = Math.floor(time % 60);
        // document.getElementById('clearTime').textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        
        // Animate stars
        const starElements = document.querySelectorAll('#starsContainer .star');
        starElements.forEach((star, index) => {
            star.classList.remove('earned');
            if (index < stars) {
                setTimeout(() => {
                    star.classList.add('earned');
                }, (index + 1) * 200);
            }
        });
        
        // Check if all levels completed
        if (level >= LEVELS.length) {
            setTimeout(() => {
                this.showScreen('allClearScreen');
            }, 2000);
        }
    }
    
    showAllClear() {
        this.showScreen('allClearScreen');
    }
    
    showGameOver(level, deaths) {
        this.showScreen('gameOverScreen');
        
        // Update stats
        document.getElementById('gameOverLevel').textContent = level;
        document.getElementById('gameOverDeaths').textContent = deaths;
    }
}

// Global function for game to call
function showStageClear(level, moves, time, stars) {
    if (window.uiController) {
        window.uiController.showStageClear(level, moves, time, stars);
    }
}

function showAllClear() {
    if (window.uiController) {
        window.uiController.showAllClear();
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { UIController, showStageClear, showAllClear };
}
