import { Page } from '@playwright/test';

export class WebActions {
    constructor(private page: Page) {}

    async fillText(selector: string, text: string) {
        await this.page.fill(selector, text);
    }

    async clickElement(selector: string) {
        await this.page.click(selector);
    }

    async isElementVisible(selector: string) {
        return await this.page.isVisible(selector);
    }
    async delay(time: number): Promise<void> {
        // Wait For The Specific Timeout 
        return new Promise(function (resolve) {
            setTimeout(resolve, time);
        });
    }
}
