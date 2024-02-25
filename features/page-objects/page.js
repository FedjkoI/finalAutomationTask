export class Page {

    get womenButton() { return $('li:nth-child(1) .sf-with-ul'); }
    get sleeveTshirt() { return $('.first-item-of-mobile-line:nth-child(1) .product-name');}
    get blueColorButton() { return $('#color_14');}
    get addToCartButton() { return $('#add_to_cart span');}
    get proceedToCheckout() { return $('.button-medium span');}
    get proceedToCheckoutNextButton() { return $('#center_column .right');}
    // get signIn() { return $('#SubmitLogin span'); }
  

   
    

    async open() {
        await browser.navigateTo(`http://www.automationpractice.pl/index.php`);
    }
}

export default new Page();