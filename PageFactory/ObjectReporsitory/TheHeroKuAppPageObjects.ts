import { Locator, Page } from "@playwright/test";


export class TheHerokuappPageObjects {
    readonly page: Page;

    // Add or Remove Elements
    readonly addOrRemoveElementslink: Locator;
    readonly addElementbtn: Locator;
    readonly deletebtn: Locator;

    // Challenging DOM
    readonly challengingDOM: Locator;
    readonly editbtn: Locator;
    readonly deleteDOMbtn: Locator;
    readonly sitColumnCell: Locator;
    
    // Drag and Drop
    readonly dragAndDrop: Locator;
    readonly sourceElement: Locator;
    readonly targetElement: Locator;
    
    // Dropdown
    readonly dropdown: Locator;
    readonly dropdownSelect: Locator;
    static locator: any;

    // Dynamic Controls
    readonly dynamicControlsLink: Locator;
    readonly checkbox: Locator;
    readonly removeAddButton: Locator;
    readonly checkboxMessage: Locator;
    readonly inputField: Locator;
    readonly enableDisableButton: Locator;
    readonly inputMessage: Locator;

    // Dynamic Loading
    readonly dynamicLoadingLink: Locator;
    readonly startButton: Locator;
    readonly loadingIndicator: Locator;
    readonly finishText: Locator;

    // File Upload
    readonly fileUploadLink: Locator;
    readonly fileInput: Locator;
    readonly uploadButton: Locator;
    readonly uploadedFiles: Locator;

    // Horizontal Slider
    readonly sliderLink: Locator;
    readonly slider: Locator;
    readonly sliderValue: Locator;

    // Hovers
    readonly hoversLink: Locator;
    readonly hoverImages: Locator;
    readonly hoverCaptions: Locator;

    // Infinite Scroll
    readonly infiniteScrollLink: Locator;
    readonly infiniteScrollContainer: Locator;

    // Inputs
    readonly inputsLink: Locator;
    readonly inputFieldO: Locator;

    // JavaScript Alerts
    readonly jsAlertsLink: Locator;
    readonly alertButton: Locator;
    readonly alertResult: Locator;

    // Key Presses
    readonly keyPressesLink: Locator;
    readonly keyInputField: Locator;
    readonly keyPressResult: Locator;

    // Status Codes
    readonly statusCodeLinks: Locator;
    readonly statusCodeMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        // Add or Remove Elements
        this.addOrRemoveElementslink = page.locator(`//a[normalize-space()='Add/Remove Elements']`);
        this.addElementbtn = page.locator(`button[onclick='addElement()']`);
        this.deletebtn = page.locator(`button[onclick='deleteElement()']`);

        // Challenging DOM
        this.challengingDOM = page.locator(`//a[normalize-space()='Challenging DOM']`);
        this.editbtn = page.locator(`table tbody tr td:last-child a:text("edit")`);
        this.deleteDOMbtn = page.locator(`table tbody tr td:last-child a:text("delete")`);
        this.sitColumnCell = page.locator(`table tbody tr td:nth-child(4)`);

        // Drag and Drop
        this.dragAndDrop = page.locator(`//a[normalize-space()='Drag and Drop']`);
        this.sourceElement = page.locator(`//div[@id='column-a']`);
        this.targetElement = page.locator(`//div[@id='column-b']`);

        // Dropdown
        this.dropdown = page.locator(`//a[normalize-space()='Dropdown']`);
        this.dropdownSelect = page.locator(`#dropdown`);
       
        // Dynamic Controls
        this.dynamicControlsLink = page.locator('a[href="/dynamic_controls"]');
        this.checkbox = page.locator('#checkbox');
        this.removeAddButton = page.locator('#checkbox-example button');
        this.checkboxMessage = page.locator('#message');
        this.inputField = page.locator('#input-example input');
        this.enableDisableButton = page.locator('#input-example button');
        this.inputMessage = page.locator('#message');

        // Dynamic Loading
        this.dynamicLoadingLink = page.locator('a[href="/dynamic_loading/1"]');
        this.startButton = page.locator('#start button');
        this.loadingIndicator = page.locator('#loading');
        this.finishText = page.locator('#finish');

        // File Upload
        this.fileUploadLink = page.locator('a[href="/upload"]');
        this.fileInput = page.locator('#file-upload');
        this.uploadButton = page.locator('#file-submit');
        this.uploadedFiles = page.locator('#uploaded-files');

        // Horizontal Slider
        this.sliderLink = page.locator('a[href="/horizontal_slider"]');
        this.slider = page.locator('input[type="range"]');
        this.sliderValue = page.locator('#range');

        // Hovers
        this.hoversLink = page.locator('a[href="/hovers"]');
        this.hoverImages = page.locator('.figure img');
        this.hoverCaptions = page.locator('.figcaption h5');

        // Infinite Scroll
        this.infiniteScrollLink = page.locator('a[href="/infinite_scroll"]');
        this.infiniteScrollContainer = page.locator('.jscroll-added');

        // Inputs
        this.inputsLink = page.locator('a[href="/inputs"]');
        this.inputFieldO = page.locator('input[type="number"]');

        // JavaScript Alerts
        this.jsAlertsLink = page.locator('a[href="/javascript_alerts"]');
        this.alertButton = page.locator('button[onclick="jsAlert()"]');
        this.alertResult = page.locator('#result');

        // Key Presses
        this.keyPressesLink = page.locator('a[href="/key_presses"]');
        this.keyInputField = page.locator('#target');
        this.keyPressResult = page.locator('#result');

        // Status Codes
        this.statusCodeLinks = page.locator('.example a');
        this.statusCodeMessage = page.locator('.example p');
    }

}