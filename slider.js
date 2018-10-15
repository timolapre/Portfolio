$(document).ready(function () {

    myWorkList =    [["Sheep Thrills", "Images/sheepthrills.png", "black", "https://www.youtube.com/embed/TteGDMkABSs",
    "Sheep Thrills is one of my latest own finished projects released for iOS and Android. You control a sheep whose goal is to reach the finish flag. However, the surroundings are dangerous! Deadly objects everywhere! With help of all the deceased sheep's body, you can make progress on every level."],
                    ["Student Sim", "Images/studentsim.png", "light","https://www.youtube.com/embed/ySeFYFSCXUs",
    "Student Sim is a game I made for university. The game is based on temple run and made from scratch using Unity with C#."],
                    ["Snake Ballz", "Images/snakeballz.png", "light","https://www.youtube.com/embed/ySeFYFSCXUs",
    "Snake Ballz was a personal project project. The game is a combination of the classic game snake and Ballz. You controll the snake and you have to destroy as many blocks as possible however, you can only destroy a block if your tail is long enough. Collect the yellow objects to make your tail longer"],
                    ["Sausage Escape", "Images/sausageescape.png", "light","https://www.youtube.com/embed/ySeFYFSCXUs",
    "Sausage Escape is a simple game about a sausage trying to avoind being eaten. A human hand is trying to catch you! run for you life but don't roll into any knives or forks. This game was a personal project and was released to the App store, Play store and Amazon store"],
                    ["Tetris", "Images/tetris.png", "black","https://www.youtube.com/embed/ySeFYFSCXUs",
    "In my first year of university we had to re-create the well know classic game Tetris. This game was developed completely from scratch in C# with monogame."],
                    ["This Website", "Images/website.png", "light","https://www.youtube.com/embed/ySeFYFSCXUs",
    "This website was completely created from scratch by me using HTML5, CSS3 and JS"],
                    ["Arduino car", "Images/arduino.png", "black","https://www.youtube.com/embed/ySeFYFSCXUs",
    "A completely different project than all my other projects. Using the arduino I created a car which was capable of driving all by himself without driving into any objects. Programmed in C and completely self build."],
                    ["Raytracer", "Images/raytracer.png", "black","https://www.youtube.com/embed/ySeFYFSCXUs",
    "This Raytracer was an university project. According to wikipedia ray tracing is a rendering technique for generating an image by tracing the path of light as pixels in an image plane and simulating the effects of its encounters with virtual objects. This is programmed by me in C# based on a template provided the university"],
                    ["3D engine", "Images/rasterization.png", "light","https://www.youtube.com/embed/ySeFYFSCXUs",
    "This 3D engine was a project for the university. Programmed in C# based on a template provided by the university"],
                    ["GSInvention", "Images/gsinvention.png", "light","https://www.youtube.com/embed/ySeFYFSCXUs",
    "My interest for game development started with a program called GameSalad. For 5 years I have used GameSalad to create many prototypes and games. During this time I started a webshop called GSInvention where I sold or gave away templates created with GameSalad. I owned GSInvention for about 3 years, created over 100 paid and free templates and helped a lot of people."],
                    ["Videos", "Images/youtube.png", "light","https://www.youtube.com/embed/ySeFYFSCXUs",
    "There are a lot of other projects I worked on. Not all are big or good enough to put on my resume but it might still be worth watching some videos of my other work."]]

    listlength = myWorkList.length + 5;
    check = listlength;

    if ($(window).width() <= 664) {
        $(".skills").css("left", 0)
    } else {
        $(".skills").css("left", -332 / 2)
    }


    startpos = $(".skills").css('left');

    $(".skills").css("grid-template-columns", "repeat(" + listlength + ", auto)")

    window.setInterval(function () {
        check--;
        $(".skills").animate({ left: "-=332" }, 3000, function () {
            if (check <= 5) {
                check = listlength;
                $(".skills").css('left', startpos)
            }
        })
    }, 6000);

    var imgp;

    for (i = 0; i < listlength; i++) {
        var a = $(".skills").attr('id');
        if(a==1){
            imgp = myWorkList[i % myWorkList.length][1];
        }
        else{
            imgp = '../' + myWorkList[i % myWorkList.length][1] 
        }
        $(".skills").append('<div class="horcenter" id=' + (i % myWorkList.length + 1) + '>' +
            '<div class="skill" style="background-image: url(' + imgp + ');">' +
            '<div class="title ' + myWorkList[i % myWorkList.length][2] + '">' +
            '<p>' + myWorkList[i % myWorkList.length][0] + '</p>' +
            '</div>' +
            '<div class="button horcenter">' +
            '<button class="greenbut pagebut" id=' + (i % myWorkList.length + 1) + '>Read More</button>' +
            '</div>' +
            '</div>' +
            '</div>');
    }

    $(".slideshow").css("height", $(".skills").css("height"))

    $(".a1").on("click", function () {
        check--;
        $(".skills").animate({ left: "-=332" }, 1000, function () {
            if (check <= 5) {
                check = listlength;
                $(".skills").css('left', startpos)
            }
        })
    })

    $(".a2").on("click", function () {
        check++;
        $(".skills").animate({ left: "+=332" }, 1000, function () {
            if (check > listlength) {
                check = 5;
                $(".skills").css('left', startpos)
            }
        })
    })

});