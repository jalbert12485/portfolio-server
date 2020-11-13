$("#submitbutton").on("click", function(e){
    e.preventDefault();
    console.log("hello");
    $.post("/emailme").done(function(){});

});