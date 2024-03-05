import { Given, When, Then } from "@wdio/cucumber-framework";
import { browser, $ } from "@wdio/globals";
import page from "../page-objects/page.js";

// REVIEW: Is this step really related to registration as the file name suggests?
When('I press on Women button', async function() {
    await page.womenButton.click();
});

When('I press on "Sleve T-shirt"', async function() {
    await page.sleeveTshirt.click();
});

When('I choose blue color', async function() {
    await page.blueColorButton.click();
    // REVIEW: Why would you need to refresh the page. That's not something a user would do.
    await browser.refresh();
    await browser.debug();
});


When('I press add to cart', async function() {
    await page.addToCartButton.click();
    // REVIEW: Using pause is not good.
    // There are beteer ways to wait for somehting.
    await browser.pause(1000);
    
});

When('Pop-up appears I press "Proceed to checkout"', async function() {
    await page.proceedToCheckout.click();
    await browser.pause(20);
});

Then('I press Proceed to checkout', async function() {
    await page.proceedToCheckoutNextButton.click();
});

When('I {word} see Sign In buttons appears', async function(visibility) {
    if (visibility === "do") {
        await expect(page.signIn).toBeDisplayed();
    } else {
        throw Error(`Visiblity ${visibility} not supported`);
    }
});