/*global describe*/
/*global it*/
/*global expect*/
/*global Circle*/
/*global beforeEach*/
/*global Circles*/
describe("Circles", function() {
  it("should fetch from a server", function() {
    // create callback to fetch in line 23 - Circles.fetch(callback);
    var callback = jasmine.createSpy('callback'); 
    
    // setup the fake data for the response
    var data = [
      {x: 0, y: 0, radius: 5},
      {x: 10, y: 10, radius: 10}
    ];
    // setup a spy to return object when `done`
    spyOn($, 'ajax').and.returnValue({ // `.andReturn` changed to `.and.returnValue` in jasmine 2.0
      done:function(callback) {
        callback(data);
      }
    });
    
    Circles.fetch(callback); // left as an exercise for later
    // check whether `$.ajax` was called with proper url
    expect($.ajax).toHaveBeenCalledWith('/circles');
    
    var circles = callback.mostRecentCall.args[0];
    expect(circles.length).toEqual(data.length);
    // check circle with index 0 from data var
    expect(circles[0].x).toEqual(data[0].x);
    expect(circles[0].y).toEqual(data[0].y);
    expect(circles[0].radius).toEqual(data[0].radius);
    // check circle with index 1 from data var
    expect(circles[1].x).toEqual(data[1].x);
    expect(circles[1].y).toEqual(data[1].y);
    expect(circles[1].radius).toEqual(data[1].radius);
    
  });
});

// exercise left in line 24
// sinon.js left for later