import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  // Go to https://ecommerce-playground.lambdatest.io/
  await page.goto("https://ecommerce-playground.lambdatest.io/");

  // Click a:has-text("Login")
  await page.hover("[data-toggle=dropdown] >> .info >> text=My account");
  await page.locator('a:has-text("Login")').click();
  await expect(page).toHaveURL(
    "https://ecommerce-playground.lambdatest.io/index.php?route=account/login"
  );

  // Click [placeholder="E-Mail Address"]
  await page.locator('[placeholder="E-Mail Address"]').click();

  // Fill [placeholder="E-Mail Address"]
  await page
    .locator('[placeholder="E-Mail Address"]')
    .fill("olivia1996@live.com");

  // Press Enter
  await page.locator('[placeholder="E-Mail Address"]').press("Enter");
  await expect(page).toHaveURL(
    "https://ecommerce-playground.lambdatest.io/index.php?route=account/login"
  );

  // Click [placeholder="Password"]
  await page.locator('[placeholder="Password"]').click();

  // Fill [placeholder="Password"]
  await page.locator('[placeholder="Password"]').fill("password");

  // Click input:has-text("Login")
  await page.locator('input:has-text("Login")').click();
  await expect(page).toHaveURL(
    "https://ecommerce-playground.lambdatest.io/index.php?route=account/account"
  );

  // Click text=Edit your account information
  await page.locator("text=Edit your account information").click();
  await expect(page).toHaveURL(
    "https://ecommerce-playground.lambdatest.io/index.php?route=account/edit"
  );

  // Click text=Continue
  await page.locator("text=Continue").click();
  await expect(page).toHaveURL(
    "https://ecommerce-playground.lambdatest.io/index.php?route=account/account"
  );

  // Click #widget-navbar-217834 a:has-text("Logout")
  await page.hover("[data-toggle=dropdown] >> .info >> text=My account");
  await page.locator('#widget-navbar-217834 a:has-text("Logout")').click();
  await expect(page).toHaveURL(
    "https://ecommerce-playground.lambdatest.io/index.php?route=account/logout"
  );
});
