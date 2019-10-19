const BasePage = require('watch-framework').BasePage;

class ProductInfoPage extends BasePage {
  template = require('./productInfoPageMediumOne.hbs');

  topButtonEvent() {
    this.navigate("product-view");
  }
  
  bottomButtonEvent() {
    this.navigate("/");
  }

  faceButtonEvent(){
    this.navigate('product-confirm');
  }
}

module.exports = ProductInfoPage;
