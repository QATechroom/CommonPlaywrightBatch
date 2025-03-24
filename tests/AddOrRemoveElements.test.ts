import { test,  expect } from "@playwright/test";


test.skip('Add/Remove elements validation', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/')

    // Click on 'Add/Remove Elements' link
    await page.click(`//a[normalize-space()='Add/Remove Elements']`);

    // Click on 'Add Element' button
    await page.click(`button[onclick="addElement()"]`);

    // Verify 'Delete' button is visible, if it is visible, click on 'Delete' button
    const deletebtn = await page.locator(`button[onclick="deleteElement()"]`)
    await expect(deletebtn).toBeVisible();
    await deletebtn.click();
})