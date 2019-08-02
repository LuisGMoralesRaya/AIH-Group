$(document).ready(function () {
    $(".clickedArrow").click(function () {
        var attr = $(this).attr("m-active");
        var arrowType = $(this).attr("m-arrow");

        if (attr != "true") {
            $(".contenedor .contenido .arrows .arrow").attr("m-active", "false");
            $(this).attr("m-active", "true");
            if (arrowType == "down") {
                $(".contenedor .contenido .oneCol div h2")
                    .animate({ opacity: 0 }, 1000, function () {
                        $(this).html(
                            'Nueva Generación <img src="img/backgroundPages/generacionHistoria.png" />'
                        );
                    })
                    .animate({ opacity: 1 }, 1000);
                $(".contenedor .contenido .oneCol div p")
                    .animate({ opacity: 0 }, 1000, function () {
                        $(this).html(
                            "Hoy nuestro fundador Ramiro Guerrero continúa a la delantera de nuestro equipo permitiéndonos compartir conocimiento del entorno además de toda su experiencia en el rubro que actualmente se fusiona con la nueva generación, Ramiro Guerrero Carrillo, y su visión más moderna del entorno la cual equilibra el valor justo al beneficio social y las formas eficientes de hacer rentable el negocio sin perder de vista las necesidades del cliente. <br>Por años nuestra especialización en el ramo de la industria turística así como el posicionamiento en 15 de los destinos turísticos más importantes de México, Panamá y República Dominicana, nos ha permitido tener una visión 360 en este mercado haciéndonos expertos en el manejo de grandes cadenas empresariales, nacionales e internacionales, adicionalmente hemos participado como consultores en la más variada gama de industrias (industria restaurantera, sector petrolero, sector del entretenimiento, sector salud, maquiladoras, e industria vinícola) en México y América Latina. Hoy nos presentamos como un consorcio sólido con la capacidad de realizar una asesoría integral totalmente enfocada a la optimización de sus recursos de acuerdo a sus necesidades."
                        );
                    })
                    .animate({ opacity: 1 }, 1000);
            } else {
                $(".contenedor .contenido .oneCol div h2")
                    .animate({ opacity: 0 }, 1000, function () {
                        $(this).html(
                            'Fundación <img src="img/backgroundPages/flagHistoria.png" />'
                        );
                    })
                    .animate({ opacity: 1 }, 1000);
                $(".contenedor .contenido .oneCol div p")
                    .animate({ opacity: 0 }, 1000, function () {
                        $(this).html(
                            "A finales de los años 90 Ramiro Guerrero inició con la idea de aportar valor a las compañías y personal del rubro de los clubes vacacionales a través de la tercerización de servicios contables y eventualmente de nóminas, así como recursos humanos. Anteriormente los representantes de ventas de la industria hotelera no recibían ningún tipo de beneficios salvo el pago de sus comisiones. AIH nace con la intención de brindar estructura y además el acceso a beneficios sociales a empleados y fomentar el desarrollo de empresas más responsables en México, convirtiéndose así en la empresa pionera en servicios de outsourcing y tercerización del país."
                        );
                    })
                    .animate({ opacity: 1 }, 1000);
            }
        }
    });
    validatedContacto();
    $(".habitat .contenidos .filtros .proyecto").click(function () {
        var typeDiv = $(this).attr("id");
        if (typeDiv == "habitacional") {
            $(this).addClass("habitacional");
            $(".habitat .contenidos .filtros .proyecto").removeClass("corpotrativo");
            $("[m-type=corpotrativo]").fadeOut("slow");
            $("[m-type=habitacional]").fadeIn("slow");
        } else {
            $(this).addClass("corpotrativo");
            $(".habitat .contenidos .filtros .proyecto").removeClass("habitacional");
            $("[m-type=corpotrativo]").fadeIn("slow");
            $("[m-type=habitacional]").fadeOut("slow");
        }
        $(".habitat .contenidos .filtros .proyecto").attr("m-active", "false");
        $(this).attr("m-active", "true");
    });


});


function validatedContacto() {
    $("input").focusout(function () {
        var typeInput = $(this).attr("m-type");
        var valueCorrect = $(this).val();
        if (typeInput == "correo") {
            var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            if (!emailReg.test(valueCorrect) || valueCorrect.length == 0) {
                $(this).css("border-bottom", "1px solid red");
            } else {
                $(this).css("border-bottom", "1px solid green");
            }
        } else if (typeInput == "nombre") {
            if (valueCorrect.length >= 4 && valueCorrect.length <= 60) {
                $(this).css("border-bottom", "1px solid green");
            } else {
                $(this).css("border-bottom", "1px solid red");
            }
        } else if (typeInput == "telefono") {
            if (valueCorrect.length >= 10 && valueCorrect.length <= 20) {
                $(this).css("border-bottom", "1px solid green");
            } else {
                $(this).css("border-bottom", "1px solid red");
            }
        } else if (typeInput == "mensaje") {
            if (valueCorrect.length >= 10 && valueCorrect.length <= 200) {
                $(this).css("border-bottom", "1px solid green");
            } else {
                $(this).css("border-bottom", "1px solid red");
            }
        }

    });
}

var images = [
    "carouselHistoria2.jpg",
    "carouselHistoria3.jpg",
    "carouselHistoria1.jpg"
],
    index = 0, // starting index
    maxImages = images.length - 1;
var timer = setInterval(function () {
    var currentImage = images[index];
    index = index == maxImages ? 0 : ++index;
    $(".carouselHistoria img").fadeOut(200, function () {
        $(".carouselHistoria img").attr(
            "src",
            "img/backgroundPages/" + currentImage
        );
        $(".carouselHistoria img").fadeIn(200);
    });
}, 2500);

(function () {
    $("#Form")
        .find("input")
        .each(function () {
            $(this).on("change", function () {
                $this = $(this);
                if (this.value !== "") {
                    $this.addClass("filled");
                } else {
                    $this.removeClass("filled");
                }
            });
        });
})();
var carouselHabitat = $(".modalHabitad-slider");


$(".right-control").on('click', function () {
    carouselHabitat.trigger('next.owl.carousel');
});
$(".left-control").on('click', function () {
    carouselHabitat.trigger('prev.owl.carousel');
});
$(".habitat .contenidos .noticias .new").click(function () {

    $(".modalHabitad").attr("m-active", "true");

    var proyecto = $(this).attr("m-proyecto");
    var folder = "";
    switch (proyecto) {
        case "casapichilingue":
            folder = "img/backgroundPages/habitat/proyectos/casa-pichilingue/";
            $("#tituloProyecto").html('Ampliación Residencia de Acapulco');
            $("#textoProyecto").html('Remodelación y levantamiento de piso superior en casa vacacional en exclusivo condominio de Pichilingue Acapulco.');
            $("#area").html('<span class="area">ÁREA</span> 328.90 M<sup>2</sup>');
            $("#tipo").html('<span class="tipo">TIPO</span> DEPARTAMENTO');
            $("#anio").html('<span class="anio">AÑO PROYECTO</span> 2018');
            $("#ubicacion").html('<span class="ubicacion">UBICACIÓN</span> Amores 1120, Col del Valle Centro, 03100 Ciudad de México, CDMX');
            break;
        case "casagrande":
            folder = "img/backgroundPages/habitat/proyectos/casagrande/";
            $("#tituloProyecto").html('Remodelación Casas Grandes');
            $("#textoProyecto").html('Remodelación y restauración  total de un espacio unifamiliar de 3 niveles para vivienda  con acabados de lujo.');
            $("#area").html('<span class="area">ÁREA</span> 315 M<sup>2</sup>');
            $("#tipo").html('<span class="tipo">TIPO</span> Vivienda Residencial');
            $("#anio").html('<span class="anio">AÑO PROYECTO</span> 2018');
            $("#ubicacion").html('<span class="ubicacion">UBICACIÓN</span> Casas Grandes 127 Narvarte Oriente CP 03020 Benito Juárez, Ciudad de México');
            break;
        case "sanrafael1073":
            folder = "img/backgroundPages/habitat/proyectos/sanrafael1073/";
            $("#tituloProyecto").html('Casa El Rodeo II');
            $("#textoProyecto").html('');
            $("#area").html('<span class="area">ÁREA</span> 363 M<sup>2</sup>');
            $("#tipo").html('<span class="tipo">TIPO</span> Casa Habitación');
            $("#anio").html('<span class="anio">AÑO PROYECTO</span> 2019');
            $("#ubicacion").html('<span class="ubicacion">UBICACIÓN</span> San Rafael Atlixco 1073 Colonia El Rodeo CP 08510 Iztacalco, Ciudad de México');
            break;
        case "sanrafael1078":
            folder = "img/backgroundPages/habitat/proyectos/sanrafael1078/";
            $("#tituloProyecto").html('Casa El Rodeo I');
            $("#textoProyecto").html('');
            $("#area").html('<span class="area">ÁREA</span> 62 M<sup>2</sup>');
            $("#tipo").html('<span class="tipo">TIPO</span> Casa Habitación');
            $("#anio").html('<span class="anio">AÑO PROYECTO</span> 2015');
            $("#ubicacion").html('<span class="ubicacion">UBICACIÓN</span> San Rafael Atlixco 1078 Colonia El Rodeo CP 08510 Iztacalco, Ciudad de México');
            break;
        case "amores":
            folder = "img/backgroundPages/habitat/proyectos/amores/";
            $("#tituloProyecto").html('');
            $("#textoProyecto").html('');
            $("#area").html('<span class="area">ÁREA</span> 62 M<sup>2</sup>');
            $("#tipo").html('<span class="tipo">TIPO</span> Casa Habitación');
            $("#anio").html('<span class="anio">AÑO PROYECTO</span> 2015');
            $("#ubicacion").html('<span class="ubicacion">UBICACIÓN</span> San Rafael Atlixco 1078 Colonia El Rodeo CP 08510 Iztacalco, Ciudad de México');
            break;
        case "patricio":
            folder = "img/backgroundPages/habitat/proyectos/patricio/";
            $("#tituloProyecto").html('Call Center Patricio Sanz');
            $("#textoProyecto").html('');
            $("#area").html('<span class="area">ÁREA</span> 608 M<sup>2</sup>');
            $("#tipo").html('<span class="tipo">TIPO</span> Call Center');
            $("#anio").html('<span class="anio">AÑO PROYECTO</span> 2019');
            $("#ubicacion").html('<span class="ubicacion">UBICACIÓN</span> Patricio Sanz 1609 Colonia del Valle Sur CP 03100 Benito Juárez, Ciudad de México');
            break;
        case "polotitlan":
            folder = "img/backgroundPages/habitat/proyectos/polotitlan/";
            $("#tituloProyecto").html('Proyecto Invernaderos Polotitlán');
            $("#textoProyecto").html('');
            $("#area").html('<span class="area">ÁREA</span> 20 has');
            $("#tipo").html('<span class="tipo">TIPO</span> Invernaderos');
            $("#anio").html('<span class="anio">AÑO PROYECTO</span> 2019');
            $("#ubicacion").html('<span class="ubicacion">UBICACIÓN</span> Municipio de Polotitlán');
            break;
        default:
            folder = "img/backgroundPages/habitat/proyectos/";
    }
    $.ajax({
        url : folder,
        success: function (data) {
            $(data).find("a").attr("href", function (i, val) {
                if( val.match(/\.(jpg|png|gif)$/) ) { 
                    $(".modalHabitad-slider").append( "<div class='item'><img class='item' src='"+ folder + val +"'></div>" );
                } 
            });
            carouselHabitat.owlCarousel({
                loop:false,
                //autoplay:true,
                nav:true,
                animateIn: 'fadeIn',
                items:1
            });
        }
    });
    var heightSection = $(".habitat").height();
    console.log(heightSection)
    $(".modalHabitad").css("height",heightSection+"px")
    $(".modalHabitad").css("min-height",heightSection+"px")
});
$(".modalHabitad-closeModal").click(function () {
    $(".modalHabitad").attr("m-active", "false");
    carouselHabitat.owlCarousel('destroy'); 
    $(".modalHabitad-slider").html(" ")
});
$(window).resize(function(){
    var heightSection = $(".habitat").height();
    console.log(heightSection)
    $(".modalHabitad").css("height",heightSection+"px")
    $(".modalHabitad").css("min-height",heightSection+"px")
});