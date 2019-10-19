const BasePage = require('watch-framework').BasePage;

class ProductInfoPage extends BasePage {
  template = require('./productInfoPageMediumOne.hbs');

  bottomButtonEvent() {
    this.navigate("/");
  }

  faceButtonEvent(){
    this.navigate('product-confirm');
  }
}

module.exports = ProductInfoPage;
