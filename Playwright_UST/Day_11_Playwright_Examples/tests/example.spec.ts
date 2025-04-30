import { test, expect } from '@playwright/test';

test('Clock', async ({ page }) => {

  await page.clock.setFixedTime(new Date('2024-02-02T10:00:00'));
  await page.goto('http://127.0.0.1:5500/tests/index.html');

  await expect(page.locator('#current-time')).toHaveText('2/2/2024, 10:00:00 AM');

  await page.waitForTimeout(5000);

});

test.only("Handle alert",async({page})=>{
    await page.goto('/');
    
    page.on('dialog',async dialog=>{
        await dialog.accept('Ranjith');
    })

    await page.locator('button').click();
})

