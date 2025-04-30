import {Locator, Page, expect} from '@playwright/test';
export class ProductDetilsPageClass {
    private readonly addtocartButton: Locator;

    constructor(public page:Page){
        this.page = page;
        this.addtocartButton = this.page.locator('#qna_numAnswered')
    }

    async VerifyUserOnProductDetilsPage(){
        await expect(await this.addtocartButton).toBeVisible();
    }
}