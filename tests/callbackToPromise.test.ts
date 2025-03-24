import { test, expect, Page } from "@playwright/test";

// Callback-based function
function waitForElementWithCallback(page: Page, selector: string, callback: () => void) {
    page.waitForSelector(selector).then(() => {
        console.log(`Element ${selector} is visible`);
        callback();
    });
}

// Convert to Promise-based function
function waitForElementWithPromise(page: Page, selector: string): Promise<void> {
    return new Promise((resolve) => {
        waitForElementWithCallback(page, selector, () => {
            resolve();
        });
    });
}

// Playwright Test using Promises
test("Convert Callback to Promise in Playwright", async ({ page }) => {
    await page.goto("https://example.com");

    await waitForElementWithPromise(page, "h1");
    console.log("Test completed");
});
