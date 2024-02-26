import { Page } from './page.js';
import { browser } from '@wdio/globals';

class AddingPage extends Page {
    // get cartQuantity() { return $('span.ajax_cart_quantity');}

    get cartQuantity() { return $('input.cart_quantity_input');}
    get plusButton() {return $('.icon-plus')}
    

}
export default new AddingPage();