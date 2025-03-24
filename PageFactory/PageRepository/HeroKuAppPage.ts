import { Page } from "@playwright/test";
import { TheHerokuappPageObjects } from "../ObjectRepository/TheHerokuappPageObjects";

export class HerokuAppPage {
    readonly page: Page;
    readonly locator: TheHerokuappPageObjects;

    constructor(page: Page) {
        this.page = page;
        this.locator = new TheHerokuappPageObjects(page);
    }
    // Navigate to URL
    async navigateToURL() {
        await this.page.goto('/');
    }
    
    async navigateTo(url: string) {
        await this.page.goto(url);
    }

    // Click on 'Add/Remove Elements' link
    async addorremoveelements() {
        await this.locator.addOrRemoveElementslink.click();
    }

    // Click on 'Add Element' button
    async addElement() {
        await this.locator.addElementbtn.click();
    }

    // Click on 'Delete' button
    async deleteElement() {
        if (await this.locator.deletebtn.isVisible()) {
            await this.locator.deletebtn.click();
        }
    }

    async challengingDOM() {
        await this.locator.challengingDOM.click();
    }

    async editDOMelement(row: number) {
        await this.locator.editbtn.nth(row - 1).click();
    }

    async editDOMelementInLoop(row: number) {
        const totalRows = await this.locator.editbtn.count();
        for (let i = 0; i < totalRows; i++) {
            if (i + 1 === row) {
                await this.locator.editbtn.nth(i).click();
                console.log(`Edit row number is: ${row}`);
                break;
            }
        }
    }

    async deleteDOMelement(row: number) {
        await this.locator.deleteDOMbtn.nth(row - 1).click();
    }

    async deleteDOMelementInLoop(row: number) {
        const totalRows = await this.locator.deleteDOMbtn.count();
        for (let i = 0; i < totalRows; i++) {
            if (i + 1 === row) {
                await this.locator.deleteDOMbtn.nth(i).click();
                console.log(`Delete row number is: ${row}`);
                break;
            }
        }
    }

    async getSitColumnCell(row: number): Promise<string | null> {
        return await this.locator.sitColumnCell.nth(row - 1).textContent();
    }

    async getSitColumnCellInLoop(row: number): Promise<string | null> {
        const totalRows = await this.locator.sitColumnCell.count();
        for (let i = 0; i < totalRows; i++) {
            if (i + 1 === row) {
                return await this.locator.sitColumnCell.nth(i).textContent();
            }
        }
        return null;
    }

    async dragAndDrop() {
        await this.locator.dragAndDrop.click();
    }

    async dragAndDropAction() {
        await this.locator.sourceElement.dragTo(this.locator.targetElement)
    }

    async captureDragAndDropText() {
        return {
            columnA: await this.locator.sourceElement.textContent(),
            columnB: await this.locator.targetElement.textContent()
        }
    }

    async dropDown() {
        await this.locator.dropdown.click();
    }

    async selectDropdownOption(option: string) {
        await this.locator.dropdownSelect.selectOption(option);
    }

    async getSelectedDropdownValue(): Promise<string | null> {
        return await this.locator.dropdownSelect.inputValue();
    }

    async selectDropDownValue(value: string) {
        await this.locator.dropdown.selectOption(value)
    }

    async getDropDownValue() {
        return await this.locator.dropdown.inputValue();
    }

    // Dynamic Controls
    async toggleCheckbox() {
        await this.locator.removeAddButton.click();
        await this.page.waitForSelector('#message');
        return this.locator.checkboxMessage.textContent();
    }

    async toggleInputField() {
        await this.locator.enableDisableButton.click();
        await this.page.waitForSelector('#message');
        return this.locator.inputMessage.textContent();
    }

    // Dynamic Loading
    async loadDynamicContent() {
        await this.locator.startButton.click();
        await this.locator.loadingIndicator.waitFor({ state: 'hidden' });
        return this.locator.finishText.textContent();
    }

    // File Upload
    async uploadFile(filePath: string) {
        await this.locator.fileInput.setInputFiles(filePath);
        await this.locator.uploadButton.click();
        return this.locator.uploadedFiles.textContent();
    }

    // Horizontal Slider
    async moveSliderTo(value: string) {
        await this.locator.slider.fill(value);
        return this.locator.sliderValue.textContent();
    }
    // Hovers
    async hoverOverImage(index: number) {
        await this.locator.hoverImages.nth(index).hover();
        return this.locator.hoverCaptions.nth(index).textContent();
    }

    // Infinite Scroll
    async scrollUntilVisible() {
        await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        await this.page.waitForTimeout(2000);
        return this.locator.infiniteScrollContainer.count();
    }

    // Inputs
    async enterNumber(value: string) {
        await this.locator.inputFieldO.fill(value);
        return this.locator.inputFieldO.inputValue();
    }

    // JavaScript Alerts
    async triggerAlert() {
        this.page.once('dialog', async dialog => {
            await dialog.accept();
        });
        await this.locator.alertButton.click();
        return this.locator.alertResult.textContent();
    }

    // Key Presses
    async simulateKeyPress(key: string) {
        await this.locator.keyInputField.press(key);
        return this.locator.keyPressResult.textContent();
    }

    // Status Codes
    async checkStatusCode(index: number) {
        await this.locator.statusCodeLinks.nth(index).click();
        return this.locator.statusCodeMessage.textContent();
    }
}