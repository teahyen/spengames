// Level data structure
// Each level has:
// - size: grid dimensions (3-6 for difficulty progression)
// - tiles: array of tile data with paths (N, E, S, W)
// - start: starting position {x, y}
// - goal: goal position {x, y}
// - obstacles: optional obstacles
// - powerups: optional powerups
// - timeLimit: optional time limit in seconds
// - moveLimit: optional move limit

const LEVELS = [
    // EASY LEVELS (1-15) - 3x3 and 4x4 grids
    {
        id: 1,
        size: 3,
        start: {x: 0, y: 0},
        goal: {x: 2, y: 2},
        tiles: [
            {x: 0, y: 0, paths: ['E', 'S']},
            {x: 1, y: 0, paths: ['W', 'S']},
            {x: 2, y: 0, paths: ['S']},
            {x: 0, y: 1, paths: ['N', 'S']},
            {x: 1, y: 1, paths: ['N', 'E', 'S']},
            {x: 2, y: 1, paths: ['N', 'W', 'S']},
            {x: 0, y: 2, paths: ['N', 'E']},
            {x: 1, y: 2, paths: ['W', 'E']},
            {x: 2, y: 2, paths: ['W', 'N']}
        ]
    },
    {
        id: 2,
        size: 3,
        start: {x: 0, y: 0},
        goal: {x: 2, y: 2},
        tiles: [
            {x: 0, y: 0, paths: ['S']},
            {x: 1, y: 0, paths: ['S', 'E']},
            {x: 2, y: 0, paths: ['W', 'S']},
            {x: 0, y: 1, paths: ['N', 'E']},
            {x: 1, y: 1, paths: ['W', 'E', 'S']},
            {x: 2, y: 1, paths: ['W', 'N', 'S']},
            {x: 0, y: 2, paths: ['E']},
            {x: 1, y: 2, paths: ['W', 'N', 'E']},
            {x: 2, y: 2, paths: ['W', 'N']}
        ]
    },
    {
        id: 3,
        size: 3,
        start: {x: 1, y: 0},
        goal: {x: 1, y: 2},
        tiles: [
            {x: 0, y: 0, paths: ['S', 'E']},
            {x: 1, y: 0, paths: ['W', 'E', 'S']},
            {x: 2, y: 0, paths: ['W', 'S']},
            {x: 0, y: 1, paths: ['N', 'S', 'E']},
            {x: 1, y: 1, paths: ['N', 'S']},
            {x: 2, y: 1, paths: ['N', 'W', 'S']},
            {x: 0, y: 2, paths: ['N', 'E']},
            {x: 1, y: 2, paths: ['N', 'W', 'E']},
            {x: 2, y: 2, paths: ['W', 'N']}
        ]
    },
    {
        id: 4,
        size: 4,
        start: {x: 0, y: 0},
        goal: {x: 3, y: 3},
        tiles: [
            {x: 0, y: 0, paths: ['E', 'S']},
            {x: 1, y: 0, paths: ['W', 'S']},
            {x: 2, y: 0, paths: ['S']},
            {x: 3, y: 0, paths: ['S']},
            {x: 0, y: 1, paths: ['N', 'S']},
            {x: 1, y: 1, paths: ['N', 'E', 'S']},
            {x: 2, y: 1, paths: ['W', 'N', 'E']},
            {x: 3, y: 1, paths: ['W', 'N', 'S']},
            {x: 0, y: 2, paths: ['N', 'E']},
            {x: 1, y: 2, paths: ['W', 'N', 'E', 'S']},
            {x: 2, y: 2, paths: ['W', 'S']},
            {x: 3, y: 2, paths: ['N', 'S']},
            {x: 0, y: 3, paths: ['E']},
            {x: 1, y: 3, paths: ['W', 'N', 'E']},
            {x: 2, y: 3, paths: ['W', 'N', 'E']},
            {x: 3, y: 3, paths: ['W', 'N']}
        ]
    },
    {
        id: 5,
        size: 4,
        start: {x: 0, y: 0},
        goal: {x: 3, y: 3},
        obstacles: [{x: 1, y: 1}, {x: 2, y: 2}],
        tiles: [
            {x: 0, y: 0, paths: ['S', 'E']},
            {x: 1, y: 0, paths: ['W', 'S', 'E']},
            {x: 2, y: 0, paths: ['W', 'S']},
            {x: 3, y: 0, paths: ['S']},
            {x: 0, y: 1, paths: ['N', 'S', 'E']},
            {x: 1, y: 1, paths: []},
            {x: 2, y: 1, paths: ['N', 'S']},
            {x: 3, y: 1, paths: ['N', 'S', 'W']},
            {x: 0, y: 2, paths: ['N', 'E']},
            {x: 1, y: 2, paths: ['W', 'S', 'E']},
            {x: 2, y: 2, paths: []},
            {x: 3, y: 2, paths: ['N', 'S']},
            {x: 0, y: 3, paths: ['E']},
            {x: 1, y: 3, paths: ['W', 'N', 'E']},
            {x: 2, y: 3, paths: ['W', 'E']},
            {x: 3, y: 3, paths: ['W', 'N']}
        ]
    },
    // Continue with levels 6-15...
    ...generateIntermediateLevels(6, 15, 4),
    
    // MEDIUM LEVELS (16-35) - 4x4 and 5x5 grids with obstacles
    ...generateMediumLevels(16, 35, 4, 5),
    
    // HARD LEVELS (36-50) - 5x5 and 6x6 grids with time limits
    ...generateHardLevels(36, 50, 5, 6),
    
    // EXPERT LEVELS (51-60) - 6x6 grids with all features
    ...generateExpertLevels(51, 60, 6)
];

// Helper function to generate intermediate levels
function generateIntermediateLevels(startId, endId, size) {
    const levels = [];
    for (let id = startId; id <= endId; id++) {
        levels.push(generateLevel(id, size, 'intermediate'));
    }
    return levels;
}

// Helper function to generate medium levels
function generateMediumLevels(startId, endId, minSize, maxSize) {
    const levels = [];
    for (let id = startId; id <= endId; id++) {
        const size = minSize + Math.floor((id - startId) / 5) % (maxSize - minSize + 1);
        levels.push(generateLevel(id, size, 'medium'));
    }
    return levels;
}

// Helper function to generate hard levels
function generateHardLevels(startId, endId, minSize, maxSize) {
    const levels = [];
    for (let id = startId; id <= endId; id++) {
        const size = minSize + Math.floor((id - startId) / 3) % (maxSize - minSize + 1);
        const level = generateLevel(id, size, 'hard');
        level.timeLimit = 120 - (id - startId) * 2; // Decreasing time limit
        levels.push(level);
    }
    return levels;
}

// Helper function to generate expert levels
function generateExpertLevels(startId, endId, size) {
    const levels = [];
    for (let id = startId; id <= endId; id++) {
        const level = generateLevel(id, size, 'expert');
        level.timeLimit = 90 - (id - startId) * 1;
        level.moveLimit = 30 - Math.floor((id - startId) / 2);
        levels.push(level);
    }
    return levels;
}

// Generate a level with given parameters
function generateLevel(id, size, difficulty) {
    const level = {
        id: id,
        size: size,
        start: {x: 0, y: 0},
        goal: {x: size - 1, y: size - 1},
        tiles: [],
        obstacles: [],
        powerups: []
    };

    // Generate tiles with paths
    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            const paths = generatePaths(x, y, size, difficulty);
            level.tiles.push({x, y, paths});
        }
    }

    // Add obstacles based on difficulty
    if (difficulty === 'medium' || difficulty === 'hard' || difficulty === 'expert') {
        const obstacleCount = difficulty === 'expert' ? Math.floor(size * size * 0.2) : 
                             difficulty === 'hard' ? Math.floor(size * size * 0.15) :
                             Math.floor(size * size * 0.1);
        
        for (let i = 0; i < obstacleCount; i++) {
            const x = Math.floor(Math.random() * size);
            const y = Math.floor(Math.random() * size);
            // Don't place obstacles on start or goal
            if ((x !== 0 || y !== 0) && (x !== size - 1 || y !== size - 1)) {
                level.obstacles.push({x, y});
            }
        }
    }

    // Add powerups for harder levels
    if (difficulty === 'hard' || difficulty === 'expert') {
        const powerupCount = Math.floor(Math.random() * 2) + 1;
        for (let i = 0; i < powerupCount; i++) {
            const x = Math.floor(Math.random() * size);
            const y = Math.floor(Math.random() * size);
            const type = ['extra_time', 'teleport', 'remove_obstacle'][Math.floor(Math.random() * 3)];
            level.powerups.push({x, y, type});
        }
    }

    return level;
}

// Generate paths for a tile based on position and difficulty
function generatePaths(x, y, size, difficulty) {
    const paths = [];
    const directions = ['N', 'E', 'S', 'W'];
    
    // Always connect to at least 2 adjacent tiles
    const minConnections = difficulty === 'expert' ? 1 : 2;
    const maxConnections = 4;
    
    const numConnections = minConnections + Math.floor(Math.random() * (maxConnections - minConnections + 1));
    
    // Shuffle directions
    const shuffled = directions.sort(() => Math.random() - 0.5);
    
    for (let i = 0; i < numConnections; i++) {
        const dir = shuffled[i];
        
        // Check if connection is valid (not out of bounds)
        if (dir === 'N' && y > 0) paths.push(dir);
        else if (dir === 'E' && x < size - 1) paths.push(dir);
        else if (dir === 'S' && y < size - 1) paths.push(dir);
        else if (dir === 'W' && x > 0) paths.push(dir);
    }
    
    // Ensure start has exit and goal has entrance
    if (x === 0 && y === 0 && paths.length === 0) {
        paths.push(Math.random() > 0.5 ? 'E' : 'S');
    }
    if (x === size - 1 && y === size - 1 && paths.length === 0) {
        paths.push(Math.random() > 0.5 ? 'W' : 'N');
    }
    
    return paths;
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { LEVELS };
}
