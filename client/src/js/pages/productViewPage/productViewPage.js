const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;
const lunchbox = require('../../../images/productViewPictures/lunchbox.png');
const shopButton= require('../../../images/productViewPictures/shopButton.png');

class ProductViewPage extends BasePage {
  template = require("./productViewPage.hbs");
  lunchbox = lunchbox;
  shopButton = shopButton;

  rightButtonEvent() {
  }

  leftButtonEvent() {
  }

  topButtonEvent() {
  }

  bottomButtonEvent() {
    this.navigate('/');
  }
}

module.exports = ProductViewPage;
