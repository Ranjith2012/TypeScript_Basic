import { test, expect } from "./demofixture";


test("Valid login", async ({ login }) => {
  await login.gotoWebsite("https://www.saucedemo.com/");
  await login.login("standard_user","secret_sauce");
  expect(await login.getTitle()).toBe("Swag Labs");
});

test("Invalid login", async ({ login }) => {
  await login.gotoWebsite("https://www.saucedemo.com/");
  await login.login("invalid_user", "invalid_password");
  expect(await login.getErrorMessage()).toContain("Epic sadface: Username and password do not match any user in this service");
})


test("Place Order", async ({ login, productpage, cartpage, checkoutpage, reviewpage }) => {
    await login.gotoWebsite("https://www.saucedemo.com/");
    await login.login("standard_user","secret_sauce");
    const title = await login.getTitle();
    await expect(title).toBe("Swag Labs");
    await productpage.addtoCart(1);
    expect(await productpage.getCartValue()).toBe("1");
    await productpage.clickcartIcon();
    expect(await cartpage.verifyProductPageTitle()).toBe("Your Cart");
    await cartpage.clickCheckOutButton();
    await checkoutpage.fillCheckoutDetails("John", "Doe", "12345");
    await checkoutpage.clickContinueButton();
    await expect(await reviewpage.page.getByText("Finish")).toBeVisible();
    await reviewpage.clickFinishButton();
    await expect(await reviewpage.page.getByText("Thank you for your order!")).toBeVisible();
});



