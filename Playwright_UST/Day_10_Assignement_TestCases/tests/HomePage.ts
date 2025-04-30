import {Page, Locator, expect} from '@playwright/test';
export class HomePageClass{
    private readonly category: Locator;
    private readonly searchbar: Locator;

    constructor(public readonly page: Page){
        this.page = page;
        this.category = this.page.locator('.nav li');
        this.searchbar = this.page.locator('#inputValEnter');
    }

    async openWebsite(){
        await this.page.goto('https://www.snapdeal.com/');
    }

    async verifyUserOnHomePage(){
        await expect(await this.category.nth(1)).toBeVisible();
    }

    async getTitle():Promise<string>{
        return await this.page.title();
    }

    async searchForProduct(productName:string){
        await this.searchbar.fill(productName);
        await this.searchbar.fill('Watch');
        await this.searchbar.press('Enter');
        await this.searchbar.press('Enter')
    }

}