import { Given, When, Then } from "@wdio/cucumber-framework";
import { browser, $ } from "@wdio/globals";
import page from "../page-objects/page.js";


When('I press on Women button', async function() {
    await page.womenButton.click();
});

When('I press on "Sleve T-shirt"', async function() {
    await page.sleeveTshirt.click();
});

When('I choose blue color', async function() {
    await page.blueColorButton.click();
});
