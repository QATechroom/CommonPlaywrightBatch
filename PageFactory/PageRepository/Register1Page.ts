import { expect, Page } from '@playwright/test';
import { WebActions } from '../../Utils/WebActions';
import { RegisterPageObjects } from '../ObjectRepository/RegisterPageObjects';

export class Register1Page {
    private page: Page;
    private webActions: WebActions;
    private locators: RegisterPageObjects;

    constructor(page: Page) {
        this.page = page;
        this.webActions = new WebActions(page);
        this.locators = new RegisterPageObjects();
    }

    // ✅ Implementing the method instead of throwing an error
    async register1User(user: Record<string, string>) {
        for (const key in user) {
            if (key in this.locators) {
                await this.webActions.delay(500);  // ✅ Add a short delay
                await this.webActions.fillText((this.locators as any)[key], user[key]);
            }
        }
    }

    async submitRegistration() {
        await this.webActions.clickElement(this.locators.registerButton);
    }

    async logout() {
        console.log("Logging out...");
        await this.webActions.clickElement(`//a[normalize-space()='Log Out']`);  // ✅ Update with actual logout button/link
        await expect(this.page.locator('text=Customer Login')).toBeVisible();  // ✅ Ensure logout is successful
    }
}
