main();

function main() {
  main.taskList = $('#taskList');

  addTaskLi('task 1');
  addTaskLi('task 2');
  addTaskLi('task 3');

  main.taskList.on("click", "li", function() {
    $(this).toggleClass("taskDone");
  });

  main.taskList.on("click", '.remove', function(e) {
    e.stopPropagation(); // prevent li handler for completion toggle
    $(this).parent().slideUp(250, function() {
      $(this).remove();
    })
  });

  $('input[type="text"]').keypress(function(e){
    if(e.which === KeyboardEvent.DOM_VK_RETURN) {
      var taskText = $(this).val();
      $(this).val('');
      addTaskLi(taskText);
    }
  });

  $('#toggleInput').click(() => $('#taskInput').fadeToggle(200));
}

function addTaskLi(text) {
  main.taskList.append(makeTaskLi(text));
}

function makeTaskLi(text) {
  var li = $('<li><span class="remove"><i class="fas fa-trash"></i></span> </li>').append(new Text(text));
  return li;
}
