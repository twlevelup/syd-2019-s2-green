const HomePage = require('./pages/homePage/homePage');
const ContactsPage = require('./pages/contactsPage/contactsPage');
const TeamPage = require('./pages/teamPage/teamPage');
const FourOhFour = require('./pages/404Page/404Page');
const ProductViewPage = require ('./pages/productViewPage/productViewPage')
const medium = require("./pages/productPage/medium");
// const mediumProducts = require("./pages/Product/")
const Demo = require('./pages/demoPage/demoPage');

module.exports = {
  '/': HomePage,
  'contacts': ContactsPage,
  'team': TeamPage,
  '404': FourOhFour,
  'product-view': ProductViewPage,
  "medium": medium,
  // "medium_products": mediumProducts
  'demo': Demo,
};
