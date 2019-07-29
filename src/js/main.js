/* 
=====================================================================================================================
=====================================================================================================================
=====================================================================================================================
                                                        FUNCIONES GENERALES 
=====================================================================================================================
=====================================================================================================================
===================================================================================================================== 
*/

// --------------------------------------------------- Inicializar Scrollmagic

$(function () {
    controller = new ScrollMagic.Controller({
        loglevel: 3
    });

    /* ------------------------    Slider 1 */

    var scene = new ScrollMagic.Scene({
        triggerElement: '#seccion1',
        offset: 10,
        triggerHook: 0.5,
        duration: "100%",
        reverse: true
    })
        .setClassToggle('.cuadroescondido', 'cuadrovisible')
        // .addIndicators({name: "Aparecer cuadro", colorEnd: "#FFFFFF"})
        .addTo(controller);

    /* ------------------------    Slider 1 */
    /* Texto slider 1 */
    var scene1 = new ScrollMagic.Scene({
        triggerElement: '#seccion1',
        offset: 10,
        triggerHook: 0.5,
        reverse: true
    })
        .setClassToggle('.owl-slide-title', 'owl-slide-text-desaparecer')
        // .addIndicators({name: "Desaparecer texto", colorEnd: "#FFFFFF"})
        .addTo(controller);




    /* Lineas transparentes ================================================= */

    /* Linea 1 slider 1 */
    var scene2 = new ScrollMagic.Scene({
        triggerElement: '#seccion2',
        offset: -470,
        triggerHook: 0.5,
        reverse: true
    })
        .setClassToggle('.S1_linea1', 'S1_linea1-oculta')
        // .addIndicators()
        .addTo(controller);

    /* Linea 0 slider 1 */
    var scene2_0 = new ScrollMagic.Scene({
        triggerElement: '#seccion2',
        offset: -470,
        triggerHook: 0.5,
        reverse: true
    })
        .setClassToggle('.S1_linea0', 'S1_linea0-oculta')
        // .addIndicators()
        .addTo(controller);

    /* Linea 2 slider 1 */
    var scene2 = new ScrollMagic.Scene({
        triggerElement: '#seccion2',
        offset: -470,
        triggerHook: 0.5,
        reverse: true
    })
        .setClassToggle('.S1_linea2', 'S1_linea2-oculta')
        // .addIndicators()
        .addTo(controller);




    /* ------------------------    Seccion 2 */
    /* Mostrar tabsempresa */
    var scene3 = new ScrollMagic.Scene({
        triggerElement: '#seccion2',
        offset: 100,
        triggerHook: 0.5,
        reverse: true
    })
        .setClassToggle('.tabsempresa', 'tabsempresamostrar')
        // .addIndicators()
        .addTo(controller);

    /* Mostrar linea empresa 
    var scene4 = new ScrollMagic.Scene({
            triggerElement: '#iconoempresa',
            offset: -150,
            triggerHook: 0.5,
            reverse: true
        })
        .setClassToggle('.lineaempresa', 'abrirlinea')
        // .addIndicators()
        .addTo(controller);
*/
    /* Mostrar texto botones empresa */
    var scene4 = new ScrollMagic.Scene({
        triggerElement: '#iconoempresa',
        offset: -125,
        triggerHook: 0.5,
        reverse: true
    })
        .setClassToggle('.button_slide', 'button_slide_mostrar')
        // .addIndicators()
        .addTo(controller);

    /* Mostrar btn historia */
    var scene5 = new ScrollMagic.Scene({
        triggerElement: '#seccion2',
        triggerHook: 0.5,
        reverse: true
    })
        .setClassToggle('.btn_historia', 'btn_historia_aparecer')
        .addTo(controller);

        var sceneAll = new ScrollMagic.Scene({
            triggerElement: 'section',
            triggerHook: 0.5,
            reverse: true
        })
            .setClassToggle('.os-animation', 'animatedAll')
            .addTo(controller);

    /* Mostrar btn estatutos */
    var scene5 = new ScrollMagic.Scene({
        triggerElement: '#seccion2',
        triggerHook: 0.5,
        reverse: true
    })
        .setClassToggle('.btn_estatutos', 'btn_estatutos_aparecer')
        .addTo(controller);


});

/* Efecto parallax de con scrollmagic (Triangulos) */

function parallax() {
    var parallaxController = new ScrollMagic.Controller({ globalSceneOptions: { triggerHook: "onEnter", duration: "200%" } });
    $('.parallax').each(function () {
        var trig = this.parentNode,
            parallax = this.getAttribute('data-parallax'),
            speed = parallax * 100 + '%';

        new ScrollMagic.Scene({ triggerElement: trig })
            .setTween(this, { y: speed, ease: Linear.easeNone })
            .addTo(parallaxController);
    })
}

parallax();




/* 
=====================================================================================================================
=====================================================================================================================
=====================================================================================================================
                                                        PRIMERA SECCIÓN 
=====================================================================================================================
=====================================================================================================================
===================================================================================================================== 
*/


/* 
-----------------------------------------------------------
----------------------------------------------------------- slider principal
-----------------------------------------------------------
*/


const $slides = $("#sliderprincipal .owl-slide");
$slides.css("height", $(window).height());
$slides.css("height", $(window).height());
$(window).resize(() => {
    $slides.css("height", $(window).height());
});

$("#sliderprincipal").on("initialized.owl.carousel", () => {
    setTimeout(() => {
        $(".owl-item.active .owl-slide-animated").addClass("is-transitioned");
        $(".S1_linea0").addClass("aparecerlinea");
        $(".S1_linea1").addClass("aparecerlinea");
        $(".S1_linea2").addClass("aparecerlinea");
        $("section").show();
    }, 300);
});

/* Inicializar slider principal */

const $owlCarousel = $("#sliderprincipal").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    /* navText: [
    '<svg width="50" height="50" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>',
    '<svg width="50" height="50" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>' 
    ]*/
});

$owlCarousel.on("changed.owl.carousel", e => {
    $(".owl-slide-animated").removeClass("is-transitioned");
    const $currentOwlItem = $(".owl-item").eq(e.item.index);
    $currentOwlItem.find(".owl-slide-animated").addClass("is-transitioned");
    const $target = $currentOwlItem.find(".owl-slide-text");
});

$owlCarousel.on("resize.owl.carousel", () => {
    setTimeout(() => { }, 50);
});

/* 
------------- Botones subslider blur
*/
$.fn.isOnScreen = function(){

    var win = $(window);

    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();

    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

};
function addAnimation(e){
    $(".lineTime .timeline").toggleClass('scrollAnimation'); 
    return false;
    e.stopPropagation();
}
$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};
$(document).ready(function () {
    //Mapa
    //jalisco
    //$("#path5174-4").hide();
    $("#g1868").hide();
    //Quintana

    //$("#path9431-3").hide();
    $("#g1929").hide();
    //panama
    //$("#path30323-5").hide();
    $("#g1878").hide();
    //republica
    //$("#path30321-9").hide();
    $("#g1934").hide();
    //Animacion SVG
    
    $("#rect6149-4").each(function(i, item) {
        setInterval(function() {
          $(item).addClass('rectFill');
      
        }, 2000 + i)
        setInterval(function() {
          $(item).removeClass('rectFill');
      
        }, 2000 + i)
      
      });
    
    // var loops = 99 * 2;
    //     function removeAddClass() {
    //         $("#rect6147-5").toggleClass("rectFill");
    //         if (--loops > 0)
    //              setTimeout(removeAddClass, 1000);
    //     }
    //     removeAddClass();
$(window).scroll( function(event){
    var scroll = $(window).scrollTop();

    if ($(".time1").isInViewport()) {
        $(".lineTime .timeline").addClass("scrollAnimation");
    } else {
        // do something else
    }
    $('.hideme').each( function(i){
        
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if( bottom_of_window > bottom_of_object ){
            $(this).animate({'opacity':'1'},500);
        }
        
    }); 

});


    //
    $('.customNextBtn').click(function () {
        $owlCarousel.trigger('next.owl.carousel', [100]);
    })
});

$('path').on({
    mouseenter: function () {

        var id = $(this).attr("id");
        console.log(id);
        //IF Jalisco
        if (id == "path5174-4") {
            $("#path5174-4").css({ fill: "#3caeb4" });
            $("#g1868").fadeIn(500);
            $("#jalisco").fadeIn(500);
            //amores
            $("#path30319-8").css({ fill: "#cccccc" });
            $("#amores").fadeOut();
            $("#g1923").fadeOut();
            //panama
            $("#path30323-5").css({ fill: "#cccccc" });
            $("#g1878").fadeOut();
            $("#panama").fadeOut();
            //republica
            $("#path30321-9").css({ fill: "#cccccc" });
            $("#g1934").fadeOut();
            $("#dominicana").fadeOut();
            //quintana
            $("#path9431-3").css({ fill: "#cccccc" });
            $("#g1929").fadeOut();
            $("#quintana").fadeOut();
            //Amores IF
        } else if (id == "path30319-8") {
            $("#path30319-8").css({ fill: "#3caeb4" });
            $("#g1923").fadeIn(500);
            $("#amores").fadeIn(500);
            //Jalisco
            $("#path5174-4").css({ fill: "#cccccc" });
            $("#g1868").fadeOut();
            $("#jalisco").fadeOut();
            //panama
            $("#path30323-5").css({ fill: "#cccccc" });
            $("#g1878").fadeOut();
            $("#panama").fadeOut();
            //republica
            $("#path30321-9").css({ fill: "#cccccc" });
            $("#g1934").fadeOut();
            $("#dominicana").fadeOut();
            //quintana
            $("#path9431-3").css({ fill: "#cccccc" });
            $("#g1929").fadeOut();
            $("#quintana").fadeOut();
            //IF Quintana Roo
        } else if (id == "path9431-3") {
            $("#path9431-3").css({ fill: "#3caeb4" });
            $("#g1929").fadeIn(500);
            $("#quintana").fadeIn(500);
            //Jalisco
            $("#path5174-4").css({ fill: "#cccccc" });
            $("#g1868").fadeOut();
            $("#jalisco").fadeOut();
            //panama
            $("#path30323-5").css({ fill: "#cccccc" });
            $("#g1878").fadeOut();
            $("#panama").fadeOut();
            //republica
            $("#path30321-9").css({ fill: "#cccccc" });
            $("#g1934").fadeOut();
            $("#dominicana").fadeOut();
            //amores
            $("#path30319-8").css({ fill: "#cccccc" });
            $("#amores").fadeOut();
            $("#g1923").fadeOut();
            //IF Panama
        } else if (id == "path30323-5") {
            $("#path30323-5").css({ fill: "#3caeb4" });
            $("#g1878").fadeIn(500);
            $("#panama").fadeIn(500);
            //Jalisco
            $("#path5174-4").css({ fill: "#cccccc" });
            $("#g1868").fadeOut();
            $("#jalisco").fadeOut();
            //quintana
            $("#path9431-3").css({ fill: "#cccccc" });
            $("#g1929").fadeOut();
            $("#quintana").fadeOut();
            //republica
            $("#path30321-9").css({ fill: "#cccccc" });
            $("#g1934").fadeOut();
            $("#dominicana").fadeOut();
            //amores
            $("#path30319-8").css({ fill: "#cccccc" });
            $("#amores").fadeOut();
            $("#g1923").fadeOut();
            //IF Republica Dominicana
        } else if (id == "path30321-9") {
            $("#path30321-9").css({ fill: "#3caeb4" });
            $("#g1934").fadeIn(500);
            $("#dominicana").fadeIn(500);
            //Jalisco
            $("#path5174-4").css({ fill: "#cccccc" });
            $("#g1868").fadeOut();
            $("#jalisco").fadeOut();
            //quintana
            $("#path9431-3").css({ fill: "#cccccc" });
            $("#g1929").fadeOut();
            $("#quintana").fadeOut();
            //panama
            $("#path30323-5").css({ fill: "#cccccc" });
            $("#g1878").fadeOut();
            $("#panama").fadeOut();
            //amores
            $("#path30319-8").css({ fill: "#cccccc" });
            $("#amores").fadeOut();
            $("#g1923").fadeOut();
        }

    },
    mouseleave: function () {
        console.log("Bye");
    }
});




/* 
Efecto menu
*/
$(function () {
    var header = $("#navbar");

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            header.addClass("scrolled");
        } else {
            header.removeClass("scrolled");
        }
    });

});




/* 
-----------------------------------------------------------
----------------------------------------------------------- Efecto blur slider
-----------------------------------------------------------
*/

var pxlCount = 0;
$(window).on('scroll', function () {
    if ($(document).scrollTop() <= 70) {
        pxlCount = $(document).scrollTop() / 5;

    }
    $(".wrapper").css({ "-webkit-filter": "blur(" + pxlCount + "px)", "-moz-filter": "blur(" + pxlCount + "px)", "filter": "blur(" + pxlCount + "px)" });

    pxlCount2 = $(document).scrollTop() / 50;
    $(".scrolled").css({ "background-position": "0px " + "-" + pxlCount2 + "px" });

});


/* 
=====================================================================================================================
=====================================================================================================================
=====================================================================================================================
                                                        SEGUNDA SECCIÓN
=====================================================================================================================
=====================================================================================================================
===================================================================================================================== 
*/

/* ----------------------------------------------- Ventana de menú  ----------------------  */

// ---------------- Presionar el boton de [MENÚ]
$('#toggle').click(function () {

    if ($('#toggle-formulario').hasClass("active")) {
        $('#toggle-formulario').toggleClass('active');
        $('#overlay-formulario').toggleClass('open');
        $('.main').toggleClass('main_efecto');
        $('body').toggleClass('body_bloqueado');
    }

    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
    $('.main').toggleClass('main_efecto');
    $('body').toggleClass('body_bloqueado');
});


/* Ventana de formulario */

$('#toggle-formulario').click(function () {

    if ($('#toggle').hasClass("active")) {
        $('#toggle').toggleClass('active');
        $('#overlay').toggleClass('open');
        $('.main').toggleClass('main_efecto');
        $('body').toggleClass('body_bloqueado');
    }


    $(this).toggleClass('active');
    $('#overlay-formulario').toggleClass('open');
    $('.main').toggleClass('main_efecto');
    $('body').toggleClass('body_bloqueado');
});


/* ----------------------------------------------- Ventana de historia  ----------------------  */



$('#btn_historia').click(
    function () {
        $('#ventanahistoria').toggleClass('abierta');
        $('#img_historia').toggleClass('imagenhistoria');
        $('#titulohistoria').toggleClass('mostrartitulohistoria');
        $('body').toggleClass('body_bloqueado');
        cajahistoria.scrollTop = scrollinicio;
    });

$('#btn_cerrarhistoria').click(
    function () {
        $('#ventanahistoria').toggleClass('abierta');
        $('body').toggleClass('body_bloqueado');
        $('#img_historia').toggleClass('imagenhistoria');
        $('#titulohistoria').toggleClass('mostrartitulohistoria');
        /* Reiniciar el scroll interno */
        scrollinicio = 0;
    });


/* Botones */

let btn_scrolldown = document.getElementById("btn_scrolldown");
let btn_scrollup = document.getElementById("btn_scrollup");
let cajahistoria = document.getElementById("textohistoria");
let scrollinicio = 0;

btn_scrolldown.onclick = function () {
    scrollinicio += 40;
    cajahistoria.scrollTop = scrollinicio;
};

btn_scrollup.onclick = function () {
    scrollinicio -= 40;
    cajahistoria.scrollTop = scrollinicio;
};


/* ----------------------------------------------- Ventana de estatutos  ----------------------  */

$('#btn_estatutos').click(
    function () {
        $('#ventanaestatutos').toggleClass('abiertaestatutos');
        $('#img_estatutos').toggleClass('imagenestatutos');
        $('#tituloestatutos').toggleClass('mostrartituloestatutos');
        $('body').toggleClass('body_bloqueado');
        cajahistoria.scrollTop = scrollinicio;
    });

$('#btn_cerrarestatutos').click(
    function () {
        $('#ventanaestatutos').toggleClass('abiertaestatutos');
        $('#img_estatutos').toggleClass('imagenestatutos');
        $('#tituloestatutos').toggleClass('mostrartituloestatutos');
        $('body').toggleClass('body_bloqueado');
        cajahistoria.scrollTop = 0;
    });



/* 
=====================================================================================================================
=====================================================================================================================
=====================================================================================================================
                                                        TERCERA SECCIÓN
=====================================================================================================================
=====================================================================================================================
===================================================================================================================== 
*/

$('#sliderservicios').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause:true,
    margin: 200,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        420: {
            items: 2
        },
        670: {
            items: 3
        },
        940: {
            items: 4
        },
        1500: {
            items: 5
        }
    }
})


/* ----------------------------------------------- Ventana de aih capital  ----------------------  */

$('.cuadroitem').click(
    function () {
        var idservicio = $(this).attr("id");
        $('#overlay-advisors').toggleClass('overlay-advisors-mostrar');
        $('body').toggleClass('body_bloqueado');

        switch(idservicio){
            case "c_1":
                $('.overlay_tituloservicio').html("Advisors ");
                $('.overlay_textoservicio').html("Advisors Advisors Advisors Advisors Advisors Advisors Advisors Advisors Advisors Advisors Advisors Advisors Advisors Advisors Advisors ")
            break;

            case "c_2":
                $('.overlay_tituloservicio').html("Capital ");
                $('.overlay_textoservicio').html("Capital Capital Capital Capital Capital Capital Capital Capital Capital Capital Capital Capital Capital Capital ")
            break;

            case "c_3":
                $('.overlay_tituloservicio').html("Habitat");
                $('.overlay_textoservicio').html("Habitat Habitat Habitat Habitat Habitat Habitat Habitat Habitat Habitat Habitat Habitat Habitat Habitat Habitat Habitat ")
            break;

            case "c_4":
                $('.overlay_tituloservicio').html("Holding");
                $('.overlay_textoservicio').html("Aunque nuestra experiencia nos ha llevado a especializarnos en el giro hotelero la estructura corporativa actual del grupo nos hace compatibles con empresas de cualquier giro para ofrecerles estrategias efectivas, analíticas y seguras sobre cómo operar la distribución de sus recursos a fin de maximizar su rendimiento, prever contingencias futuras, resguardar sus activos y garantizar el crecimiento constante de su patrimonio.")
            break;

            case "c_5":
                $('.overlay_tituloservicio').html("Personnel");
                $('.overlay_textoservicio').html("Personnel Personnel Personnel Personnel Personnel Personnel Personnel Personnel Personnel Personnel Personnel Personnel Personnel Personnel ")
            break;
            case "c_6":
                $('.overlay_tituloservicio').html("Media");
                $('.overlay_textoservicio').html("Media Media Media Media Media Media Media Media Media Media Media Media ")
            break;
        }




    }
);


$('#cerrar_advisors').click(
    function () {
        $('#overlay-advisors').toggleClass('overlay-advisors-mostrar');
        $('body').toggleClass('body_bloqueado');
        console.log("cerrado");
    });
















//Cuarta Seccion Luis Morales

(function ($, document) {
    let height = -1;

    $('.tab__content').each(function () {
        height = height > $(this).outerHeight() ? height : $(this).outerHeight();
        $(this).css('position', 'absolute');
    });
    $('[data-tabs]').css('min-height', height + 40 + 'px');

}(jQuery, document));

$('.brand-carousel').owlCarousel({
    loop: true,
    margin: 0,
    center: true,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive: {
        0: {
            items: 3
        },
        600: {
            items: 3
        },
        1000: {
            items: 8
        }
    }
});
$('.containerSectionCarousel').owlCarousel({
    autoplay: false,
    margin: 2,
    loop: false,
    responsive: {
        0: {
            items: 1
        },
        200: {
            items: 2
        },
        500: {
            items: 2
        }
    }
});
$('.containerCarousel').owlCarousel({
    loop: false,
    stagePadding: 50,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    nav: false,
    center: true,
    items: 1,
    responsive: {
        0: {
            items: 1,
            center: true,
            autoplay: false,
            stagePadding: 0,
            nav: true,
        },
        821: {
            center: true,
            items: 2,
            stagePadding: 0,
            loop: true,
            margin: 40,
        },
        1025: {
            items: 1
        }
    }
});
function postsCarousel() {
    var checkWidth = $(window).width();
    var owlPost = $(".containerLogos");
    if (checkWidth > 961) {
        if (typeof owlPost.data('owl.carousel') != 'undefined') {
            owlPost.data('owl.carousel').destroy();
        }
        owlPost.removeClass('owl-carousel');
    } else if (checkWidth < 960) {
        owlPost.addClass('owl-carousel');
        owlPost.owlCarousel({
            items: 1,
            slideSpeed: 500,
            animateOut: 'fadeOut',
            touchDrag: false,
            mouseDrag: false,
            autoplay: true,
            autoplaySpeed: 3000,
            autoplayTimeout: 2000,
            dots: false,
            loop: true,
            responsive: {
                0: {
                    items: 1,
                    center: false,
                },
                560: {
                    center: false,
                    items: 2,
                    margin:200,
                }
            }
        });
    }
}

postsCarousel();
$(window).resize(postsCarousel);


function onScrollInit( items, trigger ) {
    items.each( function() {
      var osElement = $(this),
          osAnimationClass = osElement.attr('data-os-animation'),
          osAnimationDelay = osElement.attr('data-os-animation-delay');
        
          osElement.css({
            '-webkit-animation-delay':  osAnimationDelay,
            '-moz-animation-delay':     osAnimationDelay,
            'animation-delay':          osAnimationDelay
          });
  
          var osTrigger = ( trigger ) ? trigger : osElement;
          
          osTrigger.waypoint(function() {
            osElement.addClass('animated').addClass(osAnimationClass);
            },{
                triggerOnce: true,
                offset: '90%'
          });
    });
  }
    
   onScrollInit( $('.os-animation') );
   onScrollInit( $('.staggered-animation'), $('.staggered-animation-container') );