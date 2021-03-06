$(document).ready(function () {
    
    

    contacts = {
        "StackOverflow": ["stackoverflow", "StackOverflow", "#f48024", "black"],
        "Facebook": ["facebook", "Facebook", "#3b5998", "white"],
        "GitHub": ["github", "GitHub", "#333", "white"],
        "Twitter": ["twitter", "Twitter", "#1da1f2", "white"],
        "LinkedIn": ["linkedin", "LinkedIn", "#0077b5", "white"],
        "Mail": ["mail", "Let's Meet Up?", "black", "white"],
        "Resume": ["resume", "Hire Me!", "black", "white"],
        "Medium": ["medium", "Medium", "#00ab6c", "white"],
        "Angel": ["angel", "Angel", "white", "black"],
        "Amazon": ["amazon", "<span style='font-size: 0.6em'>Buy Me Something from My Amazon Wishlist!<br>Thanks!</span>", "#ff9900", "black"]
    }
    
    
    function openNav(that, text) {
        document.getElementById("myNav").style.width = "100%";
        document.getElementById("myNav").style.backgroundColor = that;
        $(".over_lay").each(function(i, obj) {
            obj.style.color = text;
        })
    }

    function closeNav() {
        document.getElementById("myNav").style.width = "0%";
        $(".over_lay").each(function(i, obj) {
            obj.style.color = "black";
        })
    }

    function openSocial(that, text) {
        $('#over_lay_content').css('display', 'block');
        $('#over_lay_content').html(that);
        document.getElementById("over_lay_content").style.color = text;
    }

    function closeSocial(that) {
        $('#' + that).css('display', 'none');
    }

    function openOverlay(that, bg, text) {
        openNav(bg, text);
        openSocial(that, text);
    }

    function closeOverlay(that) {
        closeNav();
        closeSocial(that);
    }
    
    //
    var overlay_item = "";

    $(".over_lay").hover(function() {
        overlay_item = $(this).attr("id");
        
        for(var i in contacts) {
            if(contacts[i][0] == overlay_item){
                overlay_item = contacts[i][1];
                openOverlay(overlay_item, contacts[i][2], contacts[i][3]);
                
            }
        }
    }, function() {
        closeOverlay(overlay_item);   
    });
    
    
    var scroll_start = 0;
    var startchange = $('#top');
    var offset = startchange.offset();
    if (startchange.length) {
        $(document).scroll(function () {
            scroll_start = $(this).scrollTop();
            if (scroll_start > offset.top) {
                $("#header").css('display', 'block');
            } else {
                $('#header').css('display', 'none');
            }
        });
    }

    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 500, 'swing');
    });

//    var loves = ["making websites", "Sweja", "web designing"];
    
    var i = 0;
    
    $(function () {
        var hello = ["Making Websites", "Web Designing", "Google", "Open Source", "HTML, CSS and JS", "Chatbots", "Python", "ReactJs", "JavaScript", "Machine Learning", "Artificial Intelligence"];
        var used = ["Sweja"];
        var greeting = $('#loves');
        var item;

        function hey() {
            var j = i;
//            console.log("j = " + j);
            item = hello[j];
            
            greeting.html(item);
            greeting.animate({
                "opacity": "1"
            }, 0);              //time to transition opacity
        }

        window.setInterval(function () {
            i = Math.floor(Math.random() * (hello.length + 1));
            greeting.animate({
                "opacity": "0"
            }, 0);              //time to transition opacity
            setTimeout(hey, 0)
        }, 300);        //interval between word change

    });


    $('#typer').typeIt({
            //        strings: ["Front End Developer","Quizzer/ QuizMaster","Undergrad"," "],
            speed: 15,
            //        cursorSpeed: 0,
            //        breakLines: true,
            //        breakDelay: 2000,
            autoStart: false
        })
        .tiType('Front End Developer, ')
        .tiBreak()
        .tiPause(1000)
        .tiBreak()
});
