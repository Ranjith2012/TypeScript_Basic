import {test, expect} from './Ecommerse.fixture';

test('Verify user On cart page', async ({login, product, cart})=>{
    await login.verfiyUserOnLoginPage();
    await login.loginWithValidCredentials('admin', 'admin123');
    await product.verifyUserOnProductsPage();
    await product.navigateToCart();
    await expect(cart.page).toHaveTitle(/Cart Page/);
})


test('verify total price matches the total items prices', async ({login, product, cart}) => {
    await login.verfiyUserOnLoginPage();
    await login.loginWithValidCredentials('admin', 'admin123');
    await product.verifyUserOnProductsPage();
    await product.addProductToCart(0);
    await product.addProductToCart(1);
    await product.addProductToCart(2);
    await product.addProductToCart(3);
    await product.addProductToCart(4);
    await product.addProductToCart(5);
    await product.addProductToCart(6);
    await product.addProductToCart(7);
    await product.verifyCartCount(8);
    await product.navigateToCart();
    await cart.verifyUserOnCartPage();
    await cart.verifyTotalPrice('Total Price: $173.92');
    
});

test('Verify the total items count displayed in cart page', async ({login, product, cart}) => {
    await login.verfiyUserOnLoginPage();
    await login.loginWithValidCredentials('admin', 'admin123');
    await product.verifyUserOnProductsPage();
    await product.addProductToCart(0);
    await product.addProductToCart(1);
    await product.addProductToCart(2);
    await product.addProductToCart(3);
    await product.verifyCartCount(4);
    await product.navigateToCart();
    await cart.verifyUserOnCartPage();
    await cart.verifyCartItemsDisplayed();
    await expect(cart.page.locator('.cart-item')).toHaveCount(4);
});


test('verify user can remove product from cart', async ({login, product, cart}) => {
    await login.verfiyUserOnLoginPage();
    await login.loginWithValidCredentials('admin', 'admin123');
    await product.verifyUserOnProductsPage();
    await product.addProductToCart(0);
    await product.addProductToCart(1);
    await product.addProductToCart(2);
    await product.addProductToCart(3);
    await product.verifyCartCount(4);
    await product.navigateToCart();
    await cart.verifyUserOnCartPage();
    await cart.verifyCartItemsDisplayed();
    await expect(cart.page.locator('.cart-item')).toHaveCount(4);
    await cart.removeProductFromCart(1);
    await cart.verifyCartItemsDisplayed();
    await expect(cart.page.locator('.cart-item')).toHaveCount(3);
});


test('verify the proceed to checkout button working', async ({login, product, cart}) => {
    await login.verfiyUserOnLoginPage();
    await login.loginWithValidCredentials('admin', 'admin123');
    await product.verifyUserOnProductsPage();
    await product.addProductToCart(0);
    await product.navigateToCart();
    await cart.verifyUserOnCartPage();
    await cart.ClickproceedToCheckout();
});


test('User remove all product from cart', async ({login, product, cart}) => {
    await login.verfiyUserOnLoginPage();
    await login.loginWithValidCredentials('admin', 'admin123');
    await product.verifyUserOnProductsPage();
    await product.addProductToCart(0);
    await product.addProductToCart(1);
    await product.navigateToCart();
    await cart.verifyUserOnCartPage();
    await cart.verifyCartItemsDisplayed();
    await cart.removeALLProductFromCart();
});