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
    await browser.refresh();
});


When('I press add to cart', async function() {
    await page.addToCartButton.click();
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