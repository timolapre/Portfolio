$(document).ready(function(){

    $(".bar").each(function(){
        $(this).width($(this).attr('id') + "%");
    });

    $(".greenbut").hover(function(){
        $(this).css("color", "var(--green)");
    });

    $(".greenbut").mouseleave(function(){
        $(this).css("color", "white");
    });

    $(".pagebut").click(function(){
        window.location.href = '../pages/allprojects.html' + '#'+ $(this).attr('id');
        //location.reload();
        //window.open("../pages/page" + $(this).attr('id') + ".html","_self");
    });

    $(".seeallbut").click(function(){
        window.open("../pages/allprojects.html", "_self");
    });

    $(".loadfooter").load("footer.html");
 });

 // Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}
btn2.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}