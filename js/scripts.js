$(document).ready(function() {
  $("#goal-button").click(function() {
    $("#goal-list").append ("<li class='list-item'>" + $("#new-goal").val() + "</li>");
    $("#new-goal").val("");
  })
})

// It was nice to meet you in class: Corey Haverda
