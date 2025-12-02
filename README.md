# 섞고 섞고 돌리고 섞고 (Mix, Spin, Mix)

A puzzle maze game where you rotate the maze to guide a ball from start to goal using gravity physics.

## 🎮 Game Overview

**섞고 섞고 돌리고 섞고** is a physics-based puzzle game inspired by classic maze games. Instead of moving the player, you rotate the entire maze, and gravity causes the player ball to roll through the passages toward the goal.

### Core Mechanics
- **Maze Rotation**: Rotate the entire maze 90° left or right
- **Gravity Physics**: The player ball rolls according to gravity based on maze rotation
- **Path Navigation**: Navigate through maze passages with walls blocking certain directions
- **Goal Reaching**: Guide the yellow ball to the orange goal

## 🎯 Features

### 60 Levels
- **Easy (1-15)**: 3x3 and 4x4 grids, simple paths
- **Medium (16-35)**: 4x4 and 5x5 grids with obstacles
- **Hard (36-50)**: 5x5 and 6x6 grids with time limits
- **Expert (51-60)**: 6x6 grids with time limits and move limits

### Game Features
- ⭐ **Star Rating System**: Earn up to 3 stars based on performance
- 🏆 **Progressive Difficulty**: Levels unlock as you progress
- 📱 **Mobile Support**: Touch controls and gyro sensor support
- 💾 **Progress Saving**: Automatic save using localStorage
- 🎨 **Clean UI**: Modern, responsive design
- ⚡ **Physics Engine**: Realistic gravity and collision detection

### Special Elements
- **Obstacles**: Red circular barriers that bounce the player
- **Time Limits**: Race against the clock on harder levels
- **Move Limits**: Complete levels within a move budget
- **Star Challenges**: Optimal performance for maximum stars

## 🕹️ Controls

### Desktop
- **Arrow Keys** / **A/D**: Rotate maze left/right
- **Mouse Drag**: Drag left/right to rotate maze
- **Buttons**: Use on-screen rotation buttons

### Mobile
- **Touch & Drag**: Swipe left/right to rotate maze
- **Gyro Sensor**: Tilt device to rotate maze (iOS/Android)
- **Touch Buttons**: Tap on-screen rotation buttons

## 🛠️ Technical Details

### Architecture
```
/home/user/webapp/
├── index.html              # Main HTML file
├── src/
│   ├── css/
│   │   └── main.css       # All styles
│   └── js/
│       ├── levels.js      # 60 level definitions
│       ├── physics.js     # Physics engine
│       ├── game.js        # Main game engine
│       ├── ui.js          # UI manager
│       └── main.js        # Entry point
└── sw.js                  # Service worker (PWA support)
```

### Technologies Used
- **HTML5 Canvas**: For rendering game graphics
- **Vanilla JavaScript**: No frameworks, pure JS
- **CSS3**: Modern styling with gradients and animations
- **LocalStorage**: Progress persistence
- **Service Worker**: PWA support for offline play
- **Device Orientation API**: Gyro sensor support

### Physics System
- **Gravity**: Applied based on maze rotation angle
- **Friction**: Gradual slowdown of player movement
- **Collision Detection**: Wall and obstacle collision handling
- **Velocity Clamping**: Maximum speed limits
- **Bounce Physics**: Realistic bounce off obstacles

## 🚀 Running the Game

### Local Development
1. Clone or download the repository
2. Open `index.html` in a modern web browser
3. Or use a local server:
```bash
# Python 3
python3 -m http.server 8000

# Node.js
npx http-server

# PHP
php -S localhost:8000
```

4. Visit `http://localhost:8000`

### Deployment
The game is a static web application and can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

Simply upload all files to your hosting service.

## 🎨 Game Design

### Visual Style
- **Color Scheme**: Purple gradient background (#667eea to #764ba2)
- **Player**: Golden yellow ball with face
- **Goal**: Animated orange circle with glow effect
- **Obstacles**: Red circles with danger symbols
- **Maze**: Light gray tiles with dark walls

### User Experience
- Smooth rotation animations
- Particle effects on level completion
- Progressive difficulty curve
- Star-based achievement system
- Level unlock progression
- Responsive mobile-first design

## 📊 Level Generation

Levels are procedurally enhanced with:
- **Grid Size**: 3x3 to 6x6 based on difficulty
- **Path Complexity**: More connections in easier levels
- **Obstacle Placement**: Strategic blocking in medium+ levels
- **Time Pressure**: Decreasing time limits for hard levels
- **Move Economy**: Limited moves for expert levels

## 🏆 Star Rating System

Stars are awarded based on:
1. ⭐ **1 Star**: Complete the level
2. ⭐⭐ **2 Stars**: Complete with optimal moves (≤ size × 1.5)
3. ⭐⭐⭐ **3 Stars**: Complete quickly (≤ size × 10 seconds) with optimal moves

## 🐛 Browser Compatibility

Tested and working on:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile Chrome
- ✅ Mobile Safari

### Requirements
- HTML5 Canvas support
- ES6 JavaScript support
- LocalStorage API
- (Optional) Device Orientation API for gyro

## 📱 PWA Support

The game includes Service Worker for:
- Offline play capability
- Fast loading from cache
- App-like experience on mobile
- Add to home screen support

## 🎓 Learning Resources

This project demonstrates:
- HTML5 Canvas rendering
- Game physics implementation
- Input handling (keyboard, mouse, touch, gyro)
- State management
- LocalStorage for persistence
- Responsive web design
- Service Workers and PWA
- Procedural content generation

## 📝 Credits

**Game Design**: Based on the "섞고 섞고 돌리고 섞고" concept by Ogidong Team 1
- Kim Tae-hyeon
- Kim Min-su
- Seong Yoon-seo
- Nam Ju-young

**Implementation**: AI-Assisted Development

## 📄 License

This project is open source and available for educational purposes.

## 🔧 Debug Mode

Open browser console and type:
```javascript
debugGame()
```

This will show current game state including:
- Current level
- Move count
- Elapsed time
- Rotation angle
- Player position
- Completed levels

## 🎯 Future Enhancements

Possible additions:
- Sound effects and background music
- More power-ups (slow time, extra moves, teleport)
- Level editor
- Leaderboards
- Achievements system
- Different ball skins
- Multiplayer mode
- Custom level sharing

## 📞 Support

For issues or questions, please check:
1. Browser console for errors
2. Browser compatibility
3. JavaScript enabled
4. LocalStorage available

---

**Enjoy playing 섞고 섞고 돌리고 섞고!** 🎮✨
