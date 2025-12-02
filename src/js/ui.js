// UI Manager
class UIManager {
    constructor() {
        this.screens = {
            mainMenu: document.getElementById('mainMenu'),
            gameScreen: document.getElementById('gameScreen'),
            stageClear: document.getElementById('stageClearScreen'),
            allClear: document.getElementById('allClearScreen')
        };

        this.elements = {
            // Main menu
            startButton: document.getElementById('startButton'),
            levelGrid: document.getElementById('levelGrid'),
            
            // Game screen
            currentLevel: document.getElementById('currentLevel'),
            moveCount: document.getElementById('moveCount'),
            resetButton: document.getElementById('resetButton'),
            menuButton: document.getElementById('menuButton'),
            rotateLeftBtn: document.getElementById('rotateLeftBtn'),
            rotateRightBtn: document.getElementById('rotateRightBtn'),
            controlHints: document.getElementById('controlHints'),
            
            // Stage clear
            clearLevel: document.getElementById('clearLevel'),
            clearMoves: document.getElementById('clearMoves'),
            clearTime: document.getElementById('clearTime'),
            starsContainer: document.getElementById('starsContainer'),
            nextLevelButton: document.getElementById('nextLevelButton'),
            returnMenuButton: document.getElementById('returnMenuButton'),
            
            // All clear
            playAgainButton: document.getElementById('playAgainButton'),
            finalMenuButton: document.getElementById('finalMenuButton')
        };

        this.game = null;
        this.setupEventListeners();
    }

    setupEventListeners() {
        // Main menu
        this.elements.startButton.addEventListener('click', () => {
            this.startGame(0);
        });

        // Game screen
        this.elements.resetButton.addEventListener('click', () => {
            if (this.game) {
                this.game.reset();
                this.updateGameUI();
            }
        });

        this.elements.menuButton.addEventListener('click', () => {
            if (this.game) {
                this.game.stop();
            }
            this.showScreen('mainMenu');
        });

        this.elements.rotateLeftBtn.addEventListener('click', () => {
            if (this.game) {
                this.game.rotateLeft();
            }
        });

        this.elements.rotateRightBtn.addEventListener('click', () => {
            if (this.game) {
                this.game.rotateRight();
            }
        });

        // Stage clear
        this.elements.nextLevelButton.addEventListener('click', () => {
            if (this.game) {
                const hasNext = this.game.nextLevel();
                if (hasNext) {
                    this.showScreen('gameScreen');
                    this.updateGameUI();
                    this.hideControlHints();
                } else {
                    this.showScreen('allClear');
                }
            }
        });

        this.elements.returnMenuButton.addEventListener('click', () => {
            if (this.game) {
                this.game.stop();
            }
            this.showScreen('mainMenu');
            this.populateLevelGrid();
        });

        // All clear
        this.elements.playAgainButton.addEventListener('click', () => {
            this.startGame(0);
        });

        this.elements.finalMenuButton.addEventListener('click', () => {
            if (this.game) {
                this.game.stop();
            }
            this.showScreen('mainMenu');
            this.populateLevelGrid();
        });

        // Show control hints on first play
        setTimeout(() => {
            this.showControlHints();
            setTimeout(() => this.hideControlHints(), 5000);
        }, 1000);
    }

    showScreen(screenName) {
        // Hide all screens
        Object.values(this.screens).forEach(screen => {
            screen.classList.remove('active');
        });

        // Show requested screen
        if (this.screens[screenName]) {
            this.screens[screenName].classList.add('active');
        }
    }

    populateLevelGrid() {
        const grid = this.elements.levelGrid;
        grid.innerHTML = '';

        const progress = this.game ? this.game.completedLevels : {};

        for (let i = 0; i < LEVELS.length; i++) {
            const button = document.createElement('button');
            button.className = 'level-button';
            button.textContent = i + 1;

            // Check if level is completed
            if (progress[i] && progress[i].completed) {
                button.classList.add('completed');
                
                // Add star indicator
                const stars = progress[i].stars || 1;
                button.textContent = `${i + 1}\n${'★'.repeat(stars)}`;
                button.style.fontSize = '0.7em';
                button.style.lineHeight = '1.2';
            }

            // Check if level is locked (previous level not completed)
            const isUnlocked = i === 0 || (progress[i - 1] && progress[i - 1].completed);
            
            if (!isUnlocked) {
                button.classList.add('locked');
                button.textContent = '🔒';
                button.disabled = true;
            } else {
                button.addEventListener('click', () => {
                    this.startGame(i);
                });
            }

            grid.appendChild(button);
        }
    }

    startGame(levelIndex) {
        if (!this.game) {
            const canvas = document.getElementById('gameCanvas');
            this.game = new Game(canvas);
            
            // Setup game callbacks
            window.onLevelComplete = (level, moves, time, stars) => {
                this.onLevelComplete(level, moves, time, stars);
            };
            
            window.onGameOver = (won) => {
                this.onGameOver(won);
            };
        }

        if (this.game.start(levelIndex)) {
            this.showScreen('gameScreen');
            this.updateGameUI();
            
            // Show hints for first level
            if (levelIndex === 0) {
                setTimeout(() => {
                    this.showControlHints();
                    setTimeout(() => this.hideControlHints(), 5000);
                }, 500);
            }
        }
    }

    updateGameUI() {
        if (!this.game) return;

        // Update level info
        this.elements.currentLevel.textContent = `레벨 ${this.game.levelIndex + 1}`;
        
        // Start move counter update loop
        this.updateMoveCounter();
    }

    updateMoveCounter() {
        if (!this.game || this.game.isGameOver) return;

        this.elements.moveCount.textContent = `이동: ${this.game.moveCount}`;
        
        // Update again next frame
        requestAnimationFrame(() => this.updateMoveCounter());
    }

    onLevelComplete(level, moves, time, stars) {
        // Update clear screen
        this.elements.clearLevel.textContent = level + 1;
        this.elements.clearMoves.textContent = moves;
        this.elements.clearTime.textContent = this.formatTime(time);

        // Update stars
        const starElements = this.elements.starsContainer.querySelectorAll('.star');
        starElements.forEach((star, index) => {
            if (index < stars) {
                star.classList.add('earned');
            } else {
                star.classList.remove('earned');
            }
        });

        // Show clear screen after a short delay
        setTimeout(() => {
            // Check if all levels completed
            if (level === LEVELS.length - 1) {
                this.showScreen('allClear');
            } else {
                this.showScreen('stageClear');
            }
        }, 1000);
    }

    onGameOver(won) {
        if (!won) {
            // Show game over message
            alert('시간 초과 또는 이동 횟수 초과! 다시 시도해보세요.');
            this.showScreen('mainMenu');
        }
    }

    formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }

    showControlHints() {
        this.elements.controlHints.classList.add('show');
    }

    hideControlHints() {
        this.elements.controlHints.classList.remove('show');
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { UIManager };
}
