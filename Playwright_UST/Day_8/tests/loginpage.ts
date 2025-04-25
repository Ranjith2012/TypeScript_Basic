import { Page, Locator } from "playwright";

export class loginfixture {
    private readonly username : Locator;
    private readonly password : Locator;
    private readonly loginButton : Locator;
    private readonly errorMessage : Locator;

    constructor(public readonly page: Page) {
        this.username = this.page.locator("#user-name");
        this.password = this.page.locator("#password");
        this.loginButton = this.page.locator("#login-button");
        this.errorMessage = this.page.locator('[data-test="error"]');
    }
    async gotoWebsite(url: string) {
        await this.page.goto(url);
    }

    async login(username: string, password: string) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }
    async getTitle() {  
        return await this.page.title();
    }

    async getErrorMessage(){
        return await this.errorMessage.textContent();
    }

}
