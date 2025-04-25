import { Locator, Page } from "playwright/test";

export class CheckOutClass{
    private firstName: Locator;
    private lastName: Locator;
    private pincode: Locator;

    constructor(public readonly page: Page){
        this.firstName = this.page.locator("#first-name");
        this.lastName = this.page.locator("#last-name");
        this.pincode = this.page.locator("#postal-code");
    }

    async fillCheckoutDetails(firstname: string, lastname: string, pincode: string){
        await this.firstName.fill(firstname);
        await this.lastName.fill(lastname);
        await this.pincode.fill(pincode);
    }

    async clickContinueButton(){
        await this.page.locator("#continue").click();
    }

}