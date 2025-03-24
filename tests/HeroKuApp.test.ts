import test, { expect } from "@playwright/test";
import { HerokuAppPage } from "../PageFactory/PageRepository/HerokuAppPage"
import { heroKuAppTestData } from "../data/heroKuAppTestData";
import { TheHerokuappPageObjects } from "../PageFactory/ObjectRepository/TheHerokuappPageObjects";

test.describe('@UIOne - Validating multiple solutions in HeroKuApp', () => {

    test('@AddOrRemoveElements - Add/Remove Elements', async ({ page }) => {
        const heroApp = new HerokuAppPage(page);
        await heroApp.navigateToURL();
        await heroApp.addorremoveelements();
        await heroApp.addElement();
        await heroApp.deleteElement();
    })

    test.only('@ChallengingDOM - Challenging DOM - validate in table', async ({ page }) => {
        const heroApp = new HerokuAppPage(page);
        await heroApp.navigateToURL();
        await heroApp.challengingDOM();
        await heroApp.editDOMelementInLoop(6);
        await heroApp.deleteDOMelementInLoop(8);
        const sitCellValue = await heroApp.getSitColumnCellInLoop(5);
        console.log(`The sit column cell value is: ${sitCellValue}`)
        expect(sitCellValue).not.toBeNull();
    })
})

test.describe('@UITwo - Validating multiple solutions in HeroKuApp', () => {
    test('@DragAndDrop - Drag the source element and Drop it in target element', async ({ page }) => {
        const heroApp = new HerokuAppPage(page);
        await heroApp.navigateToURL();
        await heroApp.dragAndDrop();
        await heroApp.dragAndDropAction();
        await heroApp.captureDragAndDropText();
    })

    test.only('@Dropdown - Select the value from Dropdown', async ({ page }) => {
        const heroApp = new HerokuAppPage(page);
        await heroApp.navigateToURL();
        await heroApp.dropDown();
        // Select Option 1
        await heroApp.selectDropdownOption(heroKuAppTestData.dropDownvalues.option1);
        const selectedValue1 = await heroApp.getSelectedDropdownValue();
        expect(selectedValue1).toBe(heroKuAppTestData.dropDownvalues.option1);

        // Select Option 2
        await heroApp.selectDropdownOption(heroKuAppTestData.dropDownvalues.option2);
        const selectedValue2 = await heroApp.getSelectedDropdownValue();
        expect(selectedValue2).toBe(heroKuAppTestData.dropDownvalues.option2);
    })

    test('@DynamicControl - Dynamic Controls-Checkbox and Input Field', async ({ page }) => {
        const herokuApp = new HerokuAppPage(page);
        await herokuApp.navigateTo('/dynamic_controls');

        const checkboxMessage = await herokuApp.toggleCheckbox();
        expect(checkboxMessage).toContain(heroKuAppTestData.dynamicControls.checkboxMessage);

        const inputMessage = await herokuApp.toggleInputField();
        expect(inputMessage).toContain(heroKuAppTestData.dynamicControls.inputEnableMessage);
    });

    test('@DynamicLoading - Dynamic Loading-Verify Content After Loading', async ({ page }) => {
        const herokuApp = new HerokuAppPage(page);
        await herokuApp.navigateTo('/dynamic_loading/1');

        const loadedText = await herokuApp.loadDynamicContent();
        expect(loadedText).toContain(heroKuAppTestData.dynamicLoading.finishText);
    });
})

test.describe('@UIThree - Validating multiple solutions in HeroKuApp', () => {
    test('@Upload - File Upload - Verify File Upload', async ({ page }) => {
        const herokuApp = new HerokuAppPage(page);
        await herokuApp.navigateTo('/upload');

        const uploadedFileName = await herokuApp.uploadFile(heroKuAppTestData.fileUpload.filePath);
        expect(uploadedFileName).toContain(heroKuAppTestData.fileUpload.uploadedFileName);
    });

    test('@HorizontalSlider - Horizontal Slider-Move and Validate', async ({ page }) => {
        const herokuApp = new HerokuAppPage(page);
        await herokuApp.navigateTo('/horizontal_slider');

        const sliderValue = await herokuApp.moveSliderTo(heroKuAppTestData.horizontalSlider.targetValue);
        expect(sliderValue).toBe(heroKuAppTestData.horizontalSlider.targetValue);
    });

    test('@Hovers - Hovers-Hover Over Image', async ({ page }) => {
        const herokuApp = new HerokuAppPage(page);
        await herokuApp.navigateTo('/hovers');

        const captionText = await herokuApp.hoverOverImage(1);
        expect(captionText).toContain('name: user2');
    });

    test('@InfiniteScroll - Infinite Scroll-Scroll Until More Content Loads', async ({ page }) => {
        const herokuApp = new HerokuAppPage(page);
        await herokuApp.navigateTo('/infinite_scroll');

        const countBefore = await herokuApp.scrollUntilVisible();
        const countAfter = await herokuApp.scrollUntilVisible();
        expect(countAfter).toBeGreaterThan(countBefore);
    });
})

test.describe('@UIFour - Validating multiple solutions in HeroKuApp', () => {
    test('@Input - Inputs-Enter and Validate Number', async ({ page }) => {
        const herokuApp = new HerokuAppPage(page);
        await herokuApp.navigateTo('/inputs');

        const enteredValue = await herokuApp.enterNumber(heroKuAppTestData.inputs.testNumber);
        expect(enteredValue).toBe(heroKuAppTestData.inputs.testNumber);
    });

    test('@JSAlerts - JavaScript Alerts-Handle Alert', async ({ page }) => {
        const herokuApp = new HerokuAppPage(page);
        await herokuApp.navigateTo('/javascript_alerts');

        const alertResult = await herokuApp.triggerAlert();
        expect(alertResult).toContain('You successfully clicked an alert');
    });

    test('@KeyPress - Key Presses-Simulate Key Press', async ({ page }) => {
        const herokuApp = new HerokuAppPage(page);
        await herokuApp.navigateTo('/key_presses');

        const keyPressResult = await herokuApp.simulateKeyPress(heroKuAppTestData.keyPresses.testKey);
        expect(keyPressResult).toContain(heroKuAppTestData.keyPresses.expectedKey);
    });

    test('@StatusCode - Status Codes-Validate Status Code Pages', async ({ page }) => {
        const herokuApp = new HerokuAppPage(page);
        await herokuApp.navigateTo('/status_codes');

        const statusCodeMessage = await herokuApp.checkStatusCode(0);
        expect(statusCodeMessage).toContain(heroKuAppTestData.statusCodes.successMessage[200]);
    });
})