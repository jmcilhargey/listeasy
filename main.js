var template = function(text) {
  return '<p><input type="checkbox"><i class="glyphicon glyphicon-star"></i><span>' + text + '</span><i class="glyphicon glyphicon-remove"></i></p>';
};

var main = function() {
  $("form").submit(function() {
    var text = $("#todo").val();
    var html = template(text);
    $("#todo").val("");
    
    if (text.length > 0) {
    	$(html).appendTo(".list");
    } else {
			return false;
    }
    return false;
  });
  
  $(".list").on("click", ".glyphicon-star", function() {
  	$(this).toggleClass("active");
  });
  $(".list").on("click", ".glyphicon-remove", function() {
    $(this).parent().remove();
  });
};

var addList = function(item) {
  var html = template(item);
  $(".list").append(html);
};

var newCommand = {
  'add *item' : addList,
};

annyang.addCommands(newCommand);

annyang.start();

$(document).ready(main);