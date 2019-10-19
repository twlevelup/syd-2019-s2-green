const BasePage = require('watch-framework').BasePage;
const smallLogo = require('../../../../images/viewProductTypePictures/small_product_logo_small.png');
const industrialLogo = require('../../../../images/viewProductTypePictures/industrial_product_logo_small.png');
const mediumLogo = require('../../../../images/viewProductTypePictures/medium_product_logo_small.png');

class ViewAllPage extends BasePage {
  template = require('./viewAll.hbs');

  smallLogo = smallLogo;
  mediumLogo = mediumLogo;
  industrialLogo = industrialLogo;


  faceButtonEvent() {
      this.navigate('product-view');
  }

  bottomButtonEvent() {
    this.navigate('/');
  }
}

module.exports = ViewAllPage;

