import { Page, Locator, expect } from '@playwright/test';
export class OrderClass {
    private readonly fullName: Locator;
    private readonly phone: Locator;
    private readonly city: Locator;
    private readonly paymentMethod: Locator;
    private readonly orderTitle: Locator;
    private readonly gotoHomeButton: Locator;
    private readonly facebookBtn: Locator;
    private readonly twitterBtn: Locator;
    private readonly linkedinBtn: Locator;

    constructor(public page: Page) {
        this.fullName = page.locator('#orderFullName');
        this.phone = page.locator('#orderPhone');
        this.city = page.locator('#orderCity');
        this.paymentMethod = page.locator('#orderPayment');
        this.orderTitle = page.locator('.alert.alert-success.text-center');
        this.gotoHomeButton = page.locator('.text-center.mt-4 a');
        this.facebookBtn = page.locator('.social-links a.facebook');
        this.twitterBtn = page.locator('.social-links a.twitter');
        this.linkedinBtn = page.locator('.social-links a.linkedin');
    }

    async verifyUserOnOrderPage() {
        await expect(this.page).toHaveTitle(/Order Success/);
        await expect(await this.orderTitle).toBeVisible();
    }

    async GetOrderDetails() {
        console.log('Full Name', await this.fullName.textContent());
        console.log('Phone', await this.phone.textContent());
        console.log('City', await this.city.textContent());
        console.log('Payment Method', await this.paymentMethod.textContent());
    }

    async ClickGotoHomeButton() {
        await this.gotoHomeButton.click();
    }

    async ClickFacebook() {
        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'),
            this.facebookBtn.click(),
          ]);
        await newPage.waitForLoadState();
        expect(newPage.url()).toContain('facebook.com');
        await newPage.close();
    }

    async ClickTwitter() {
        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'),
            this.twitterBtn.click(),
          ]);
        await newPage.waitForLoadState();
        expect(newPage.url()).toContain('twitter.com');
        await newPage.close();
    }

    async ClickLinkedin() {
        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'),
            this.linkedinBtn.click(),
          ]);
        await newPage.waitForLoadState();
        expect(newPage.url()).toContain('linkedin.com');
        await newPage.close();
    }


}