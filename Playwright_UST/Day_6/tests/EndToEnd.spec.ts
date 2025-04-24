import { test, expect } from '@playwright/test';

test("Place the Order", async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    await page.fill("#user-name","standard_user");
    await page.fill("#password","secret_sauce");   
    await page.click("#login-button");
    await expect(page.locator(".app_logo")).toBeVisible();
    await page.locator("#add-to-cart-sauce-labs-backpack").first().click();
    await page.locator(".shopping_cart_link").click();
    const checkoutBtn = page.locator("#checkout");
    await expect(checkoutBtn).toBeVisible();
    await checkoutBtn.click();
    await page.fill("#first-name","John");
    await page.fill("#last-name","Doe");
    await page.fill("#postal-code","12345");
    await page.click("#continue");
    const finish = await page.locator("#finish");
    await expect(finish).toBeVisible();
    await finish.click();
    const orderConfirmation = await page.locator(".complete-header");
    await expect(orderConfirmation).toHaveText("Thank you for your order!");
    await page.waitForTimeout(5000);
})
