import { Page, Locator, expect } from '@playwright/test';

export class ProductsClass {
    private readonly cartIcon: Locator;
    private readonly cartCount: Locator;
    private readonly addtocartButton: Locator;
    constructor(public page: Page) {
        this.cartIcon = this.page.locator('#cartIcon');
        this.cartCount = this.page.locator('#cartCount');
        this.addtocartButton = this.page.locator('.add-to-cart-btn');
    }

    async verifyUserOnProductsPage() {
        await expect(this.cartIcon).toBeVisible();
        await expect(this.page).toHaveTitle(/Products Page/);
    }

    async verifyCartIconDisplayed() {
        await expect(this.cartIcon).toBeVisible();
    }

    async addProductToCart(productId: number) {
        await this.addtocartButton.nth(productId).click();
        await this.page.waitForTimeout(1000);
        await expect(this.addtocartButton.nth(productId)).toHaveText('Remove from Cart');
    }

    async removeProductFromCart() {
        const buttons = await this.addtocartButton.all();
        for (const button of buttons) {
            const text = await button.textContent();
            if (text?.trim() === 'Remove from Cart') {
                await button.click();
                break;
            }
        }
    }

    async verifyCartCount(count: number) {
        await expect(this.cartCount).toHaveText(count.toString());
    }

    async navigateToCart() {
        await this.cartIcon.click();
        await expect(this.page).toHaveTitle(/Cart Page/);
    }
}

