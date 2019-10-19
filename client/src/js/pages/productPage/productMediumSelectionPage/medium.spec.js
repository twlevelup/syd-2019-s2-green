const MediumPage = require('./medium');


describe('MediumPage', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#navigate', () => {
    it('should navigate to the productSelectionPage', () => {
      const page = new MediumPage();
      spyOn(page, 'navigate');
      page.faceButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('product-view');
    });
  });

  describe('#navigate', () => {
    it('should navigate to the industrial page', () => {
      const page = new MediumPage();
      spyOn(page, 'navigate');
      page.rightButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('industrial');
    });
  });

  describe('#navigate', () => {
    it('should navigate to the small page', () => {
      const page = new MediumPage();
      spyOn(page, 'navigate');
      page.leftButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('small');
    });
  });

  describe('#navigate', () => {
    it('should navigate to the home page', () => {
      const page = new MediumPage();
      spyOn(page, 'navigate');
      page.bottomButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });
});
