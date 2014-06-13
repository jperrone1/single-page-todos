"use strict"; 

// console.log('hello');

$(function() { 


  $('#addButton').click(function(e){
    e.preventDefault();
    var toDo = $('#toDoItem').val();
    // console.log(toDo);


    $( '#tasks' ).append ("<div class='task'>" + toDo + "<img src='assets/trashcan_delete.png'></div>");
    $('#toDoItem').val(''); 
  });

  // $( '.task' ).click(function(e){
  //   $(this).toggleClass("toDoDone");
  // });

    $( '#tasks' ).delegate('.task', 'click', function(e){
    $(this).toggleClass("toDoDone");
  });

    $( '#tasks' ).delegate('.task img', 'click', function(e){
    $(this).closest('.task').remove();
  });

})