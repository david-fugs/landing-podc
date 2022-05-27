$(document).ready(function(){
    $(".modulos").click(function() {
        $(".subMenu").toggleClass("active");
        if($(".subMenu").hasClass('active')){
            $(".sombra").fadeIn();
        }else {
            $(".sombra").fadeOut();
        }
    });
    $(".hamburguer").click(function() {
        $(".hamburguer span").toggleClass("active");
        $(".inside-responsiveMenu ").slideToggle();
        if($(".hamburguer span").hasClass("active")) {
            $(".inside-responsiveMenu").css("z-index","20")
        }
    })
    $(".modulos-resp").click(function() {
        $(".sub-sub-Menu").slideToggle();
        $(".modulos-resp").toggleClass("down");
    })
    setTimeout(function() {
        $(".cookies").css("display", "flex").css("transition",".5s")
    },1500)
    $("#acept-cook").click(function() {
        $(".cookies").fadeOut("slow");
    })
});

