import {test, expect} from '@playwright/test';

test('alert', async ({page}) => {
    await page.goto("https://demo.automationtesting.in/Alerts.html");
    await page.on('dialog', async dialog=>{
        console.log(dialog.message());
    })
    
    const alertSection = await page.locator(".nav.nav-tabs.nav-stacked li");
    await alertSection.nth(1).click();
    await page.pause();
})