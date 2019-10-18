const ViewAllPage = require('./viewAll');

describe('ViewAllPage', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#render', () => {
    it('should render the size selection page menu', () => {
      const page = new ViewAllPage();
      expect(page.render()).toContain("ViewAll");
    });
  });

  describe('#navigate', () => {
    it('should navigate to the productSelectionPage', () => {
      const page = new ViewAllPage();
      spyOn(page, 'navigate');
      page.faceButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('product-view');
    });
  });
});
