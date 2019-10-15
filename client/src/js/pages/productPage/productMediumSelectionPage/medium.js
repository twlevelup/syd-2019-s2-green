const BasePage = require('watch-framework').BasePage;

class MediumPage extends BasePage {
  template = require('./medium.hbs');

  faceButtonEvent() {
      this.navigate('product-view');
  }

  rightButtonEvent() {
    this.navigate('industrial');
  }

  leftButtonEvent() {
    this.navigate('small');
  }

}

module.exports = MediumPage;

