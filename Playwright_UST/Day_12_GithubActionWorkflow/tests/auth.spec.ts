import { test as setup, expect } from '@playwright/test';
import path from 'path';
import fs from 'fs';
import { Certificate } from 'crypto';

const authFile = path.join(__dirname, '../playwright/.auth/user.json');
const { username, password } = JSON.parse(fs.readFileSync(authFile, 'utf-8'));

setup('authenticate', async ({ page }) => {
  await page.goto('https://github.com/login');
  await page.getByLabel('Username or email address').fill(username);
  await page.getByLabel('Password').fill(password);
  await page.locator('[value="Sign in"]').click();
  await page.waitForURL('https://github.com');
  await page.context().storageState({ path: authFile });
});