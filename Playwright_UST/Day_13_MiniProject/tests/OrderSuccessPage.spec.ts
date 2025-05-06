import {test, expect} from './Ecommerse.fixture';

test('Verify user on Order Success Page', async ({login, product, cart, checkout, order}) => {
    await login.verfiyUserOnLoginPage();
    await login.loginWithValidCredentials('admin', 'admin123');
    await product.verifyUserOnProductsPage();
    await product.addProductToCart(0);
    await product.navigateToCart();
    await cart.verifyUserOnCartPage();
    await cart.ClickproceedToCheckout();
    await checkout.verifyUserOnCheckoutPage();
    await checkout.UserFillCheckOutDetails('Krishn', '9486900546', 'New York', 'Credit Card');
    await checkout.ClickplaceOrder();
    await order.verifyUserOnOrderPage();
});

test('Get the Order Deatils', async ({login, product, cart, checkout, order}) => {
    await login.verfiyUserOnLoginPage();
    await login.loginWithValidCredentials('admin', 'admin123');
    await product.verifyUserOnProductsPage();
    await product.addProductToCart(0);
    await product.navigateToCart();
    await cart.verifyUserOnCartPage();
    await cart.ClickproceedToCheckout();
    await checkout.verifyUserOnCheckoutPage();
    await checkout.UserFillCheckOutDetails('Krishna', '9486900546', 'New York', 'Credit Card');
    await checkout.ClickplaceOrder();
    await order.verifyUserOnOrderPage();
    await order.GetOrderDetails();
});


test('Verify Goto Home Button navigate to Products Page', async ({login, product, cart, checkout, order}) => {
    await login.verfiyUserOnLoginPage();
    await login.loginWithValidCredentials('admin', 'admin123');
    await product.verifyUserOnProductsPage();
    await product.addProductToCart(0);
    await product.navigateToCart();
    await cart.ClickproceedToCheckout();
    await checkout.verifyUserOnCheckoutPage();
    await checkout.UserFillCheckOutDetails('Krishna', '9486900546', 'New York', 'Credit Card');
    await checkout.ClickplaceOrder();
    await order.verifyUserOnOrderPage();
    await order.ClickGotoHomeButton();
    await expect(order.page).toHaveTitle(/Products Page/);
}); 


