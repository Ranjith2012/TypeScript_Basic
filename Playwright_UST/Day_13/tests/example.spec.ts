import { test, expect } from '@playwright/test';

test('User can Login With Valid Credentials', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

