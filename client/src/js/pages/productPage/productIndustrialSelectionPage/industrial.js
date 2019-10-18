const BasePage = require('watch-framework').BasePage;

class IndustrialPage extends BasePage {
  template = require('./industrial.hbs');

  faceButtonEvent() {
      this.navigate('product-view');
  }

  leftButtonEvent() {
    this.navigate('medium')
  }
}

module.exports = IndustrialPage;

