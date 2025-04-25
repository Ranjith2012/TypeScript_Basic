import { Locator,Page } from "playwright";

export class ReviewClass {
    private readonly finishButton: Locator;
    private readonly orderConfirmation: Locator;

    constructor(public readonly page: Page) {
        this.finishButton = this.page.locator("#finish");
        this.orderConfirmation = this.page.locator(".complete-text");
    }

    async clickFinishButton() {
        await this.finishButton.click();
    }

    async getOrderConfirmation() {
        return await this.orderConfirmation.textContent();
    }
}