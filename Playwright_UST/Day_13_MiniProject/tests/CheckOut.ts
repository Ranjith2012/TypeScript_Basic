import { Page, Locator, expect } from '@playwright/test';

export class CheckOutClass {
    private readonly fullName: Locator;
    private readonly phone: Locator;
    private readonly city: Locator;
    private readonly paymentMethod: Locator;
    private readonly placeOrderButton: Locator;
    constructor(public page: Page) {
        this.fullName = page.locator('#fullName');
        this.phone = page.locator('#phone');
        this.city = page.locator('#city');
        this.paymentMethod = page.locator('#paymentMethod');
        this.placeOrderButton = page.locator('#checkoutForm button');
    }

    async verifyUserOnCheckoutPage() {
        await expect(this.page).toHaveTitle(/Checkout/);
    }

    async verifyOrderDetailsDisplayed() {
        await expect(this.fullName).toBeVisible();
        await expect(this.phone).toBeVisible();
        await expect(this.city).toBeVisible();
        await expect(this.paymentMethod).toBeVisible();
    }

    async ClickplaceOrder() {
        await this.placeOrderButton.click();
    }  

    async UserFillCheckOutDetails(fullName: string, phone: string, city: string, paymentMethod: string) {
        await this.fullName.fill(fullName);
        await this.phone.fill(phone);
        await this.city.fill(city);
        await this.paymentMethod.selectOption(paymentMethod);
    }
}