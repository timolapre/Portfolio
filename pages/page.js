$(document).ready(function(){
    
    $(".loadheader").load("pageheader.html");
    $(".loadfooterp").load("../footer.html");

    $(".homebutton").on("click", function(){
        window.open("../../","_self");
    });

    $(".homebutton").on("mouseover", function(){
        $(this).css("color", "var(--green)");
    });

    $(".homebutton").on("mouseleave", function(){
        $(this).css("color", "white");
    });

 });