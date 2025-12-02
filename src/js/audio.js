// Audio Manager for game sounds
class AudioManager {
    constructor() {
        this.audioContext = null;
        this.enabled = true;
        this.volume = 0.5;
        this.bgmVolume = 0.3;
        this.sounds = {};
        this.bgmOscillators = [];
        this.isBgmPlaying = false;
        this.bgmTimeouts = []; // 타임아웃 추적용
        
        // Initialize Web Audio API
        this.initAudioContext();
    }
    
    initAudioContext() {
        try {
            window.AudioContext = window.AudioContext || window.webkitAudioContext;
            this.audioContext = new AudioContext();
        } catch (e) {
            console.warn('Web Audio API not supported', e);
            this.enabled = false;
        }
    }
    
    // Generate sound effects using Web Audio API
    generateTone(frequency, duration, type = 'sine') {
        if (!this.enabled || !this.audioContext) return;
        
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.frequency.value = frequency;
        oscillator.type = type;
        
        gainNode.gain.setValueAtTime(this.volume, this.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration);
        
        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + duration);
    }
    
    // Play rotation sound
    playRotate() {
        this.generateTone(200, 0.1, 'square');
    }
    
    // Play collision sound
    playCollision() {
        if (!this.enabled || !this.audioContext) return;
        
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.frequency.setValueAtTime(150, this.audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(50, this.audioContext.currentTime + 0.1);
        oscillator.type = 'sawtooth';
        
        gainNode.gain.setValueAtTime(this.volume * 0.5, this.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.1);
        
        oscillator.start();
        oscillator.stop(this.audioContext.currentTime + 0.1);
    }
    
    // Play goal reached sound
    playGoalReached() {
        if (!this.enabled || !this.audioContext) return;
        
        const notes = [523.25, 659.25, 783.99]; // C, E, G
        
        notes.forEach((freq, index) => {
            setTimeout(() => {
                const oscillator = this.audioContext.createOscillator();
                const gainNode = this.audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(this.audioContext.destination);
                
                oscillator.frequency.value = freq;
                oscillator.type = 'sine';
                
                gainNode.gain.setValueAtTime(this.volume * 0.6, this.audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.3);
                
                oscillator.start();
                oscillator.stop(this.audioContext.currentTime + 0.3);
            }, index * 100);
        });
    }
    
    // Play powerup collected sound
    playPowerup() {
        if (!this.enabled || !this.audioContext) return;
        
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.frequency.setValueAtTime(400, this.audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(800, this.audioContext.currentTime + 0.2);
        oscillator.type = 'triangle';
        
        gainNode.gain.setValueAtTime(this.volume * 0.4, this.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.2);
        
        oscillator.start();
        oscillator.stop(this.audioContext.currentTime + 0.2);
    }
    
    // Play button click sound
    playClick() {
        this.generateTone(440, 0.05, 'sine');
    }
    
    // Play stage clear fanfare
    playStageClear() {
        if (!this.enabled || !this.audioContext) return;
        
        const melody = [
            {freq: 523.25, duration: 0.15}, // C
            {freq: 659.25, duration: 0.15}, // E
            {freq: 783.99, duration: 0.15}, // G
            {freq: 1046.50, duration: 0.4}  // C (high)
        ];
        
        let time = 0;
        melody.forEach(note => {
            setTimeout(() => {
                const oscillator = this.audioContext.createOscillator();
                const gainNode = this.audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(this.audioContext.destination);
                
                oscillator.frequency.value = note.freq;
                oscillator.type = 'sine';
                
                gainNode.gain.setValueAtTime(this.volume * 0.7, this.audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + note.duration);
                
                oscillator.start();
                oscillator.stop(this.audioContext.currentTime + note.duration);
            }, time * 1000);
            time += note.duration;
        });
    }
    
    // Play game over sound
    playGameOver() {
        if (!this.enabled || !this.audioContext) return;
        
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.frequency.setValueAtTime(440, this.audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(110, this.audioContext.currentTime + 0.5);
        oscillator.type = 'sawtooth';
        
        gainNode.gain.setValueAtTime(this.volume * 0.6, this.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.5);
        
        oscillator.start();
        oscillator.stop(this.audioContext.currentTime + 0.5);
    }
    
    // Toggle sound on/off
    toggle() {
        this.enabled = !this.enabled;
        return this.enabled;
    }
    
    // Set volume (0.0 to 1.0)
    setVolume(volume) {
        this.volume = Math.max(0, Math.min(1, volume));
    }
    
    // Resume audio context (needed for mobile browsers)
    resume() {
        if (this.audioContext && this.audioContext.state === 'suspended') {
            this.audioContext.resume();
        }
    }
    
    // Start background music (looping melody)
    startBGM() {
        if (!this.enabled || !this.audioContext) return;
        
        // 기존 BGM이 재생 중이면 먼저 정지
        if (this.isBgmPlaying) {
            this.stopBGM();
        }
        
        this.isBgmPlaying = true;
        this.playBGMLoop();
    }
    
    // Stop background music
    stopBGM() {
        this.isBgmPlaying = false;
        
        // 모든 oscillator 정지
        this.bgmOscillators.forEach(osc => {
            try {
                osc.stop();
            } catch (e) {
                // Ignore if already stopped
            }
        });
        this.bgmOscillators = [];
        
        // 모든 타임아웃 클리어
        this.bgmTimeouts.forEach(timeout => clearTimeout(timeout));
        this.bgmTimeouts = [];
    }
    
    // Play looping background music melody
    playBGMLoop() {
        if (!this.isBgmPlaying || !this.audioContext) return;
        
        // Simple upbeat melody (C Major scale pattern)
        const melody = [
            {freq: 523.25, duration: 0.3}, // C
            {freq: 587.33, duration: 0.3}, // D
            {freq: 659.25, duration: 0.3}, // E
            {freq: 523.25, duration: 0.3}, // C
            {freq: 659.25, duration: 0.3}, // E
            {freq: 587.33, duration: 0.3}, // D
            {freq: 523.25, duration: 0.6}, // C
            {freq: 587.33, duration: 0.3}, // D
            {freq: 659.25, duration: 0.3}, // E
            {freq: 698.46, duration: 0.3}, // F
            {freq: 783.99, duration: 0.3}, // G
            {freq: 698.46, duration: 0.3}, // F
            {freq: 659.25, duration: 0.6}, // E
        ];
        
        let totalDuration = 0;
        melody.forEach(note => {
            totalDuration += note.duration;
        });
        
        let currentTime = 0;
        melody.forEach(note => {
            const timeoutId = setTimeout(() => {
                if (!this.isBgmPlaying) return;
                
                const oscillator = this.audioContext.createOscillator();
                const gainNode = this.audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(this.audioContext.destination);
                
                oscillator.frequency.value = note.freq;
                oscillator.type = 'sine';
                
                gainNode.gain.setValueAtTime(this.bgmVolume, this.audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + note.duration);
                
                oscillator.start();
                oscillator.stop(this.audioContext.currentTime + note.duration);
                
                this.bgmOscillators.push(oscillator);
            }, currentTime * 1000);
            
            this.bgmTimeouts.push(timeoutId);
            currentTime += note.duration;
        });
        
        // Loop the melody
        const loopTimeoutId = setTimeout(() => {
            if (this.isBgmPlaying) {
                this.playBGMLoop();
            }
        }, totalDuration * 1000);
        
        this.bgmTimeouts.push(loopTimeoutId);
    }
}

// Create global instance
if (typeof window !== 'undefined') {
    window.audioManager = new AudioManager();
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { AudioManager };
}
