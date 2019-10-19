const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;
const industrialLogo = require('../../../../images/viewProductTypePictures/industrial_product_icon.png');

class IndustrialPage extends BasePage {
  template = require('./industrial.hbs');

  industrialLogo = industrialLogo;

  faceButtonEvent() {
      this.navigate('product-view');
  }

  leftButtonEvent() {
    this.navigate('medium');
  }

  bottomButtonEvent() {
    this.navigate('/');
  }
  topButtonEvent() {
    this.navigate("/");
  }
}

module.exports = IndustrialPage;

