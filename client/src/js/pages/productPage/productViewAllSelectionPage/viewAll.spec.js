const ViewAllPage = require('./viewAll');

describe('ViewAllPage', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#navigate', () => {
    it('should navigate to the productSelectionPage', () => {
      const page = new ViewAllPage();
      spyOn(page, 'navigate');
      page.faceButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('product-view');
    });
  });

  describe('#navigate', () => {
    it('should navigate to the home', () => {
      const page = new ViewAllPage();
      spyOn(page, 'navigate');
      page.bottomButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });
});
