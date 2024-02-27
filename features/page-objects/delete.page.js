import { Page } from './page.js';
import { browser } from '@wdio/globals';

class DeletePage extends Page {
    get cartQuantityInput() { return $('#product_1_2_0_0 .grey');}
    get plusButton(){ return $('.icon-plus');}
    get minusButton(){ return $('.icon-minus');}

}
export default new DeletePage();