$(document).ready(function () {
    console.log("Runnning on Ready");
    
    var firstName = $("#firstName").val();
    var lastName;
    var gender;
    var hobbies; // Will be a map or something
    var animal;
    var misc;
    
    var inputs;
    
    $("#info").validate();
    $("main .process").hide();
    
    $("#info").on("click", "#submitbutton", function(){
        console.log("Button was pushed!");
        $("main .process").show();
        // console.log(firstName); // Doesn't work for some reason
        
    });
});
