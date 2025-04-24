import {test, expect} from '@playwright/test';
test('Validate the title', async ({page}) => {
    await page.goto("https://github.com/aryan1403");
    await expect(page).toHaveTitle("aryan1403 (Aaryan) · GitHub");
})

test('Validate the Repositories section', async ({page}) => {
    await page.goto("https://github.com/aryan1403");
    await page.locator("//nav[@aria-label='User profile']/a").nth(1).click();
    const repoSearch = await page.getByPlaceholder("Find a repository…")
    await expect(repoSearch).toBeVisible();
})

test('verify discard page Email ID', async ({page}) => {
    await page.goto("https://github.com/aryan1403");
    const email = "aaryan14032006@gmail.com";
    const discardBtn = await page.locator(".p-org a");
    await discardBtn.click();
    const emailone = await page.locator("[itemprop='email']").textContent();
    await expect(emailone).toBe(email);

})

test('Validate the Repo code Button', async ({page}) => {
    await page.goto("https://github.com/aryan1403");
    await page.locator("//nav[@aria-label='User profile']/a").nth(1).click();
    //click repo
    await page.locator(".wb-break-all a").nth(2).click();
    await page.locator("//div[@class='Box-sc-g0xbh4-0 jxTzTd']//button[@id=':R55ab:']").click();
    await expect(page.getByText("Clone with HTTPS url")).toBeVisible();

})

test('Validate the (package) Apache Maven section learn more section', async ({page}) => {
    await page.goto("https://github.com/aryan1403");
    await page.locator("//nav[@aria-label='User profile']/a").nth(3).click();
    //click repo
    await page.locator(".package-grid a").nth(0).click();
    await expect(page.getByText("Working with the Apache Maven registry")).toBeVisible();

})


