"use strict"; 

$(function() { 

  $('#addButton').click(function(e){
    e.preventDefault();
    var toDo = $('#toDoItem').val();

    $( '#tasks' ).append ("<div class='task'>" + toDo + "<img src='assets/trashcan_delete.png'></div>");
    $('#toDoItem').val(''); 
  });


  $( '#tasks' ).delegate('.task', 'click', function(e){
    $(this).toggleClass("toDoDone");
  });

  $( '#tasks' ).delegate('.task img', 'click', function(e){
    $(this).closest('.task').remove();
  });

});