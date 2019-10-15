const BasePage = require('watch-framework').BasePage;

class SmallPage extends BasePage {
  template = require('./small.hbs');

  faceButtonEvent() {
      this.navigate('product-view');
  }

  rightButtonEvent() {
    this.navigate('medium')
  }

}

module.exports = SmallPage;

