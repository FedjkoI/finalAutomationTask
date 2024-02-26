import { Given, When, Then } from "@wdio/cucumber-framework";
import { browser, $ } from "@wdio/globals";
import page from "../page-objects/page.js";
import searchPage from "../page-objects/search.page.js";

When('I enter {string} into search field', async function(word) {
    // await expect(searchPage.wordInput)
        // .toHaveText(expect.stringContaining(this.word));
        await searchPage.wordInput.setValue(word);
});

When('I click search button', async function() {
    await searchPage.searchButton.click();
});

// Then('Page appears only with products containing text {string}', async function(word){
//     const inputWord = await searchPage.inputWord;
//     this.inputWordSearch = await inputWord.getText();
//     await expect(searchPage.inputWord)
//     .toHaveText(expect.stringContaining(this.inputWordSearch));
//         const element = searchPage.inputWord($('#center_column .product-name'));
//         const elementText = element.textContent.trim();

//     Then('Page appears only with products containing text {string}', async function(word){

//         if (elementText.includes(word)) {
//             await searchPage.inputWord.toBeDisplayed();
//         } else {
//             throw Error(` ${word} not in the stock`);
//         }
        


// Get the element using the selector
// Then('Page appears only with products containing text {string}', async function(word) {
//     if (!Object.keys(inputWord).includes(word)) {
//         throw Error(` ${word} is not in the stock`);
//     }

//     searchPage.inputWord() = ('#center_column .product-name');
//     });

// const element = await $('#center_column .product-name'); // Replace 'your-selector' with the actual CSS selector
// const idAttributeValue = await element.getAttribute('id');
// console.log('ID attribute value:', idAttributeValue);