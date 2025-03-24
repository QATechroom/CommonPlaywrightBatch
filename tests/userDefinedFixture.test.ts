import { test as base, expect } from '@playwright/test';

// Custom fixture for logged-in user
const test = base.extend<{ loggedInPage: any }>({
    loggedInPage: async ({ page }: any, use: (arg0: any) => any) => {
        //await page.goto('https://example.com/login');
        await page.fill('#username', 'testuser');
        await page.fill('#password', 'password123');
        await page.click('button[type="submit"]');
        await page.waitForLoadState('networkidle');

        // Provide the logged-in page to the test
        await use(page);
    },
});

// Test using the custom fixture
test('Verify Dashboard Page After Login', async ({ loggedInPage }) => {
    await loggedInPage.goto('https://example.com/dashboard');
    const welcomeText = await loggedInPage.locator('h1').textContent();
    expect(welcomeText).toContain('Welcome, testuser');
});
