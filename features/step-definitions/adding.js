import { Given, When, Then } from "@wdio/cucumber-framework";
import { browser, $ } from "@wdio/globals";
import page from "../page-objects/page.js";
import addingPage from "../page-objects/adding.page.js";


When('I see one Product in Cart', async function() {
    let quantity = '1';
    let cartQuantity = await addingPage.cartQuantity;
    let quantityOfPurchase = await cartQuantity.getAttribute('1');
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
    let quantity = '2';
    let cartQuantity = await addingPage.cartQuantity;
    let quantityOfPurchase = await cartQuantity.getAttribute('2');
if (quantityOfPurchase == quantity){
    console.log('The nomber match!');
}else{
    console.log('The number do not match. Element text is:', quantityOfPurchase);
}
});

