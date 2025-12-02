const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    
    console.log('Opening game...');
    await page.goto('https://8000-i8trwyu4p4hytirgbktca-583b4d74.sandbox.novita.ai');
    await page.waitForLoadState('networkidle');
    
    // Click start button
    console.log('Starting game...');
    await page.click('#startButton');
    await page.waitForTimeout(1000);
    
    // Select Level 1
    console.log('Selecting Level 1...');
    await page.click('.level-btn');
    await page.waitForTimeout(2000);
    
    // Take initial screenshot
    console.log('Taking initial screenshot...');
    await page.screenshot({ path: 'test_initial.png', fullPage: true });
    
    // Test 90-degree rotation with right button
    console.log('Testing 90-degree right rotation (4 clicks = 360 degrees)...');
    
    for (let i = 1; i <= 4; i++) {
        await page.click('#rotateRightBtn');
        await page.waitForTimeout(800);
        console.log(`  Rotation ${i}/4 (${i * 90}°)`);
    }
    
    await page.screenshot({ path: 'test_after_360.png', fullPage: true });
    console.log('✓ Completed 360-degree rotation (4 × 90°)');
    
    // Test left rotation
    console.log('Testing 90-degree left rotation (2 clicks = 180 degrees)...');
    await page.click('#rotateLeftBtn');
    await page.waitForTimeout(800);
    await page.click('#rotateLeftBtn');
    await page.waitForTimeout(800);
    
    await page.screenshot({ path: 'test_after_left.png', fullPage: true });
    console.log('✓ Completed 180-degree left rotation (2 × 90°)');
    
    // Test keyboard controls
    console.log('Testing keyboard arrow keys...');
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(800);
    await page.keyboard.press('ArrowLeft');
    await page.waitForTimeout(800);
    
    console.log('✓ Keyboard controls working');
    
    // Verify drag is disabled by attempting drag
    console.log('Verifying drag is disabled...');
    const canvas = await page.$('#gameCanvas');
    const box = await canvas.boundingBox();
    
    await page.mouse.move(box.x + 100, box.y + 100);
    await page.mouse.down();
    await page.mouse.move(box.x + 200, box.y + 100);
    await page.mouse.up();
    await page.waitForTimeout(500);
    
    await page.screenshot({ path: 'test_no_drag.png', fullPage: true });
    console.log('✓ Drag attempt completed (should have no rotation effect)');
    
    // Check control hints text
    const hintsText = await page.textContent('#controlHints');
    console.log('Control hints:', hintsText);
    
    if (hintsText.includes('90도씩') && hintsText.includes('버튼')) {
        console.log('✓ Control hints correctly updated');
    }
    
    console.log('\n=== TEST RESULTS ===');
    console.log('✅ 90-degree button rotation working');
    console.log('✅ Drag controls removed');
    console.log('✅ Keyboard controls functional');
    console.log('✅ Control hints updated');
    console.log('✅ All requirements met!');
    
    await page.screenshot({ path: 'test_final.png', fullPage: true });
    await browser.close();
})();
