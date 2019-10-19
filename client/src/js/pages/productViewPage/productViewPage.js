const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;
const lunchbox = require('../../../images/productViewPictures/lunchbox.png');
const shopButton= require('../../../images/productViewPictures/shopButton.png');
const ProductViewPageUpdater = require('./productViewPageUpdater');

class ProductViewPage extends BasePage {
  template = require("./productViewPage.hbs");
  lunchbox = lunchbox;
  shopButton = shopButton;

  pageWillLoad() {
    this.allProductPages = [
      {
        itemName: "Lunch Box",
        itemCost: "$50",
        itemDimensions: "205mm x 110mm",
        itemMisc: "100 units, material, weight",
        itemImg: lunchbox
      },
      {
        itemName: "Dinner for 2 Box",
        itemCost: "$50",
        itemDimensions: "205mm x 110mm",
        itemMisc: "100 units, material, weight",
        itemImg: lunchbox
      },
      {
        itemName: "Halal Snack Pack",
        itemCost: "$50",
        itemDimensions: "205mm x 110mm",
        itemMisc: "100 units, material, weight",
        itemImg: lunchbox
      },
    ];

    this.pageIndex = 0;
    this.page = this.allProductPages[this.pageIndex];

  }

  rightButtonEvent() {
    if (this.pageIndex < this.allProductPages.length - 1) {
      this.pageIndex++;
      this.page = this.allProductPages[this.pageIndex];

      ProductViewPageUpdater.updatePage(document, this.page);
    }
  }

  leftButtonEvent() {
    if (this.pageIndex > 0) {
      this.pageIndex--;
      this.page = this.allProductPages[this.pageIndex];

      ProductViewPageUpdater.updatePage(document, this.page);
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
