import { Page, Locator, expect } from '@playwright/test';

export class CartClass {
    private readonly cartItems: Locator;
    private readonly cartSummary: Locator;
    private readonly removeButton: Locator;
    private readonly proceedToCheckoutButton: Locator;
    constructor(public page: Page) {
        this.cartItems = page.locator('#cartItems');
        this.cartSummary = page.locator('#cartSummary');
        this.removeButton = page.locator('.cart-item-details button');
        this.proceedToCheckoutButton = page.locator('.card.p-3 a');
    }

    async verifyUserOnCartPage() {
        await expect(this.page).toHaveTitle(/Cart Page/);
    }

    async verifyCartItemsDisplayed() {
        await expect(this.cartItems).toBeVisible();
    }

    async verifyCartSummaryDisplayed() {
        await expect(this.cartSummary).toBeVisible();
    }

    async verifyTotalPrice(price:string){
        await expect(this.cartSummary.locator('p').nth(1)).toHaveText(price);
    }

    async removeProductFromCart(productId: number) {
        await this.removeButton.nth(productId).click();
    }

    async ClickproceedToCheckout() {
        await this.proceedToCheckoutButton.click();
    }

    async removeALLProductFromCart() {
        let buttons = await this.removeButton.all();
        while (buttons.length > 0) {
            await buttons[0].click(); // Always click the 0th index
            buttons = await this.removeButton.all(); // Refresh the list after each removal
        }
    }

}