$(function () {
    var App = {
        /**
         * Init Function
         */
        init: function() {
            App.Sidebar();
        },

        Sidebar: function () {
            $(window).resize(function() {
                var path = $(this);
                var contW = path.width();
                if(contW >= 751){
                    document.getElementsByClassName("sidebar-toggle")[0].style.left="200px";
                }else{
                    document.getElementsByClassName("sidebar-toggle")[0].style.left="-200px";
                }
            });

            $('.dropdown').on('show.bs.dropdown', function(e){
                $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
            });

            $('.dropdown').on('hide.bs.dropdown', function(e){
                $(this).find('.dropdown-menu').first().stop(true, true).slideUp(300);
            });

            $(".navbar-toggler").click(function(e) {
                e.preventDefault();
                var elem = document.getElementById("sidebar-wrapper");
                left = window.getComputedStyle(elem,null).getPropertyValue("left");
                if(left == "200px"){
                    document.getElementsByClassName("sidebar-toggle")[0].style.left="-200px";
                }
                else if(left == "-200px"){
                    document.getElementsByClassName("sidebar-toggle")[0].style.left="200px";
                }
            });

            function getPageHeight(){
                var height = (window.innerHeight > 0) ? window.innerHeight : document.documentElement.clientHeight;
                $('.sidebar-nav').css('height',height-90);
            }
            window.onresize = getPageHeight();
            getPageHeight();
        }
    };

    $(function() {
        App.init();
    });

});