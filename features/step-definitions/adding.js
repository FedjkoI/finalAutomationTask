import { Given, When, Then } from "@wdio/cucumber-framework";
import { browser, $ } from "@wdio/globals";
import page from "../page-objects/page.js";
import addingPage from "../page-objects/adding.page.js";


When('I see one Product in Cart', async function() {
    let quantity = '1';
    let cartQuantity = await addingPage.cartQuantity;
    let quantityOfPurchase = await cartQuantity.getAttribute('input.cart_quantity_input');
if (quantityOfPurchase == quantity){
    console.log('The nomber match!');
}else{
    console.log('The number do not match. Element text is:', quantityOfPurchase);
}
});


When('I press Plus button to add second product', async function() {
    await addingPage.plusButton.click();
});  


Then('Cart will increase on 1 Product as well', async function() {
    // REVIEW: This founction doesn't validate anything at all. There are no assertions (expect) or waiting for anyting (waitFor).
    let quantity = '2';
    let cartQuantity = await addingPage.cartQuantity;
    // REVIEW: "input.cart_quantity_input" in not an element attribute. 
    let quantityOfPurchase = await cartQuantity.getAttribute('input.cart_quantity_input');
    console.log(quantityOfPurchase);
    await browser.debug();
    // REIVEW: In javascript, equality is tested using "==="
if (quantityOfPurchase == quantity){
    console.log('The nomber match!');
}else{
    // REVIEW: Console log doesn't fail the test, so it always passes regardless of what you are checking
    console.log('The number do not match. Element text is:', quantityOfPurchase);
}
});



