import { Locator, Page } from "playwright";

export class ProductClass {
    private readonly productName: Locator;
    private readonly productPrice: Locator;
    private readonly addToCartButton: Locator;
    private readonly cartIcon: Locator;
    private readonly cartItemCount: Locator;

    constructor(public readonly page: Page) {
        this.productName = this.page.locator(".inventory_item_name");
        this.productPrice = this.page.locator(".inventory_item_price");
        this.addToCartButton = this.page.locator(".pricebar button");
        this.cartIcon = this.page.locator(".shopping_cart_link");
        this.cartItemCount = this.page.locator(".shopping_cart_badge");
    }
    async addtoCart(num: number) {
        const buttonText = await this.addToCartButton.nth(num).textContent();
        if (buttonText === "Add to cart") {
            await this.addToCartButton.first().click();
        } else {
            console.log("Item already in cart");
        }
    
    }
    async clickcartIcon() {
        await this.cartIcon.click();
    }

    async getCartValue(){
        return await this.cartItemCount.textContent(); 
    }


}