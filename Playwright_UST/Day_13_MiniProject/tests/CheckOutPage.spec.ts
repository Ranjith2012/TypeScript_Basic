import {test, expect} from './Ecommerse.fixture';

test('Verify user on Checkout Page', async ({login, product, cart, checkout}) => {
    await login.verfiyUserOnLoginPage();
    await login.loginWithValidCredentials('admin', 'admin123');
    await product.verifyUserOnProductsPage();
    await product.addProductToCart(0);
    await product.navigateToCart();
    await cart.verifyUserOnCartPage();
    await cart.ClickproceedToCheckout();
    await checkout.verifyUserOnCheckoutPage();
});

test('verify without filling the checkout details', async ({login, product, cart, checkout}) => {
    await login.verfiyUserOnLoginPage();
    await login.loginWithValidCredentials('admin', 'admin123');
    await product.verifyUserOnProductsPage();
    await product.addProductToCart(0);
    await product.navigateToCart();
    await cart.verifyUserOnCartPage();
    await cart.ClickproceedToCheckout();
    await checkout.verifyUserOnCheckoutPage();
    await checkout.ClickplaceOrder();
    await expect(checkout.page).toHaveTitle(/Checkout/);
});


test('Validate the user can fill the checkout details', async ({login, product, cart, checkout}) => {
    await login.verfiyUserOnLoginPage();
    await login.loginWithValidCredentials('admin', 'admin123');
    await product.verifyUserOnProductsPage();
    await product.addProductToCart(0);
    await product.navigateToCart();
    await cart.verifyUserOnCartPage();
    await cart.ClickproceedToCheckout();
    await checkout.verifyUserOnCheckoutPage();
    await checkout.UserFillCheckOutDetails('John Doe', '1234567890', 'New York', 'Credit Card');
    await checkout.ClickplaceOrder();
    await expect(checkout.page).toHaveTitle(/Order Success/);
});



