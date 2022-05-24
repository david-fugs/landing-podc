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
    })
    $(".modulos-resp").click(function() {
        $(".sub-sub-Menu").slideToggle();
        $(".modulos-resp").toggleClass("down");
    })
});

