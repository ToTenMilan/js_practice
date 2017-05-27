function Circle(x, y, r) {
  this.x = x;
  this.y = y;
  this.r = r;
  
  this.draw = function (context) {
    context.arc = function(x, y, r, a, b) {
      this.x = x;
      this.y = y;
      this.r = r;
      this.a = a;
      this.b = b;
    };
  
    context.stroke = function() {
      
    };
  };
}