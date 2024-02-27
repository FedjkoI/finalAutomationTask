import { Given, When, Then } from "@wdio/cucumber-framework";
import { browser, $ } from "@wdio/globals";
import page from "../page-objects/page.js";
import deletePage from "../page-objects/delete.page.js";
import addingPage from "../page-objects/adding.page.js";


When('I add {string} quantity to the Cart', async function(number) {
    await deletePage.cartQuantityInput.setValue(number);

});


When('I press + button', async function() {
    await deletePage.plusButton.click();

});


Then('Cart will contains 6 Products', async function() {
    let quantity = '6';
    let cartQuantity = await addingPage.cartQuantity; 
    let quantityOfPurchase = await cartQuantity.getAttribute('6');
if (quantityOfPurchase == quantity){
    console.log('The nomber match!');
}else{
    console.log('The number do not match. Element text is:', quantityOfPurchase);}
});


When('I press "-" button to delete 1 quantity', async function() {
    await deletePage.minusButton.click();

});


Then('Cart will contain 5 Products', async function() {
    let quantity = '5';
    let cartQuantity = await addingPage.cartQuantity; 
    let quantityOfPurchase = await cartQuantity.getAttribute('5');
if (quantityOfPurchase == quantity){
    console.log('The nomber match!');
}else{
    console.log('The number do not match. Element text is:', quantityOfPurchase);
}
});

