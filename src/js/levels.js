// Level data structure - 5 Levels Only
// Each level has:
// - size: grid dimensions
// - tiles: array of tile data with paths (N, E, S, W)
// - start: starting position {x, y}
// - goal: goal position {x, y}
// - obstacles: optional obstacles

const LEVELS = [
    // Level 1 - Simple 3x3
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
    
    // Level 2 - 3x3 with twist
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
    
    // Level 3 - 4x4
    {
        id: 3,
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
    
    // Level 4 - 4x4 with obstacle
    {
        id: 4,
        size: 4,
        start: {x: 0, y: 0},
        goal: {x: 3, y: 3},
        obstacles: [{x: 1, y: 1}],
        tiles: [
            {x: 0, y: 0, paths: ['S', 'E']},
            {x: 1, y: 0, paths: ['W', 'S', 'E']},
            {x: 2, y: 0, paths: ['W', 'S']},
            {x: 3, y: 0, paths: ['S']},
            {x: 0, y: 1, paths: ['N', 'S', 'E']},
            {x: 1, y: 1, paths: []}, // Obstacle
            {x: 2, y: 1, paths: ['N', 'S']},
            {x: 3, y: 1, paths: ['N', 'S', 'W']},
            {x: 0, y: 2, paths: ['N', 'E']},
            {x: 1, y: 2, paths: ['W', 'S', 'E']},
            {x: 2, y: 2, paths: ['W', 'N', 'E']},
            {x: 3, y: 2, paths: ['W', 'N', 'S']},
            {x: 0, y: 3, paths: ['E']},
            {x: 1, y: 3, paths: ['W', 'N', 'E']},
            {x: 2, y: 3, paths: ['W', 'E']},
            {x: 3, y: 3, paths: ['W', 'N']}
        ]
    },
    
    // Level 5 - Final 4x4 with multiple obstacles
    {
        id: 5,
        size: 4,
        start: {x: 0, y: 0},
        goal: {x: 3, y: 3},
        obstacles: [{x: 1, y: 1}, {x: 2, y: 2}],
        tiles: [
            {x: 0, y: 0, paths: ['S', 'E']},
            {x: 1, y: 0, paths: ['W', 'S', 'E']},
            {x: 2, y: 0, paths: ['W', 'S', 'E']},
            {x: 3, y: 0, paths: ['W', 'S']},
            {x: 0, y: 1, paths: ['N', 'S', 'E']},
            {x: 1, y: 1, paths: []}, // Obstacle
            {x: 2, y: 1, paths: ['N', 'S']},
            {x: 3, y: 1, paths: ['N', 'S', 'W']},
            {x: 0, y: 2, paths: ['N', 'E', 'S']},
            {x: 1, y: 2, paths: ['W', 'E']},
            {x: 2, y: 2, paths: []}, // Obstacle
            {x: 3, y: 2, paths: ['N', 'S']},
            {x: 0, y: 3, paths: ['N', 'E']},
            {x: 1, y: 3, paths: ['W', 'E']},
            {x: 2, y: 3, paths: ['W', 'E']},
            {x: 3, y: 3, paths: ['W', 'N']}
        ]
    }
];

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { LEVELS };
}
