import { Page } from './page.js';
import { browser } from '@wdio/globals';

class AddingPage extends Page {
    get cartQuantity() { return $('.ajax_cart_quantity');}
    // get searchButton() { return $('#search_query_top');}
    // get inputWord() { return $('#center_column .product-name');}

    

}
export default new AddingPage();