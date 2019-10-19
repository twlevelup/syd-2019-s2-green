const BasePage = require('watch-framework').BasePage;
const mediumLogo = require('../../../../images/viewProductTypePictures/medium_product_icon.png');

class MediumPage extends BasePage {
  template = require('./medium.hbs');

    mediumLogo = mediumLogo;

  faceButtonEvent() {
      this.navigate('product-view');
  }

  rightButtonEvent() {
    this.navigate('industrial');
  }

  leftButtonEvent() {
    this.navigate('small');
  }

  bottomButtonEvent() {
    this.navigate('/');
  }
}

module.exports = MediumPage;

