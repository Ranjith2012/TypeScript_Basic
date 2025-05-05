import { test, expect } from '@playwright/test';

test('User can Login With Valid Credentials', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/src/loginpage.html');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

