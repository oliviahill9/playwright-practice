import { expect, test } from "@playwright/test";

test("", async ({ page }) => {
  await page.goto(
    "https://www.Lambdatest.com/selenium-playground/simple-form-demo"
  );
  const messageInput = page.locator("input#user-message");
  console.log(await messageInput.getAttribute("placeholder"));
  await expect(messageInput).toHaveAttribute(
    "placeholder",
    "Please enter your Message"
  );
});
