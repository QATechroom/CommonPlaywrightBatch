import { test, expect, Page } from "@playwright/test";

// Function that returns a Promise
async function getPageTitle(page: Page): Promise<string> {
    await page.goto("https://example.com");
    return await page.title();
}

// Playwright Test using Promises
test("Promise Example in Playwright", async ({ page }) => {
    getPageTitle(page)
        .then((title) => {
            console.log("Page Title:", title);
            expect(title).toBe("Example Domain");
        })
        .catch((error) => {
            console.error("Error:", error);
        });
});
