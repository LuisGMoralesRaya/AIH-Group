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

$(function() {
    controller = new ScrollMagic.Controller({
        loglevel: 3
    });

    /* ------------------------    Slider 1 */

    var scene = new ScrollMagic.Scene({
            triggerElement: '#seccion2',
            offset: -470,
            triggerHook: 0.5,
            //  duration: "100%"
            reverse: true
        })
        .setClassToggle('.cuadroescondido', 'cuadrovisible')
        .addTo(controller);

    /* ------------------------    Slider 1 */
    /* Texto slider 1 */
    var scene1 = new ScrollMagic.Scene({
            triggerElement: '#seccion2',
            offset: -470,
            triggerHook: 0.5,
            reverse: true
        })
        .setClassToggle('.owl-slide-title', 'owl-slide-text-desaparecer')
        .addTo(controller);

    /* Linea 1 slider 1 */
    var scene2 = new ScrollMagic.Scene({
            triggerElement: '#seccion2',
            offset: -470,
            triggerHook: 0.5,
            reverse: true
        })
        .setClassToggle('.S1_linea1', 'S1_linea1-oculta')
        .addIndicators()
        .addTo(controller);

    /* Linea 0 slider 1 */
    var scene2_0 = new ScrollMagic.Scene({
            triggerElement: '#seccion2',
            offset: -470,
            triggerHook: 0.5,
            reverse: true
        })
        .setClassToggle('.S1_linea0', 'S1_linea0-oculta')
        .addIndicators()
        .addTo(controller);

    /* Linea 2 slider 1 */
    var scene2 = new ScrollMagic.Scene({
            triggerElement: '#seccion2',
            offset: -470,
            triggerHook: 0.5,
            reverse: true
        })
        .setClassToggle('.S1_linea2', 'S1_linea2-oculta')
        .addIndicators()
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
        .addIndicators()
        .addTo(controller);

    /* Mostrar linea empresa */
    var scene4 = new ScrollMagic.Scene({
            triggerElement: '#iconoempresa',
            offset: -150,
            triggerHook: 0.5,
            reverse: true
        })
        .setClassToggle('.lineaempresa', 'abrirlinea')
        .addIndicators()
        .addTo(controller);

    /* Mostrar texto botones empresa */
    var scene4 = new ScrollMagic.Scene({
            triggerElement: '#iconoempresa',
            offset: -125,
            triggerHook: 0.5,
            reverse: true
        })
        .setClassToggle('.button_slide', 'button_slide_mostrar')
        .addIndicators()
        .addTo(controller);

});

/* Efecto parallax de con scrollmagic (Triangulos) */

function parallax() {
    var parallaxController = new ScrollMagic.Controller({ globalSceneOptions: { triggerHook: "onEnter", duration: "200%" } });
    $('.parallax').each(function() {
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
    setTimeout(() => {}, 50);
});

/* 
------------- Botones subslider blur
*/

$(document).ready(function() {
    $('.customNextBtn').click(function() {
        $owlCarousel.trigger('next.owl.carousel', [100]);
    })
});



/* 
-----------------------------------------------------------
----------------------------------------------------------- Efecto blur slider
-----------------------------------------------------------
*/

var pxlCount = 0;
$(window).on('scroll', function() {
    pxlCount = $(document).scrollTop() / 5;
    $(".wrapper").css({ "-webkit-filter": "blur(" + pxlCount + "px)", "-moz-filter": "blur(" + pxlCount + "px)", "filter": "blur(" + pxlCount + "px)" });

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
$('#toggle').click(function() {

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

$('#toggle-formulario').click(function() {

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
    function() {
        $('#ventanahistoria').toggleClass('abierta');
        $('#img_historia').toggleClass('imagenhistoria');
        $('#titulohistoria').toggleClass('mostrartitulohistoria');
        $('body').toggleClass('body_bloqueado');
        cajahistoria.scrollTop = scrollinicio;
    });

$('#btn_cerrarhistoria').click(
    function() {
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

btn_scrolldown.onclick = function() {
    scrollinicio += 40;
    cajahistoria.scrollTop = scrollinicio;
};

btn_scrollup.onclick = function() {
    scrollinicio -= 40;
    cajahistoria.scrollTop = scrollinicio;
    console.log(scrollinicio);
};


/* ----------------------------------------------- Ventana de estatutos  ----------------------  */

$('#btn_estatutos').click(
    function() {
        $('#ventanaestatutos').toggleClass('abiertaestatutos');
        $('body').toggleClass('body_bloqueado');
    });

$('#btn_cerrarestatutos').click(
    function() {
        $('#ventanaestatutos').toggleClass('abiertaestatutos');
        $('body').toggleClass('body_bloqueado');
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
      loop:true,
      margin:200,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          420:{
              items:2
          },
          670:{
            items:3
          },
          940:{
            items:4
          },
          1500:{
            items:5
        }
      }
  })


/*--------------------------  Efecto parallax con TweenMax --------------------------- */


var rect = $('#container')[0].getBoundingClientRect();
var mouse = { x: 0, y: 0, moved: false };

$("#container").mousemove(function(e) {
    mouse.moved = true;
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
});

// Ticker event will be called on every frame
TweenLite.ticker.addEventListener('tick', function() {
    if (mouse.moved) {
        parallaxIt(".slide", -100);
        parallaxIt("img", -30);
    }
    mouse.moved = false;
});

function parallaxIt(target, movement) {
    TweenMax.to(target, 0.3, {
        x: (mouse.x - rect.width / 2) / rect.width * movement,
        y: (mouse.y - rect.height / 2) / rect.height * movement
    });
}

$(window).on('resize scroll', function() {
    rect = $('#container')[0].getBoundingClientRect();
});