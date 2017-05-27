var JSTasker = {
  updateTaskCounter: function() { // function as an object, called like this: JSTasker.updateTaskCounter
    var taskCount = $('div#tasks ul').children().not('li.completed').length; // always use length, not size()
    $('span#task_counter').text(taskCount);
  },
  sortTasks: function() {
    var taskList = $('div#tasks ul');
    var allCompleted = taskList.children('li.completed');
    allCompleted.detach();
    allCompleted.appendTo(taskList);
  },
  updatePage: function (){
    this.updateTaskCounter(); // 'this' here referes to JSTasker
    this.sortTasks();
  }
};


// ############### moved to JSTasker ##############
// function updateTaskCounter() {
//   var taskCount = $('div#tasks ul').children().not('li.completed').length; // always use length, not size()
//   $('span#task_counter').text(taskCount);
//   sortTasks();
// }

// function sortTasks() {
//   var taskList = $('div#tasks ul');
//   var allCompleted = taskList.children('li.completed');
//   allCompleted.detach();
//   allCompleted.appendTo(taskList);
// }
// ################################################

$(function() {
  
  var inputField = $('input#task_text');
  
  $('form#add_task').on('submit', function(event){
    event.preventDefault();
    
    var taskText = inputField.val();
    var listItem = "<li>" + taskText + "</li>";
    $('ul').append(listItem);
    $(inputField).val(null);
    JSTasker.updatePage();
    
    $('li').on('click', function() { // strikethrough cpmpleted tasks
      $(this).hide().show(100);
      $(this).toggleClass('completed');
      JSTasker.updatePage();
    });
    
  });
  
  inputField.focus();
  
});

