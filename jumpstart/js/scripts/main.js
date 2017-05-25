////// Prototypal classes

function Person(name, age, last_name) {
  this.name = name;
  this.age = age;
  this.last_name = last_name
}

Person.prototype.sayHello = function() {
  alert("helo i am " + this.name + ".");
};

Person.prototype.fullName = function() {
  alert("my full name is " + this.name + this.last_name)
};

Person.prototype.fiveYearsOlder = function() {
  alert("in 5 years I wil have " + (this.age + 5));
};

var joe = new Person("Joe", 15, "byden");
joe.sayHello();
joe.fullName();
joe.fiveYearsOlder();

// inheritance

function Programmer(name, language) {
  this.name = name;
  this.language = language;
}

Programmer.prototype = new Person();

Programmer.prototype.specialization = function() {
  alert("I can write code in " + this.language);
}

var jane = new Programmer("Jane", "Javascript");
jane.sayHello();
jane.specialization();

// chart class

function Chart(context) {
  this.context = context;
}

Chart.prototype = {
  rectangle: function(color, x, y, width, height) {
    this.context.fillStyle = color;
    this.context.fillRect(x, y, width, height);
  }
}

// var context = document.getElementById('drawing').getContext('2d');
// var chart = new Chart(context);
// chart.rectangle("red", 0, 0, 300, 300);

// bar chart class

function BarChart(context, data) {
  this.context = context;
  this.data = data;
}
// JSON
BarChart.prototype = { // this is like ruby hash (object)
  rectangle: Chart.prototype.rectangle, // elements of objects divided by comma
  bar: function(x, y) {
    this.rectangle("rgb(64, 64, 128)", 0, x*12, y*10, 10);
  },
  draw: function() {
    this.data.forEach(function (datum, index) {
      this.bar(index, datum);
    }.bind(this));
  }
}

var context = document.getElementById('drawing').getContext('2d');
var barChart = new BarChart(context, [4, 8, 12, 1, 7]);
barChart.draw();

// line chart

function LineChart(context, data) {
  this.context = context;
  this.data = data;
}



//// learning canvas

// var canvas = document.getElementById("drawing");
// var context = canvas.getContext("2d");
// var data = [0.125, 0.225, 0.35, 0.3];
// var progress = 0;

function rectangle(color, x, y, width, height) {
  context.fillStyle = color;
  context.fillRect(x, y, width,height);
}

function text(message, color, x, y) {
  context.fillStyle = color;
  context.font = "30px sans-serif";
  context.fillText(message, x, y);
}

function bar(x, y) {
  rectangle("rgb(64,64,128)", 0, x*12, y*10, 11); 
}

function pie(progress, value) {
  context.beginPath();
  context.fillStyle = "hsl("+(progress * 360)+", 80%, 60%)";
  context.moveTo(150, 150);
  context.arc(150, 150,100, progress*2*Math.PI, (progress+value)*2*Math.PI);
  context.fill();
}

function line(x, y) {
  context.strokeStyle = "hsl(40, 80%, 60%)";
  context.lineWidth = 1.5;
  context.lineTo(x*50, 100-y*10);
  context.stroke();
}

var data = [4,7,2,5,9];

// data.forEach(function (datum, index) {
//   line(index,datum);
// })

////// drawing rectangles
// rectangle("#33aa33", 0, 0, 300, 200);
// rectangle("#994433", 100, 100, 300, 200);
// text("Hello world", "FF0000", 50, 50);

////// drawing bars
// bar(0, 10);
// bar(1, 12);
// bar(2, 6);
// bar(3, 9)

// data.forEach(function (datum, index) {
//   bar(index, datum);
// })

////// drawing pies
// data.forEach(function (datum) {
//   pie(progress, datum);
//   progress += datum;
// });

// ####################### Learning javascript

document.getElementById('output').innerHTML = "Hello <strong> there </strong>";

function output(message) {
  document.getElementById('output').innerHTML += message + '<br>';
}

// output("Hello frind");
// output("Helo enemy");

var data = [4, 6, 2, 7];

data.forEach(function(datum) {
  var number = datum
  var message = "";
  while (number > 0) {
    message += "|";
    number--;
  }
  
  output(message);
});

