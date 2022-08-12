import { chromium, test } from "@playwright/test";

test("Login test demo", async () => {
  const browser = await chromium.launch({
    headless: false,
  });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("http://ecommerce-playground.Lambdatest.io/");
  await page.hover("[data-toggle=dropdown] >> .info >> text=My account");
  await page.click("text=Login");

  await page.fill("input[name='email']", "olivia1996@live.com");
  await page.fill("input[name='password']", "password");
  await page.click("input[value='Login']");
});
