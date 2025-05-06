import { test, expect } from './Ecommerse.fixture';

test('Verify user on login page', async ({ page, login }) => {
  await login.verfiyUserOnLoginPage();
});


test('User can login with Valid credentials', async ({ login,product}) => {
  await login.verfiyUserOnLoginPage();
  await login.loginWithValidCredentials('admin', 'admin123');
  await product.verifyUserOnProductsPage();
});

test('User can login with InValid credentials', async ({ login }) => {
  await login.verfiyUserOnLoginPage();
  await login.loginWithInValidCredentials('hello world123', 'admin123');
});

