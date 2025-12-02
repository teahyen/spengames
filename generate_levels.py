#!/usr/bin/env python3
"""
Level Generator for Mix Spin Mix Game
Generates 60 challenging levels with progressive difficulty
"""

import json
import random

def generate_tile_paths(size, complexity):
    """Generate tiles with paths for a maze"""
    tiles = []
    for y in range(size):
        for x in range(size):
            paths = []
            # More complex mazes have fewer paths
            if random.random() > complexity:
                paths.append('N')
            if random.random() > complexity:
                paths.append('E')
            if random.random() > complexity:
                paths.append('S')
            if random.random() > complexity:
                paths.append('W')
            
            # Ensure at least one path
            if not paths:
                paths.append(random.choice(['N', 'E', 'S', 'W']))
            
            tiles.append({'x': x, 'y': y, 'paths': paths})
    return tiles

def create_level(level_id, size, complexity, has_obstacles=0, has_death_walls=0, has_moving_boxes=0, has_powerups=False):
    """Create a single level"""
    level = {
        'id': level_id,
        'size': size,
        'start': {'x': 0, 'y': 0},
        'goal': {'x': size-1, 'y': size-1}
    }
    
    # Generate maze tiles
    level['tiles'] = generate_tile_paths(size, complexity)
    
    # Add obstacles
    if has_obstacles > 0:
        obstacles = []
        for i in range(has_obstacles):
            x = random.randint(1, size-2)
            y = random.randint(1, size-2)
            # Don't place on start or goal
            if (x, y) != (0, 0) and (x, y) != (size-1, size-1):
                obstacles.append({'x': x, 'y': y})
        level['obstacles'] = obstacles
    
    # Add death walls
    if has_death_walls > 0:
        death_walls = []
        for i in range(has_death_walls):
            x = random.randint(0, size-1)
            y = random.randint(0, size-1)
            side = random.choice(['N', 'E', 'S', 'W'])
            death_walls.append({'x': x, 'y': y, 'side': side})
        level['deathWalls'] = death_walls
    
    # Add moving boxes
    if has_moving_boxes > 0:
        moving_boxes = []
        for i in range(has_moving_boxes):
            x = random.randint(1, size-2)
            y = random.randint(1, size-2)
            if (x, y) != (0, 0) and (x, y) != (size-1, size-1):
                moving_boxes.append({'x': x, 'y': y})
        level['movingBoxes'] = moving_boxes
    
    # Add powerups
    if has_powerups:
        powerups = []
        powerup_types = ['extra_time', 'teleport', 'remove_obstacle']
        for i in range(random.randint(1, 2)):
            x = random.randint(1, size-2)
            y = random.randint(1, size-2)
            powerups.append({'x': x, 'y': y, 'type': random.choice(powerup_types)})
        level['powerups'] = powerups
    
    return level

def generate_all_levels():
    """Generate all 60 levels with progressive difficulty"""
    levels = []
    
    # Levels 1-5: Tutorial (3x3, very easy)
    for i in range(1, 6):
        levels.append(create_level(i, 3, 0.2))
    
    # Levels 6-10: Easy (4x4, simple)
    for i in range(6, 11):
        levels.append(create_level(i, 4, 0.3, has_obstacles=min(i-5, 2)))
    
    # Levels 11-15: Introducing death walls (4x4)
    for i in range(11, 16):
        levels.append(create_level(i, 4, 0.35, has_obstacles=1, has_death_walls=1))
    
    # Levels 16-20: Introducing moving boxes (4x4)
    for i in range(16, 21):
        levels.append(create_level(i, 4, 0.4, has_obstacles=1, has_moving_boxes=1))
    
    # Levels 21-25: Medium (5x5)
    for i in range(21, 26):
        levels.append(create_level(i, 5, 0.4, has_obstacles=2, has_moving_boxes=1))
    
    # Levels 26-30: Medium with death walls (5x5)
    for i in range(26, 31):
        levels.append(create_level(i, 5, 0.45, has_obstacles=2, has_death_walls=1, has_moving_boxes=1))
    
    # Levels 31-35: Advanced (5x5, complex)
    for i in range(31, 36):
        levels.append(create_level(i, 5, 0.5, has_obstacles=3, has_death_walls=2, has_moving_boxes=1, has_powerups=True))
    
    # Levels 36-40: Hard (6x6)
    for i in range(36, 41):
        levels.append(create_level(i, 6, 0.5, has_obstacles=3, has_death_walls=2, has_moving_boxes=2))
    
    # Levels 41-45: Hard with all mechanics (6x6)
    for i in range(41, 46):
        levels.append(create_level(i, 6, 0.55, has_obstacles=4, has_death_walls=3, has_moving_boxes=2, has_powerups=True))
    
    # Levels 46-50: Expert (6x6, very complex)
    for i in range(46, 51):
        levels.append(create_level(i, 6, 0.6, has_obstacles=4, has_death_walls=3, has_moving_boxes=3, has_powerups=True))
    
    # Levels 51-55: Master (7x7)
    for i in range(51, 56):
        levels.append(create_level(i, 7, 0.6, has_obstacles=5, has_death_walls=4, has_moving_boxes=3, has_powerups=True))
    
    # Levels 56-60: Ultimate Challenge (7x7, extreme)
    for i in range(56, 61):
        levels.append(create_level(i, 7, 0.65, has_obstacles=6, has_death_walls=5, has_moving_boxes=4, has_powerups=True))
    
    return levels

# Generate levels
levels = generate_all_levels()

# Create JavaScript file
js_content = "// Level data - 60 Levels\n"
js_content += "// Progressive difficulty from 3x3 to 7x7\n"
js_content += "// Features: Death Walls, Moving Boxes, Obstacles, Powerups\n\n"
js_content += f"const LEVELS = {json.dumps(levels, indent=2)};\n\n"
js_content += "// Export for use in other modules\n"
js_content += "if (typeof module !== 'undefined' && module.exports) {\n"
js_content += "    module.exports = { LEVELS };\n"
js_content += "}\n"

# Write to file
with open('src/js/levels.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print(f"✓ Generated {len(levels)} levels")
print(f"✓ Level sizes: 3x3 (5), 4x4 (15), 5x5 (15), 6x6 (15), 7x7 (10)")
print(f"✓ File written to: src/js/levels.js")
