import {test, expect} from "@playwright/test";

test ("Title Verification",async ({page})=>{
    test.setTimeout(1000);
    await page.goto("https://www.typescriptlang.org/");
    await expect(page).toHaveTitle(/TypeScript/);
})


test("Click Try Button",async({page})=>{
  await page.goto("https://www.typescriptlang.org/");
  const getStart = page.locator(".call-to-action .fluid-button-title");
  await getStart.click();
  await expect(page.getByText("Get Started With TypeScript")).toBeVisible();
})


//positive testCase
test("validate the login functionality",async({page})=>{
  await page.goto("https://www.saucedemo.com/");
  await page.fill("#user-name","standard_user");
  await page.fill("#password","secret_sauce");
  await page.click("#login-button");
  await expect(page.locator(".app_logo")).toBeVisible();
})

//Neagative test case
test.only("validate the Invalid login functionality",async({page})=>{
  await page.goto("https://www.saucedemo.com/");
  await page.fill("#user-name","standard_user");
  await page.fill("#password","new");
  await page.click("#login-button");
  await expect(page.getByText("Epic sadface: Username and password do not match any user in this service")).toBeVisible();
})

//Validate the Button Functionality
test("Download Button verification",async({page})=>{
  await page.goto("https://www.typescriptlang.org/");
  const downloadBtn = page.locator("#tab1");
  await downloadBtn.click();
  const runBtn = await page.locator("//a[@title='Link to the node.js project']");
  await runBtn.click();
  await expect(page).toHaveURL(/nodejs/);
})

test("Validate the search Bar Functinalities", async({page})=>{
  await page.goto("https://www.typescriptlang.org/");
  const searchBar = page.getByPlaceholder("Search Docs");
  await searchBar.fill("What is a tsconfig.json");
  await searchBar.press("Enter");
  await page.waitForSelector('text=tsconfig.json');
})