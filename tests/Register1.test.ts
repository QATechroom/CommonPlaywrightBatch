import { test, expect } from '@playwright/test';
import { Register1Page } from '../PageFactory/PageRepository/Register1Page';
import { CSVReader } from '../Utils/CSVReader';

test.describe('Register Tests', () => {
    let register1Page: Register1Page;

    test.beforeEach(async ({ page }) => {
        register1Page = new Register1Page(page);
        await page.goto('https://parabank.parasoft.com/parabank/register.htm');
    });

    test.only('Register users from CSV', async ({ page }) => {
        const users = await CSVReader.readCSV('./data/RegisterData.csv');

        for (const user of users) {
            console.log(`Registering: ${user.firstName} ${user.lastName}`);
            await register1Page.register1User(user);
            await register1Page.submitRegistration();
            await expect(page.locator('text=Your account was created successfully')).toBeVisible();
            await register1Page.logout();
            await page.goto('https://parabank.parasoft.com/parabank/register.htm');
        }
    });
});
