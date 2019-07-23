$(document).ready(function() { 
    $(".clickedArrow").click(function() { 
        var attr = $(this).attr('m-active');
        var arrowType = $(this).attr('m-arrow');

        if(attr != "true"){
            $(".contenedor .contenido .arrows .arrow").attr("m-active", "false");
            $(this).attr("m-active", "true");
            if(arrowType == "down"){
                $('.contenedor .contenido .oneCol div h2').animate({'opacity': 0}, 1000, function () {
                    $(this).html('Nueva Generación <img src="img/backgroundPages/generacionHistoria.png" />');
                }).animate({'opacity': 1}, 1000);
                $('.contenedor .contenido .oneCol div p').animate({'opacity': 0}, 1000, function () {
                    $(this).html('Hoy nuestro fundador Ramiro Guerrero continúa a la delantera de nuestro equipo permitiéndonos compartir conocimiento del entorno además de toda su experiencia en el rubro que actualmente se fusiona con la nueva generación, Ramiro Guerrero Carrillo, y su visión más moderna del entorno la cual equilibra el valor justo al beneficio social y las formas eficientes de hacer rentable el negocio sin perder de vista las necesidades del cliente. <br>Por años nuestra especialización en el ramo de la industria turística así como el posicionamiento en 15 de los destinos turísticos más importantes de México, Panamá y República Dominicana, nos ha permitido tener una visión 360 en este mercado haciéndonos expertos en el manejo de grandes cadenas empresariales, nacionales e internacionales, adicionalmente hemos participado como consultores en la más variada gama de industrias (industria restaurantera, sector petrolero, sector del entretenimiento, sector salud, maquiladoras, e industria vinícola) en México y América Latina. Hoy nos presentamos como un consorcio sólido con la capacidad de realizar una asesoría integral totalmente enfocada a la optimización de sus recursos de acuerdo a sus necesidades.');
                }).animate({'opacity': 1}, 1000);
            }else{
                $('.contenedor .contenido .oneCol div h2').animate({'opacity': 0}, 1000, function () {
                    $(this).html('Fundación <img src="img/backgroundPages/flagHistoria.png" />');
                }).animate({'opacity': 1}, 1000);
                $('.contenedor .contenido .oneCol div p').animate({'opacity': 0}, 1000, function () {
                    $(this).html('A finales de los años 90 Ramiro Guerrero inició con la idea de aportar valor a las compañías y personal del rubro de los clubes vacacionales a través de la tercerización de servicios contables y eventualmente de nóminas, así como recursos humanos. Anteriormente los representantes de ventas de la industria hotelera no recibían ningún tipo de beneficios salvo el pago de sus comisiones. AIH nace con la intención de brindar estructura y además el acceso a beneficios sociales a empleados y fomentar el desarrollo de empresas más responsables en México, convirtiéndose así en la empresa pionera en servicios de outsourcing y tercerización del país.');
                }).animate({'opacity': 1}, 1000);
            }
        }else{
            console.log("jaja tonto")
        }
        // $(".contenedor .contenido .arrows .arrow").attr("m-active", "false");
        // $(this).attr("m-active", "true");

       
       
        
        
    }); 
}); 


var images = ['carouselHistoria2.jpg','carouselHistoria3.jpg','carouselHistoria1.jpg'],
    index = 0, // starting index
    maxImages = images.length - 1;
var timer = setInterval(function() {
    var currentImage = images[index];
    index = (index == maxImages) ? 0 : ++index;
    $('.carouselHistoria img').fadeOut(200, function() {
        $('.carouselHistoria img').attr("src", 'img/backgroundPages/'+currentImage);
        $('.carouselHistoria img').fadeIn(200);
    });
 }, 2500);