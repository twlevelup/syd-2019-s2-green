const BasePage = require('watch-framework').BasePage;

class ProductInfoPage extends BasePage {
  template = require('./productInfoPage.hbs');

  bottomButtonEvent() {
    this.navigate("/");
  }
}

module.exports = ProductInfoPage;
