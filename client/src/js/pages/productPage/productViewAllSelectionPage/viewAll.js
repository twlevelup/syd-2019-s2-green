const BasePage = require('watch-framework').BasePage;

class ViewAllPage extends BasePage {
  template = require('./viewAll.hbs');

  faceButtonEvent() {
      this.navigate('product-view');
  }

}

module.exports = ViewAllPage;

