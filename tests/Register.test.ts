// Register.test.ts
import { test, expect } from '@playwright/test';
import { RegisterPage } from '../PageFactory/PageRepository/RegisterPage';
import { registerData } from '../data/RegisterData';


test.describe('User Registration - Parabank', () => {
    test.beforeEach(async ({ page, baseURL }) => {
        await page.goto(`${baseURL}`);
    });

    test.skip('should validate that Register button is loaded', async ({ page }) => {
        const registerPage = new RegisterPage(page);
        await expect(registerPage.isRegisterButtonVisible()).toBeTruthy();
    });

    test.skip('should register a new user successfully', async ({ page }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.registerUser(registerData.validUser);
        await registerPage.submitForm();
        await expect(page.locator('text=Your account was created successfully')).toBeVisible();
        await registerPage.logout();
    });

    test.skip('should show error for missing required fields', async ({ page }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.submitForm();
        await expect(page.locator("//span[@id='customer.firstName.errors']")).toBeVisible();
    });
});
