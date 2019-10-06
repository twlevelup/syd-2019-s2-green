const HomePage = require('./homePage');
const StorageHub = require('watch-framework').StorageHub;
const AudioHub = require('watch-framework').AudioHub;

describe('HomePage', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#pageWillLoad', () => {
    it('should set contacts data on page load', () => {
      spyOn(StorageHub, 'setData')
      const page = new HomePage();
      page.pageWillLoad();
      expect(StorageHub.setData).toBeCalledWith('contacts', expect.any(Array));
    })
  })

  describe('#render', () => {
    it('should render my page correctly', () => {
      const page = new HomePage();
      expect(page.render()).toContain("Product");
    });
  });

  describe('#leftButtonEvent', () => {
    it('goes to 404 page', () => {
      const page = new HomePage();
      spyOn(page, 'navigate');

      page.leftButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('404');
    });
  });

  describe('#rightButtonEvent', () => {
    it('goes to product page', () => {
      const page = new HomePage();
      spyOn(page, 'navigate');

      page.rightButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('product');
    });
  });

  describe('#bottomButtonEvent', () => {
    it('goes to product-view page', () => {
      const page = new HomePage();
      spyOn(page, 'navigate');

      page.bottomButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('product-view');
    });
  });

  describe('#topButtonEvent', () => {
    it('goes to size selection', () => {
      const page = new HomePage();
      spyOn(page, 'navigate');

      page.topButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('medium');
    });
  });

});
