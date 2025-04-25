import { Locator, Page } from "playwright/test";

export class CartClass {
    private readonly pageLabel: Locator;
    private readonly checkoutBtn: Locator;

    constructor(public readonly page: Page){
        this.pageLabel = this.page.locator(".header_secondary_container span");
        this.checkoutBtn = this.page.locator("#checkout");
    }

    async verifyProductPageTitle(){
        return await this.pageLabel.textContent();
    }

    async clickCheckOutButton(){
        await this.checkoutBtn.click();
    }

}