import { Locator, Page, expect} from '@playwright/test';
export class LoginClass {
    private readonly username: Locator;
    private readonly password: Locator;
    private readonly loginButton: Locator;
    constructor(public page: Page) {
        this.username = page.locator('#username');
        this.password = page.locator('#password');
        this.loginButton = page.locator('#loginForm button');
    }

    async gotoWebsite(url: string) {
        await this.page.goto(url);
    }

    async verfiyUserOnLoginPage(){
        await this.page.goto('http://127.0.0.1:5500/src/loginpage.html');
        await expect(this.page).toHaveTitle(/Login Page/);
    }

    async loginWithValidCredentials(user: string, pass: string) {
        await this.username.fill(user);
        await this.password.fill(pass);
        await this.loginButton.click();
        await expect(this.page).toHaveTitle(/Products Page/);
    }

    async loginWithInValidCredentials(user: string, pass: string) {
        await this.username.fill(user);
        await this.password.fill(pass);
        await this.loginButton.click();
        await expect(this.page.locator('#error-message')).toBeVisible();
    }
}