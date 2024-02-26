import { Page } from './page.js';
import { browser } from '@wdio/globals';



class SearchPage extends Page {
    get wordInput() { return $('#search_query_top');}
    get searchButton() { return $('#search_query_top');}
    get inputWord() { return $('#center_column .product-name');}

    

}
export default new SearchPage();


