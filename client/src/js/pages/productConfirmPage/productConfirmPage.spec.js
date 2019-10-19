
const HomePage = require('./homePage');
const ProductConfirmPage  =require('./productConfirmPage');
const StorageHub = require('watch-framework').StorageHub;

describe('productConfirmPage', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#bottomButtonEvent', () => {
    it('should redirect to home page when you click bottom button on product confirm page', () => {
      const page = new ProductConfirmPage();
      spyOn(page, 'navigate');

      page.bottomButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });
