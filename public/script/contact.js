$("#submitbutton").on("click", function(e){
    e.preventDefault();
    $.post("/emailme").done(function(){});

});