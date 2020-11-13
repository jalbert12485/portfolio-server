$("#submitbutton").on("click", function(e){
    e.preventDefault();
    let email=$("#exampleInputEmail1").val();
    let name=$("#exampleInputName1").val();
    let text=$("#exampleFormControlTextarea1").val();
    let body={
        "from": email,
        "to": "jalbert@carthage.edu",
        "subject": `Message from ${name}`,
        "text": text

    }

    $.post("/emailme", body).done(function(){
        name="Thank you";
        text="Your message has been sent.";
        $("#submitbutton").attr("disabled", true);

    });

});