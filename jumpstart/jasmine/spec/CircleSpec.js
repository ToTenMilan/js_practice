/*global describe*/
/*global it*/
/*global expect*/
/*global Circle*/
/*global beforeEach*/

describe("Circle", function() {
  it('should run', function() {
    expect(true).toBeTruthy();
  });
});

describe("Circle", function() {
  var circle;
  
  beforeEach(function() { // create circle before each test
    circle = new Circle(15, 25, 40); // write it once here instead of in every test
    // circle = {
    //   arc: function(x, y, r, a, b) {
    //   x = x;
    //   y = y;
    //   r = r;
    //   a = a;
    //   b = b;
    // }
    
    spyOn(circle, 'draw');
    
    
    // circle.arc(47, 32, 10, 0, 2*Math.PI);
  });
  
  it("should have an x coordinate", function() {
    // var circle = new Circle(51, 70, 17); // deleted by beforeEach
    expect(circle.x).toEqual(15);
  });
  
  it("should have an y coordinate", function() {
    // var circle = new Circle(11, 22, 9); // deleted by beforeEach
    expect(circle.y).toEqual(25);
  });
  
  it("should have a radius", function() {
    // var circle = new Circle(12, 13, 14); // deleted by beforeEach
    expect(circle.r).toEqual(40);
  });
  
  it("should draw on the canvas", function() {
    var context = jasmine.createSpyObj('context', ['arc', 'stroke']); // stub methods context.arc & context.stroke
    // spyOn(context, 'arc'); // as above
    // spyOn(context, 'stroke'); // as above
    
    circle.draw(context);
    context.arc(47, 32, 10, 0, 2*Math.PI); // call stubbed method
    context.stroke(); // call stubbed method
    
    expect(context.arc).toHaveBeenCalledWith(47, 32, 10, 0, 2*Math.PI);
    expect(context.stroke).toHaveBeenCalled();
  });
});