// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .



$(document).ready(function() {
  var dataname = [];
  $(document).on("click", "#add",  function(){
    //location.reload(); 
     var name = $("#first-name").val();

     

      
     $.ajax({
      url: "/tasks",
      type: "POST",
      data: {task: {name: name}},
      dataType: "json",
      success: function(result){

        $("#name-list").append('<li task-id="'+ result.task_id + '">' + name + " <a href=\"#\" id=\"destroy\" class=\"destroy_link\">destroy</a></li>");
        $("#first-name").val("");

      }
     });
  });

  $(document).on("click", ".destroy_link", function(){

    
     var selected_li = this.parentElement;
     $.ajax({
       type: "DELETE",
       dataType: "json", 
       url: "/tasks/" + selected_li.getAttribute("task-id"),
       success: function(result){
         selected_li.remove();
          
       }

     });

 });

  $(document).on("click", "#find", function(){ 
    
    $('.winner').remove();

    var number = Math.floor(Math.random()*name.length);
    
    $("#name-list li:nth-child(" + number + ")")
      .append("<li class='winner'>  winner </li>");
    $('.winner').css("color", "green");
    $(".winner").css( "float", "right" );
      


  });
});

















// $( document ).ready(function() {
  
//   $("#add_task_btn").click(function(){
//   	$.ajax({

// 	  type: "POST",
// 	  url: "/tasks",
// 	  dataType: "json", 
// 	  data: {task: {name: $('#new_task_name').val()}},
// 	  success: function(result){
	  	
 
	  	 // $("#incomplete_tasks").append('<li task-id="' + result.task_id + '">' + $('#new_task_name').val() + "<a href=\"#\" id=\"destroy\" class=\"destroy_link\">destroy</a></li>")
// 		$("#new_task_name").val("");

// 	  }
// 	});
//   });


//   $(document).on("click", ".destroy_link", function(){

  	
//   	 	var selected_li = this.parentElement;
//   		$.ajax({
//   			type: "DELETE",
//   			dataType: "json", 
//   			url: "/tasks/" + selected_li.getAttribute("task-id"),
//   			success: function(result){
//   				selected_li.remove();

//   			}

//   		});

// 	});
// });
