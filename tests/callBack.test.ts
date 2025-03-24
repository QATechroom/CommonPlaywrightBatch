import { test, expect, Page } from "@playwright/test";

// Function using a callback to click a button and perform an action
function clickButtonWithCallback(page: Page, callback: (text: string) => void) {
    page.locator("#submit-button").click().then(() => {
        console.log("Button clicked");
        callback("Success: Button Clicked");
    });
}

// Playwright Test using Callback
test("Callback Example in Playwright", async ({ page }) => {
    await page.goto("https://example.com");

        clickButtonWithCallback(page, (message) => {
        console.log(message);
    });
});
