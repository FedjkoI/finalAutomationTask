import { Given, When, Then } from "@wdio/cucumber-framework";
import { browser, $ } from "@wdio/globals";
import page from "../page-objects/page.js";
import searchPage from "../page-objects/search.page.js";

When('I enter {string} into search field', async function(word) {
    await searchPage.wordInput.setValue(word);
});

When('I click search button', async function() {
    await searchPage.searchButton.click();
});



// Then('Page appears only with products containing text "Blouse"', async function() {
// const inputWord = await searchPage.inputWord;
// const elementText = await inputWord.getText();
// const myString = 'Blouse';

// if(elementText === myString) {
//   console.log('The texts match!');
// //   await inputWord.toBeDisplayed();
// } else {
//     console.log('The texts do not match. Element text is:', elementText);
// }

// });




Then('Page appears only with products containing text {string}', async function(word) {
const inputWord = await searchPage.inputWord;
const elementText = await inputWord.getText();

if(elementText === word) {
  console.log('The texts match!');
} else {
    console.log('The texts do not match. Element text is:', elementText);
}
});