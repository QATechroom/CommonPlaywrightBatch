// RegisterPage.ts
import { expect, Page } from '@playwright/test';
import { RegisterPageObjects } from '../ObjectRepository/RegisterPageObjects';
import { WebActions } from '../../Utils/WebActions';

export class RegisterPage {
    static registerUser(user: Record<string, string>) {
        throw new Error('Method not implemented.');
    }
    private webActions: WebActions;
    private locators:RegisterPageObjects;

    constructor(private page: Page) {
        this.webActions = new WebActions(page);
        this.locators = new RegisterPageObjects();
    }

    async isRegisterButtonVisible() {
        return await this.webActions.isElementVisible(this.locators.registerButton);
    }

    async registerUser(userData: Record<string, string>) {
        for (const key in userData) {
            if (key in this.locators) {
                await this.webActions.fillText((this.locators as any)[key], userData[key]);
            }
        }
        await this.webActions.clickElement(this.locators.registerButton);
    }

    async registerUser1(userData: any) {
        await this.page.fill(this.locators.firstName, userData.firstName);
        await this.page.fill(this.locators.lastName, userData.lastName);
        await this.page.fill(this.locators.address, userData.address);
        await this.page.fill(this.locators.city, userData.city);
        await this.page.fill(this.locators.state, userData.state);
        await this.page.fill(this.locators.zipCode, userData.zipCode);
        await this.page.fill(this.locators.phone, userData.phone);
        await this.page.fill(this.locators.ssn, userData.ssn);
        await this.page.fill(this.locators.username, userData.username);
        await this.page.fill(this.locators.password, userData.password);
        await this.page.fill(this.locators.confirmPassword, userData.confirmPassword);
    }

    async submitForm() {
        await this.webActions.clickElement(this.locators.registerButton);
    }

    async logout() {
            console.log("Logging out...");
            await this.webActions.clickElement(`//a[normalize-space()='Log Out']`);  // ✅ Update with actual logout button/link
            await expect(this.page.locator('text=Customer Login')).toBeVisible();  // ✅ Ensure logout is successful
    }
}
