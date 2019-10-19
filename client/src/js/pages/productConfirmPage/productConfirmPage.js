const BasePage = require('watch-framework').BasePage;

class ProductConfirmPage extends BasePage {
  template = require('./productConfirmPage.hbs');

  faceButtonEvent() {
    this.navigate('medium');
  }
  bottomButtonEvent() {
    this.navigate('/');
  }
}

module.exports = ProductConfirmPage;
