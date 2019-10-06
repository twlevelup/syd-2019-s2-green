const routes = require('./routes');

describe('routes', () => {

  it('all routes should exist', () => {
    expect(routes['/']).toBeDefined();
    expect(routes['contacts']).toBeDefined();
    expect(routes['team']).toBeDefined();
    expect(routes['404']).toBeDefined();
    expect(routes['product-view']).toBeDefined();
  });

});
