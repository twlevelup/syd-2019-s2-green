const BasePage = require('watch-framework').BasePage;
const smallLogo = require('../../../../images/viewProductTypePictures/small_product_icon.png');

class SmallPage extends BasePage {
  template = require('./small.hbs');

  smallLogo = smallLogo;

  faceButtonEvent() {
      this.navigate('product-view');
  }

  rightButtonEvent() {
    this.navigate('medium')
  }

  bottomButtonEvent() {
    this.navigate('/');
  }

}

module.exports = SmallPage;

