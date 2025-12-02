// Main entry point
let uiManager;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('섞고 섞고 돌리고 섞고 - Game Starting...');
    
    // Create UI Manager
    uiManager = new UIManager();
    
    // Populate level grid
    uiManager.populateLevelGrid();
    
    // Request gyro permissions for iOS 13+
    if (typeof DeviceOrientationEvent !== 'undefined' && 
        typeof DeviceOrientationEvent.requestPermission === 'function') {
        
        // Add button to request permission
        const requestButton = document.createElement('button');
        requestButton.textContent = '자이로 센서 활성화';
        requestButton.className = 'btn-secondary';
        requestButton.style.marginTop = '20px';
        
        requestButton.addEventListener('click', () => {
            DeviceOrientationEvent.requestPermission()
                .then(permissionState => {
                    if (permissionState === 'granted') {
                        console.log('Gyro sensor enabled');
                        requestButton.remove();
                    }
                })
                .catch(console.error);
        });
        
        document.querySelector('.menu-container').appendChild(requestButton);
    }
    
    // Prevent default touch behaviors
    document.addEventListener('touchmove', (e) => {
        if (e.target.tagName !== 'BUTTON') {
            e.preventDefault();
        }
    }, { passive: false });
    
    // Handle window resize
    window.addEventListener('resize', () => {
        if (uiManager.game && !uiManager.game.isPaused) {
            // Recalculate canvas size
            const tileSize = uiManager.game.calculateTileSize();
            const canvas = document.getElementById('gameCanvas');
            canvas.width = uiManager.game.currentLevel.size * tileSize;
            canvas.height = uiManager.game.currentLevel.size * tileSize;
        }
    });
    
    console.log(`Loaded ${LEVELS.length} levels`);
});

// Service Worker registration for PWA support
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('ServiceWorker registered:', registration);
            })
            .catch(err => {
                console.log('ServiceWorker registration failed:', err);
            });
    });
}

// Export for debugging
window.debugGame = () => {
    if (uiManager && uiManager.game) {
        console.log('Current Level:', uiManager.game.levelIndex + 1);
        console.log('Moves:', uiManager.game.moveCount);
        console.log('Time:', uiManager.game.elapsedTime);
        console.log('Rotation:', uiManager.game.rotation);
        console.log('Player:', uiManager.game.player);
        console.log('Completed Levels:', uiManager.game.completedLevels);
    }
};

console.log('%c섞고 섞고 돌리고 섞고', 'font-size: 24px; color: #764ba2; font-weight: bold;');
console.log('%cMix, Spin, Mix - Ready to Play!', 'font-size: 14px; color: #667eea;');
console.log('Type debugGame() in console for debug info');
