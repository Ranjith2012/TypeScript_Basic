import { test, expect } from './demofixture';
import { ProductDetilsPageClass } from './ProductDetilsPage';

test('has title', async ({ homepage }) => {
    await homepage.verifyUserOnHomePage();
    const title = await homepage.getTitle();
    await expect(title).toBe('Shop Online for Men, Women & Kids Clothing, Shoes, Home Decor Items');
});


test('search for product', async ({ homepage, productPage }) => {
    await homepage.searchForProduct('Watch');
    await productPage.VerifyUserOnProductPage();
});


test.only('User can order the product', async ({ homepage, productPage }) => {
    await homepage.searchForProduct('Watch');
    await productPage.VerifyUserOnProductPage();
    const productDetailsTab = await productPage.UserClickThatProduct("Cosmic");
    await productDetailsTab.waitForLoadState();
    const productDetailsPage = new ProductDetilsPageClass(productDetailsTab); 
    await productDetailsPage.VerifyUserOnProductDetilsPage();
});