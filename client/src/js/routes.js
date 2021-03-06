const HomePage = require('./pages/homePage/homePage');
const ContactsPage = require('./pages/contactsPage/contactsPage');
const TeamPage = require('./pages/teamPage/teamPage');
const FourOhFour = require('./pages/404Page/404Page');
const ProductViewPage = require ('./pages/productViewPage/productViewPage');
const medium = require("./pages/productPage/productMediumSelectionPage/medium");
const small = require("./pages/productPage/productSmallSelectionPage/small");
const industrial = require("./pages/productPage/productIndustrialSelectionPage/industrial");
// const mediumProducts = require("./pages/Product/")
const Demo = require('./pages/demoPage/demoPage');
const ProductInfoPage = require('./pages/productInfoPage/mediumProductInfo/mediumPlaceHolderOne/productInfoPageMediumOne');
const ProductConfirmPage = require('./pages/productConfirmPage/productConfirmPage');
module.exports = {
  '/': HomePage,
  'contacts': ContactsPage,
  'team': TeamPage,
  '404': FourOhFour,
  'product-view': ProductViewPage,
  "medium": medium,
  "small": small,
  "industrial": industrial,
  // "medium_products": mediumProducts,
  'demo': Demo,
  'product-info-medium-one': ProductInfoPage,
  'product-confirm': ProductConfirmPage
};
