const SmallPage = require('./small');


describe('SmallPage', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#navigate', () => {
    it('should navigate to the productSelectionPage', () => {
      const page = new SmallPage();
      spyOn(page, 'navigate');
      page.faceButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('product-view');
    });
  });

  describe('#navigate', () => {
    it('should navigate to the medium page', () => {
      const page = new SmallPage();
      spyOn(page, 'navigate');
      page.rightButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('medium');
    });
  });

  describe('#navigate', () => {
    it('should navigate to the home page', () => {
      const page = new SmallPage();
      spyOn(page, 'navigate');
      page.bottomButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });
});
