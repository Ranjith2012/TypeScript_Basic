import {test as base, BrowserContext, Page} from '@playwright/test';
import {HomePageClass} from './HomePage';
import { ProductPageClass } from './ProductPage';
import { ProductDetilsPageClass } from './ProductDetilsPage';

type fixture ={
    homepage: HomePageClass,
    productPage: ProductPageClass,
    productDetailsPage: ProductDetilsPageClass,
}


export const test = base.extend<fixture>({
    homepage :async ({page}, use)=>{
        const homepage = new HomePageClass(page);
        await homepage.openWebsite();
        await use(homepage);
    },

    productPage :async ({page}, use)=>{
        const productPage = new ProductPageClass(page);
        await use(productPage);
    },

    productDetailsPage :async ({page}, use)=>{
        const productDetailsPage = new ProductDetilsPageClass(page);
        await use(productDetailsPage);
    }



})


export async function switchToNewTab(context: BrowserContext, action: () => Promise<void>): Promise<Page> {
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        action()
    ]);
    await newPage.waitForLoadState();
    return newPage;
}

export async function switchBackToPage(page: Page) {
    await page.bringToFront();
}


export {expect} from '@playwright/test';