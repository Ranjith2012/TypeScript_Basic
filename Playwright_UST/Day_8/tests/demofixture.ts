//import { Fixture} from "playwright/test";
import { test as base, expect } from "@playwright/test";
import { loginfixture } from "./loginpage";
import { ProductClass } from "./productpage";
import { CartClass } from "./cartpage";
import { CheckOutClass } from "./checkoutpage";
import { ReviewClass } from "./reviewpage";

type demofixture = {
    login: loginfixture;
    productpage : ProductClass;
    cartpage: CartClass;
    checkoutpage: CheckOutClass;
    reviewpage: ReviewClass;
}

export const test = base.extend<demofixture>({
    login: async ({page}, use) => {
      const web = new loginfixture(page);
      await use(web);
    },

    productpage: async ({page}, use) => {
      const product = new ProductClass(page);
      await use(product);
    },

    cartpage:async({page},use)=>{
      const cart = new CartClass(page);
      await use(cart);
    },

    checkoutpage:async({page},use)=>{
      const checkout = new CheckOutClass(page);
      await use(checkout);
    },

    reviewpage:async({page},use)=>{
      const review = new ReviewClass(page);
      await use(review);
    }

});

export {expect} from '@playwright/test';