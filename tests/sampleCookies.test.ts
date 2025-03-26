import { chromium, FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    // Navigate to login page
    await page.goto('https://example.com/login');

    // Perform login steps
    await page.fill('input[name="username"]', 'your-username');
    await page.fill('input[name="password"]', 'your-password');
    await page.click('button[type="submit"]');

    // Wait for navigation or confirmation of login
    await page.waitForURL('https://example.com/dashboard');

    // Save session state (cookies + local storage)
    await context.storageState({ path: 'auth.json' });

    await browser.close();
}

export default globalSetup;