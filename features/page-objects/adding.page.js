import { Page } from './page.js';
import { browser } from '@wdio/globals';

class AddingPage extends Page {

    get cartQuantity() { return $('input.cart_quantity_input');}
    get plusButton() {return $('.icon-plus');}
    // get flushMessage() {return $('.layer_cart_product h2');}
  

}
export default new AddingPage();