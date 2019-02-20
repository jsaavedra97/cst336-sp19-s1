// javascript goes here
console.log("Runnning on Ready");

var images = [
    "img/pikachu.png", 
    "img/eevee.png", 
    "img/mankey.png", 
    "img/charizard.png", 
    "img/mewtwo.png", 
    "img/magikarp.jpg"
];
var score = 0;
var count = 1;
var next  = document.querySelector("#next");
var reset = document.querySelector("#reset");

$("#mainImg").attr("src", images[0]);
$("#mainImg").css({'width' : '200px' , 'height' : '200px'});
$("#next, #reset").hide();

/*Got this function from this post*/
/*https://stackoverflow.com/questions/210717/using-jquery-to-center-a-div-on-the-screen*/
jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft()) + "px");
    return this;
}
$("#question").center();
/**************************************************************************************/

$("#quiz").on("click", "#button1", function(){
    if(count == 1 || count == 3 ||count == 6){
        $("#result").html("That's right!");
        if(count == 6){ score += 40; }
        else{ score += 20; }
        console.log(score);
        $("#buttons").children().css("background", "green");
    }
    
    else{
        $("#result").html("That's a wrong answer!");
        $("#buttons").children().css("background", "red");
    }
    $("#buttons").children().off();
    $("#next").show();
});

$("#quiz").on("click", "#button2", function(){
    if(count == 2 || count == 5){
        $("#result").html("That's right!");
        score += 20;
        console.log(score);
        $("#buttons").children().css("background", "green");
    }
    else {
        $("#result").html("That's a wrong answer!");
        $("#buttons").children().css("background", "red");
    }
    
    $("#buttons").children().off();
    $("#next").show();
});

$("#quiz").on("click", "#button3", function(){
    if(count == 4){
        $("#result").html("That's right!");
        score += 20;
        console.log(score);
        $("#buttons").children().css("background", "green");
    }
    else {
        $("#result").html("That's a wrong answer!");
        $("#buttons").children().css("background", "red");
    }
    
    $("#buttons").children().off();
    $("#next").show();
});


$("#next").click(function(e) {
    e.preventDefault();

    $("#mainImg").attr("src", images[count]);
    $("#mainImg").css({'width' : '200px' , 'height' : '200px'});
    if(count == 1){
        $("#button1").prop("value", "Eve");
        $("#button2").prop("value", "Eevee");
        $("#button3").prop("value", "Even");
    }
    else if(count == 2){
        $("#button1").prop("value", "Mankey");
        $("#button2").prop("value", "Monkey");
        $("#button3").prop("value", "Mankay");
    }
    
    else if(count == 3){
        $("#button1").prop("value", "Chuzzidar");
        $("#button2").prop("value", "Charliezard");
        $("#button3").prop("value", "Charizard");
    }
    
    else if(count == 4){
        $("#button1").prop("value", "Frieza");
        $("#button2").prop("value", "Mewtwo");
        $("#button3").prop("value", "Mewt0o");
    }
    
    else if(count == 5){
        $("#button1").prop("value", "Magikarp");
        $("#button2").prop("value", "Magickarp");
        $("#button3").prop("value", "The One Above All");
    }
    
    $("#next").hide();
    if(count < 6){
        $("#result").html("What is the name of this Pokemon?");
        $("#buttons").children().css("background", "");
        $("#buttons").children().on();
    }
    
    else{
        if(score >= 90){
            $("#mainImg").attr("src", "img/celebration.jpg");
            $("#result").html("Congratulations! You scored more that 90 on the Pokemon Quiz!");
        }
        
        else{
            $("#mainImg").attr("src", "img/sad-pikachu.jpg");
            $("#result").html("You failed the Pokemon Quiz!");
        }
        $("#buttons").hide();
        $("#reset").show();
    }
    $("#score").html("Score: " + score);
    count++;
});