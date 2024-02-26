import { Given, When, Then } from "@wdio/cucumber-framework";
import { browser, $ } from "@wdio/globals";
import page from "../page-objects/page.js";
import addingPage from "../page-objects/adding.page.js";


When('Cart quantity become: 1 Product', async function() {
    if (visibility === "do") {
        await expect(addingPage.cartQuantity).toBeDisplayed();
    } else if (visibility === "don't") {
        await expect(addingPage.cartQuantity).not.toBeDisplayed();
    } else {
        throw Error(`Visiblity ${visibility} not supported`);
    }
});
