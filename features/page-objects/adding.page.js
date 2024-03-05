import { Page } from './page.js';
import { browser } from '@wdio/globals';

// REVIEW: There are no such pages as "Adding" and "Deleting" on the site
// The page object should group some specific page or component that is visible on the website
class AddingPage extends Page {

    get cartQuantity() { return $('input.cart_quantity_input');}
    get plusButton() {return $('.icon-plus');}
    // get flushMessage() {return $('.layer_cart_product h2');}
  

}
export default new AddingPage();