import { Page, Locator, expect } from '@playwright/test';
import { switchToNewTab } from './demofixture';

export class ProductPageClass {
  private readonly sortByLabel: Locator;
  private readonly productList: Locator;

  constructor(public readonly page: Page) {
    this.page = page;
    this.sortByLabel = this.page.locator('.sort-label');
    this.productList = this.page.locator('.product-title ');
  }

  async VerifyUserOnProductPage() {
    await this.page.waitForLoadState();
    await expect(await this.sortByLabel).toBeVisible();
  }

  async UserClickThatProduct(product: string):Promise<Page>{
    const productElement = await this.productList.all();
    for (const item of productElement) {
      const text = await item.textContent();
      if (text?.includes(product)) {
        return await switchToNewTab(this.page.context(), async () => {
          await item.click()
        });
      }
    }
    throw new Error(`Product ${product} not found`);
  }
}