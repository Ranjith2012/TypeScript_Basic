import {test as base, Locator} from '@playwright/test';
import { LoginClass } from './Login';
import { ProductsClass } from './Products';
import { CartClass } from './Cart';
import { CheckOutClass } from './CheckOut';
import { OrderClass } from './Order';
type ecommerce = {
     login : LoginClass;
     product : ProductsClass;
     cart: CartClass;
     checkout: CheckOutClass;
     order: OrderClass;
};

export const test = base.extend<ecommerce>({
    login: async ({page}, use) => {
        const login = new LoginClass(page);
        await login.gotoWebsite("http://127.0.0.1:5500/src/loginpage.html");
        await use(login)
    },

    product: async ({page}, use) => {
        const product = new ProductsClass(page);
        await use(product)
    },

    cart: async ({page}, use) => {
        const cart = new CartClass(page);
        await use(cart)
    },

    checkout: async ({page}, use) => {
        const checkout = new CheckOutClass(page);
        await use(checkout)
    },

    order: async ({page}, use) => {
        const order = new OrderClass(page);
        await use(order)
    },


});

export {expect} from '@playwright/test';