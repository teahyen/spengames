// Main entry point
document.addEventListener('DOMContentLoaded', () => {
    console.log('섞고 섞고 돌리고 섞고 - Game initialized');
    
    // Initialize UI Controller
    window.uiController = new UIController();
    
    // Show main menu
    window.uiController.showScreen('mainMenu');
    
    // Resume audio context on first user interaction (required for mobile)
    const resumeAudio = () => {
        if (window.audioManager) {
            window.audioManager.resume();
        }
        document.removeEventListener('click', resumeAudio);
        document.removeEventListener('touchstart', resumeAudio);
    };
    document.addEventListener('click', resumeAudio);
    document.addEventListener('touchstart', resumeAudio);
    
    // Prevent default touch behaviors
    document.body.addEventListener('touchmove', (e) => {
        if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
            e.preventDefault();
        }
    }, { passive: false });
    
    // Request device orientation permission for iOS 13+
    if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
        // Create a button to request permission
        const requestButton = document.createElement('button');
        requestButton.textContent = '자이로 센서 활성화';
        requestButton.className = 'btn-secondary';
        requestButton.style.position = 'fixed';
        requestButton.style.bottom = '20px';
        requestButton.style.left = '50%';
        requestButton.style.transform = 'translateX(-50%)';
        requestButton.style.zIndex = '1000';
        
        requestButton.addEventListener('click', async () => {
            try {
                const permission = await DeviceOrientationEvent.requestPermission();
                if (permission === 'granted') {
                    requestButton.remove();
                    console.log('Gyroscope permission granted');
                }
            } catch (error) {
                console.error('Error requesting device orientation permission:', error);
            }
        });
        
        // Add button to main menu
        const mainMenu = document.getElementById('mainMenu');
        if (mainMenu) {
            mainMenu.querySelector('.menu-container').appendChild(requestButton);
        }
    }
    
    // Service worker registration for PWA support (optional)
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js').then(() => {
            console.log('Service Worker registered');
        }).catch((error) => {
            console.log('Service Worker registration failed:', error);
        });
    }
    
    // Add install prompt for PWA
    let deferredPrompt;
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        
        // Show install button
        const installButton = document.createElement('button');
        installButton.textContent = '앱 설치';
        installButton.className = 'btn-secondary';
        installButton.style.marginTop = '20px';
        
        installButton.addEventListener('click', async () => {
            if (deferredPrompt) {
                deferredPrompt.prompt();
                const { outcome } = await deferredPrompt.userChoice;
                console.log(`User response to install prompt: ${outcome}`);
                deferredPrompt = null;
                installButton.remove();
            }
        });
        
        const mainMenu = document.getElementById('mainMenu');
        if (mainMenu) {
            mainMenu.querySelector('.menu-container').appendChild(installButton);
        }
    });
    
    // Handle visibility change (pause game when tab is hidden)
    document.addEventListener('visibilitychange', () => {
        if (window.game) {
            if (document.hidden) {
                window.game.isPaused = true;
            } else {
                // Don't auto-resume, let user decide
                console.log('Tab visible again');
            }
        }
    });
    
    // Keyboard shortcuts info
    console.log('Keyboard controls:');
    console.log('- Arrow Left: Rotate left');
    console.log('- Arrow Right: Rotate right');
    console.log('- R: Reset level');
    
    // Easter egg - Konami code
    let konamiCode = [];
    const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    
    document.addEventListener('keydown', (e) => {
        konamiCode.push(e.key);
        if (konamiCode.length > konamiSequence.length) {
            konamiCode.shift();
        }
        
        if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
            unlockAllLevels();
            konamiCode = [];
        }
    });
    
    function unlockAllLevels() {
        const progress = {};
        LEVELS.forEach(level => {
            progress[level.id] = {
                completed: true,
                stars: 3,
                moves: 0,
                time: 0
            };
        });
        localStorage.setItem('gameProgress', JSON.stringify(progress));
        window.uiController.generateLevelGrid();
        
        // Show notification
        const notification = document.createElement('div');
        notification.textContent = '🎉 모든 레벨이 해금되었습니다!';
        notification.style.position = 'fixed';
        notification.style.top = '50%';
        notification.style.left = '50%';
        notification.style.transform = 'translate(-50%, -50%)';
        notification.style.background = 'rgba(0, 0, 0, 0.8)';
        notification.style.color = 'white';
        notification.style.padding = '20px 40px';
        notification.style.borderRadius = '10px';
        notification.style.fontSize = '1.5em';
        notification.style.zIndex = '10000';
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
});
