const MediumPage = require('./medium');


describe('MediumPage', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#render', () => {
    it('should render the size selection page menu', () => {
      const page = new MediumPage();
      expect(page.render()).toContain("Medium");
    });
  });

  // describe(
  //   'faceButton.event', () => {
  //     it('goes to medium products list', () => {
  //       const page = new MediumPage();
  //       spyOn(page, 'navigate');
  //       page.faceButtonEvent()
  //       expect(page.navigate).toHaveBeenCalledWith('medium_products')
  //     })
  //   }
  // )


});
