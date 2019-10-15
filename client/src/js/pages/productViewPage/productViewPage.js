const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;
const lunchbox = require('../../../images/productViewPictures/lunchbox.png');
const shopButton= require('../../../images/productViewPictures/shopButton.png');

class ProductViewPage extends BasePage {
  template = require("./productViewPage.hbs");
  lunchbox = lunchbox;
  shopButton = shopButton;

  allProductPages = [
    {
      itemName: "Lunch Box",
      itemCost: "$50",
      itemDimensions: "205mm x 110mm",
      itemMisc: "100 units, material, weight",
      itemImg: lunchbox
    }
  ];
  currPage = 0;

  rightButtonEvent() {
    if (currPage < this.allProductPages.length()) {
      currPage++;
    }
  }

  leftButtonEvent() {
    if (currPage >= 0) {
      currPage--;
    }
  }

  topButtonEvent() {
  }

  bottomButtonEvent() {
    this.navigate('/');
  }

  faceButtonEvent() {
    this.navigate('product-info-medium-one');
  }
}

module.exports = ProductViewPage;
