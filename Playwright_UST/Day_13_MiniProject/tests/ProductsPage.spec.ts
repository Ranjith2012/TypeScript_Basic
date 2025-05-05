import {test, expect} from './Ecommerse.fixture';

test('Verify user on Products Page', async ({ login, product }) => {
    await login.verfiyUserOnLoginPage();
    await login.loginWithValidCredentials('admin', 'admin123');
    await product.verifyUserOnProductsPage();
    await product.verifyCartIconDisplayed();
});

test('User can add product to cart', async ({ login, product }) => {
    await login.verfiyUserOnLoginPage();
    await login.loginWithValidCredentials('admin', 'admin123');
    await product.verifyUserOnProductsPage();
    await product.addProductToCart(1);
    await product.verifyCartCount(1);
    await product.removeProductFromCart();
});

test('User can remove product from cart', async ({ login, product }) => {
    await login.verfiyUserOnLoginPage();
    await login.loginWithValidCredentials('admin', 'admin123');
    await product.verifyUserOnProductsPage();
    await product.addProductToCart(1);
    await product.removeProductFromCart();
});


test('Verify user can navigate to cart page', async ({ login, product }) => {
    await login.verfiyUserOnLoginPage();
    await login.loginWithValidCredentials('admin', 'admin123');
    await product.verifyUserOnProductsPage();
    await product.navigateToCart();
    await expect(product.page).toHaveTitle(/Cart Page/);
});

test('verify the product Count', async ({ login, product }) => {
    await login.verfiyUserOnLoginPage();
    await login.loginWithValidCredentials('admin', 'admin123');
    await product.verifyUserOnProductsPage();
    await product.verifyCartCount(0);
});