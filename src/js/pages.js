$(document).ready(function () {
    $(".textoFlip").mouseenter(function () {
        $(this).attr('src', 'img/error/textoRosa.png');
    });
    $(".textoFlip").mouseleave(function () {
        $(this).attr('src', 'img/error/textoAzul.png');
    });
    validatedContacto();
    getFeedBlog();
    //runSliderHabitat();
    var checkWidth = $(window).width();
    if (checkWidth > 613) {
        $(".habitat .contenidos .filtros .proyecto").click(function () {
            var typeDiv = $(this).attr("id");
            console.log(typeDiv)
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
    }
    $(document).on("click", ".textoTab", showTabs);
    $(document).on("click", ".containerNewPages .tabs-tabItem .filtro", tabsHabitat);
    $(document).on("click", ".containerNewPages .tabs-content-item", openModalHabitat);
    $(document).on("click", ".modalHabitat-close span", closeModal);
    $(document).on("click", ".pageContacto-mapa-pais .item-titulo", clickContact);
    $(document).on("click", ".pageContacto-mapa-pais .item ul li", clickContactMexico);

});

function getFeedBlog() {
    var urlBlog = window.location.pathname;
    var blogContent = "";
    var isCarousel = false;
    var feedURL = "https://aihgroup.com.mx/blog/feed/";
    $.ajax({
        type: 'GET',
        url: "https://api.rss2json.com/v1/api.json?rss_url=" + feedURL,
        dataType: 'jsonp',
        success: function (result) {
            var item = result.items;
            for (var i = 0; i < result.items.length && i < 20; i++) {
                var item = result.items[i];
                //console.log(item);
                var counItem = result.items;
                if (urlBlog == "/servicios-aih-advisors.html") {
                    if (item.categories[0] == "advisors") {
                        if (i >= 0) {
                            blogContent += '<div class="itemCarousel">';
                            blogContent += '<a href="' + item.link + '" target="_blank" class="item">';
                            blogContent += '<img src="' + item.enclosure.link + '" class="item-img">';
                            blogContent += '<h3 class="tituloBlog">' + item.title + '</h3>';
                            var textDescriptio = $(item.content + "p:first").text();
                            //console.log(textDescriptio)
                            blogContent += '<div class="textoBlog">' + textDescriptio + '</div>';
                            blogContent += '<div m-page="advisors" class="linkBlog" onclick="window.open("' + item.link + '","mywindow");">Ver más</div>';
                            blogContent += '</a>';
                            blogContent += '</div>';
                            if (item >= 3) {
                                isCarousel == true;
                                $(".blogFeedSeccion").attr("m-carousel", "true");
                            }
                        } else {
                            $(".blogFeedSeccion").hide();
                        }
                    }
                } else if (urlBlog == "/servicios-aih-personnel.html") {
                    if (item.categories[0] == "personnel") {
                        if (i >= 0) {
                            blogContent += '<div class="itemCarousel">';
                            blogContent += '<a href="' + item.link + '" target="_blank" class="item">';
                            blogContent += '<img src="' + item.enclosure.link + '" class="item-img">';
                            blogContent += '<h3 class="tituloBlog">' + item.title + '</h3>';
                            var textDescriptio = $(item.content + "p:first").text();
                            //console.log(textDescriptio)
                            blogContent += '<div class="textoBlog">' + textDescriptio + '</div>';
                            blogContent += '<div m-page="personnel" class="linkBlog" onclick="window.open("' + item.link + '","mywindow");">Ver más</div>';
                            blogContent += '</a>';
                            blogContent += '</div>';
                            if (item >= 3) {
                                isCarousel == true;
                                $(".blogFeedSeccion").attr("m-carousel", "true");
                            }
                        } else {
                            $(".blogFeedSeccion").hide();
                        }
                    }
                } else if (urlBlog == "/servicios-aih-capital.html") {
                    if (item.categories[0] == "capital") {
                        if (i >= 0) {
                            blogContent += '<div class="itemCarousel">';
                            blogContent += '<a href="' + item.link + '" target="_blank" class="item">';
                            blogContent += '<img src="' + item.enclosure.link + '" class="item-img">';
                            blogContent += '<h3 class="tituloBlog">' + item.title + '</h3>';
                            var textDescriptio = $(item.content + "p:first").text();
                            //console.log(textDescriptio)
                            blogContent += '<div class="textoBlog">' + textDescriptio + '</div>';
                            blogContent += '<div m-page="capital" class="linkBlog" onclick="window.open("' + item.link + '","mywindow");">Ver más</div>';
                            blogContent += '</a>';
                            blogContent += '</div>';
                            if (item >= 3) {
                                isCarousel == true;
                                $(".blogFeedSeccion").attr("m-carousel", "true");
                            }
                        } else {
                            $(".blogFeedSeccion").hide();
                        }
                    }
                } else if (urlBlog == "/servicios-aih-holding.html") {
                    if (item.categories[0] == "holding") {
                        if (i >= 0) {
                            blogContent += '<div class="itemCarousel">';
                            blogContent += '<a href="' + item.link + '" target="_blank" class="item">';
                            blogContent += '<img src="' + item.enclosure.link + '" class="item-img">';
                            blogContent += '<h3 class="tituloBlog">' + item.title + '</h3>';
                            var textDescriptio = $(item.content + "p:first").text();
                            //console.log(textDescriptio)
                            blogContent += '<div class="textoBlog">' + textDescriptio + '</div>';
                            blogContent += '<div m-page="holding" class="linkBlog" onclick="window.open("' + item.link + '","mywindow");">Ver más</div>';
                            blogContent += '</a>';
                            blogContent += '</div>';
                            if (item >= 3) {
                                isCarousel == true;
                                $(".blogFeedSeccion").attr("m-carousel", "true");
                            }
                        } else {
                            $(".blogFeedSeccion").hide();
                        }
                    }
                } else if (urlBlog == "/servicios-aih-media.html") {
                    if (item.categories[0] == "media") {
                        if (i >= 0) {
                            blogContent += '<div class="itemCarousel">';
                            blogContent += '<a href="' + item.link + '" target="_blank" class="item">';
                            blogContent += '<img src="' + item.enclosure.link + '" class="item-img">';
                            blogContent += '<h3 class="tituloBlog">' + item.title + '</h3>';
                            var textDescriptio = $(item.content + "p:first").text();
                            //console.log(textDescriptio)
                            blogContent += '<div class="textoBlog">' + textDescriptio + '</div>';
                            blogContent += '<div m-page="media" class="linkBlog" onclick="window.open("' + item.link + '","mywindow");">Ver más</div>';
                            blogContent += '</a>';
                            blogContent += '</div>';
                            if (item >= 3) {
                                isCarousel == true;
                                $(".blogFeedSeccion").attr("m-carousel", "true");
                            }
                        } else {
                            $(".blogFeedSeccion").hide();
                        }
                    }
                } else if (urlBlog == "/servicios-aih-habitat.html") {
                    if (item.categories[0] == "habitat") {
                        console.log(i)
                        if (i >= 0) {
                            blogContent += '<div class="itemCarousel">';
                            blogContent += '<a href="' + item.link + '" target="_blank" class="item">';
                            blogContent += '<img src="' + item.enclosure.link + '" class="item-img">';
                            blogContent += '<h3 class="tituloBlog">' + item.title + '</h3>';
                            var textDescriptio = $(item.content + "p:first").text();
                            //console.log(textDescriptio)
                            blogContent += '<div class="textoBlog">' + textDescriptio + '</div>';
                            blogContent += '<div m-page="habitat" class="linkBlog" onclick="window.open("' + item.link + '","mywindow");">Ver más</div>';
                            blogContent += '</a>';
                            blogContent += '</div>';
                            if (item >= 3) {
                                isCarousel == true;
                                $(".blogFeedSeccion").attr("m-carousel", "true");
                            }
                        } else {
                            $(".blogFeedSeccion").hide();
                        }
                    }
                }
            }
            $(".blogFeedSeccion-post").html(blogContent);
            function runBlogCarousel() {
                $('.blogFeedSeccion-post').slick({
                    centerMode: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: false,
                    autoplaySpeed: 1500,
                    arrows: false,
                    dots: false,
                    pauseOnHover: false,
                    responsive: [
                        {
                            breakpoint: 1300,
                            settings: {
                                slidesToShow: 2
                            }
                        }, {
                            breakpoint: 767,
                            settings: {
                                slidesToShow: 1
                            }
                        }]
                });
            }
            if (isCarousel == true) {
                setTimeout(runBlogCarousel, 3000);
            }
        }
    });
}
function showTabs() {

    var url = window.location.pathname;
    var nameFolder = "";
    if (url == "/servicios-aih-advisors.html") {
        nameFolder = "advisors";
    } else if (url == "/servicios-aih-personnel.html") {
        nameFolder = "personnel";
    } else if (url == "/servicios-aih-capital.html") {
        nameFolder = "capital";
    } else if (url == "/servicios-aih-holding.html") {
        nameFolder = "holding";
    } else if (url == "/servicios-aih-media.html") {
        nameFolder = "media";
    } else if (url == "/servicios-aih-habitat.html") {
        nameFolder = "habitat";
    }
    $('.textoTab').attr("m-active", "false");
    $(this).attr("m-active", "true");
    var numberTab = $(this).attr("m-position");
    if (numberTab = numberTab) {
        var tabContent = $("#position" + numberTab);
        $(".contentTab").attr("m-show", false);
        tabContent.attr("m-show", true);
        //Change Image Servicio
        var imgServicio = $("#imgServicio");
        imgServicio.attr("src", "img/newPages/" + nameFolder + "/servicio" + numberTab + ".jpg");
    }
}
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
function tabsHabitat(){
    $(".containerNewPages .tabs-tabItem .filtro").attr("m-active","false");
    $(this).attr("m-active","true");
    var tipoProyecto =  $(this).attr("m-tipo");
    console.log(tipoProyecto);
    if(tipoProyecto == "habitacional"){
        $("[m-proyecto='habitacional']").fadeOut();
        $("[m-proyecto='corporativo']").fadeIn();
    }else if(tipoProyecto == "corporativo"){
        $("[m-proyecto='corporativo']").fadeOut();
        $("[m-proyecto='habitacional']").fadeIn();
    }
    
}
function openModalHabitat() {
    var nameProyect = $(this).attr("m-nameProyecto");
    console.log(nameProyect);
    $(".modalHabitat").attr("m-open","true");
    if(nameProyect == "aihgroup"){
        $(".modalHabitat .containerTextos-titulo").html("AIH Group");
        $(".modalHabitat .containerTextos-ubicacion").html("Ciudad de México");
        $(".modalHabitat .containerTextos-descripcion").html("<p>AIH Group cuenta con una identidad empresarial profesional y elegante, que requiere compartir y transmitir  a sus visitantes. Para lograrlo, se integraron los acabados del diseño con los espacios del edificio, logrando una imagen fresca que se percibe desde la recepción.</p> <p>En nuestras oficinas logramos diseñar zonas que transmiten la imagen personalizada, cercana y transparente del grupo, con accesos traslúcidos y detalles naturales colocados en el interior de las instalaciones, mismos que fomentan la eficiencia y el profesionalismo que nos caracterizan.</p>");
        $(".modalHabitat .containerTextos-detalles").html("<p><b>Típo:</b> Corporativo</p>");
        $(".modalHabitat .containerSlider .slider").html();
        $(".modalHabitat .containerSlider .slider").append( "<img src='/img/proyectosHabitat/aihgroup/1.jpg' />" );
        $(".modalHabitat .containerSlider .slider").append( "<img src='/img/proyectosHabitat/aihgroup/2.jpg' />" );
        $(".modalHabitat .containerSlider .slider").append( "<img src='/img/proyectosHabitat/aihgroup/3.jpg' />" );
        $(".modalHabitat .containerSlider .slider").append( "<img src='/img/proyectosHabitat/aihgroup/4.jpg' />" );
        $(".modalHabitat .containerSlider .slider").append( "<img src='/img/proyectosHabitat/aihgroup/5.jpg' />" );
        $(".modalHabitat .containerSlider .slider").append( "<img src='/img/proyectosHabitat/aihgroup/6.jpg' />" );
        $(".modalHabitat .containerSlider .slider").append( "<img src='/img/proyectosHabitat/aihgroup/7.jpg' />" );
        $(".modalHabitat .containerSlider .slider").append( "<img src='/img/proyectosHabitat/aihgroup/8.jpg' />" );
        $(".modalHabitat .containerSlider .slider").append( "<img src='/img/proyectosHabitat/aihgroup/9.jpg' />" );
        setTimeout(function(){
            runSliderHabitat();
          }, 1500);
        /* folder = "/img/proyectosHabitat/aihgroup/";
        $.ajax({
            url : folder,
            success: function (data) {
                $(data).find("a").attr("href", function (i, val) {
                    if( val.match(/\.(jpg|jpeg|svg|png|gif)$/) ) {
                        $(".modalHabitat .containerSlider .slider").append( "<img src="+ folder + val +" />" );
                    }
                });
                setTimeout(function(){
                    runSliderHabitat();
                  }, 1500);
            }
        }); */
    }else if(nameProyect == "casasGrandes"){
        $(".modalHabitat .containerTextos-titulo").html("Casas Grandes");
        $(".modalHabitat .containerTextos-ubicacion").html("Ciudad de México");
        $(".modalHabitat .containerTextos-descripcion").html("<p>Este proyecto abarcó una remodelación completa de la residencia, al conservar los espacios originales, se tuvo la oportunidad de mejorar la experiencia y comodidad con acabados de estilo contemporáneo para ofrecer una mayor tranquilidad se reforzaron importantes puntos de seguridad; se adaptó un roof garden y se anexaron áreas verdes que aportan mayor exclusividad y plusvalía a la residencia.</p>");
        $(".modalHabitat .containerTextos-detalles").html("<p><b>Típo:</b> Residencial</p>");
        $(".modalHabitat .containerSlider .slider").html();
        $(".modalHabitat .containerSlider .slider").append( "<img src='/img/proyectosHabitat/casas-grande/1.jpg' />" );
        $(".modalHabitat .containerSlider .slider").append( "<img src='/img/proyectosHabitat/casas-grande/2.jpg' />" );
        $(".modalHabitat .containerSlider .slider").append( "<img src='/img/proyectosHabitat/casas-grande/3.jpg' />" );
        $(".modalHabitat .containerSlider .slider").append( "<img src='/img/proyectosHabitat/casas-grande/4.jpg' />" );
        $(".modalHabitat .containerSlider .slider").append( "<img src='/img/proyectosHabitat/casas-grande/5.jpg' />" );
        setTimeout(function(){
            runSliderHabitat();
          }, 1500);

    }else if(nameProyect == "room1078"){
        $(".modalHabitat .containerTextos-titulo").html("Room 1078");
        $(".modalHabitat .containerTextos-ubicacion").html("Ciudad de México");
        $(".modalHabitat .containerTextos-descripcion").html("<p>La estancia nace de la idea de proponer un sitio agradable y acondicionado a estudiantes que compagine con las exigencias diarias de la vida universitaria. Sus habitaciones fueron acondicionadas para tener un cómodo descanso con la privacidad adecuada, cuenta con áreas compartidas que promueven la convivencia e integración, en un ambiente donde el estilo arquitectónico armoniza los acabados con los aspectos naturales y artificiales propuestos.</p>");
        $(".modalHabitat .containerTextos-detalles").html("<p><b>Típo:</b> Estancia para estudiantes</p>");
        $(".modalHabitat .containerSlider .slider").html();
        $(".modalHabitat .containerSlider .slider").append( "<img src='/img/proyectosHabitat/room1078/1.png' />" );
        $(".modalHabitat .containerSlider .slider").append( "<img src='/img/proyectosHabitat/room1078/2.jpg' />" );
        $(".modalHabitat .containerSlider .slider").append( "<img src='/img/proyectosHabitat/room1078/3.jpg' />" );
        $(".modalHabitat .containerSlider .slider").append( "<img src='/img/proyectosHabitat/room1078/4.jpg' />" );
        $(".modalHabitat .containerSlider .slider").append( "<img src='/img/proyectosHabitat/room1078/5.jpg' />" );
        $(".modalHabitat .containerSlider .slider").append( "<img src='/img/proyectosHabitat/room1078/6.jpg' />" );
        $(".modalHabitat .containerSlider .slider").append( "<img src='/img/proyectosHabitat/room1078/7.png' />" );
        setTimeout(function(){
            runSliderHabitat();
          }, 1500);
    }
}
function closeModal(){
    $('.slider').slick('unslick');
    $(".modalHabitat").attr("m-open","false");
    $(".modalHabitat .containerTextos-titulo").html("");
        $(".modalHabitat .containerTextos-ubicacion").html("");
        $(".modalHabitat .containerTextos-descripcion").html("");
        $(".modalHabitat .containerTextos-detalles").html("");
        $(".modalHabitat .containerSlider .slider").html("");
}
function runSliderHabitat(){
    $('.slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        responsive: [{
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
           breakpoint: 400,
           settings: {
              arrows: false,
              slidesToShow: 1,
              slidesToScroll: 1
           }
        }]
    });
}
function clickContact(){
    $(".pageContacto-mapa-pais .item-titulo").closest(".item").attr("m-active","false");
    $(this).closest(".item").attr("m-active","true");
    var pais = $(this).attr("m-pais");
    if(pais == "republicaDominicana"){
        $("#direccionContacto").html("Aqua Business Center: Blvd. 1ro. de Noviembre, Punta Cana 23000, República Dominicana.");
        $("#telefonoContacto").html("<a href='tel:+18097959942'>(+1) 809 795 9942</a>");
        $(".mexicoList").fadeOut();
        $("#cdmxMapa").hide();
        $("#guadalajaraMapa").hide();
        $("#quintanaMapa").hide();
        $("#republicaMapa").hide();
        $("#panamaMapa").hide();
        $("#republicaMapa").show();
    }else if(pais == "panama"){
        $("#direccionContacto").html("Av. Manuel Espinosa Batista, Antiguo edificio NCR piso 1 oficina 3 en Panamá.");
        $("#telefonoContacto").html("<a href='tel:+5073888950'>(+507) 388 8950</a>");
        $(".mexicoList").fadeOut();
        $("#cdmxMapa").hide();
        $("#guadalajaraMapa").hide();
        $("#quintanaMapa").hide();
        $("#republicaMapa").hide();
        $("#panamaMapa").show();
        $("#republicaMapa").hide();
    }else if(pais == "mexico"){
        $(".pageContacto-mapa-pais .item ul li").attr("m-active","false");
        $(".pageContacto-mapa-pais .item ul li").first().attr("m-active","true");
        $("#direccionContacto").html("Amores 1120, Corporativo Amores, Piso 2 oficina 202, Ciudad de México.");
        $("#telefonoContacto").html("<a href='tel:+525541983819'>(+52) 554 198 3819</a>");
        $("#cdmxMapa").show();
        $("#guadalajaraMapa").hide();
        $("#quintanaMapa").hide();
        $("#republicaMapa").hide();
        $("#panamaMapa").hide();
        $("#republicaMapa").hide();
        $(".mexicoList").fadeIn();
    }
}
function clickContactMexico(){
    $(".pageContacto-mapa-pais .item ul li").attr("m-active","false");
    $(this).attr("m-active","true");
    var estado = $(this).attr("m-estado");
    if(estado == "cdmx"){
        $("#direccionContacto").html("Amores 1120, Corporativo Amores, Piso 2 oficina 202, Ciudad de México.");
        $("#telefonoContacto").html("<a href='tel:+525541983819'>(+52) 554 198 3819</a>");
        $("#cdmxMapa").show();
        $("#guadalajaraMapa").hide();
        $("#quintanaMapa").hide();
        $("#republicaMapa").hide();
        $("#panamaMapa").hide();
        $("#republicaMapa").hide();
    }else if(estado == "guadalajara"){
        $("#direccionContacto").html("Punto Sao Paulo, Torre HSBC, Piso 4-E, Guadalajara, Jalisco.");
        $("#telefonoContacto").html("<a href='tel:+52332 736 4982'>(+52) 332 736 4982</a>");
        $("#cdmxMapa").hide();
        $("#guadalajaraMapa").show();
        $("#quintanaMapa").hide();
        $("#republicaMapa").hide();
        $("#panamaMapa").hide();
        $("#republicaMapa").hide();
    }else if(estado == "quintanaRoo"){
        $("#direccionContacto").html("Av. Xel-Ha Mza 04 Lote 06 D3 No.2 SM 26, Cancún, Quintana Roo.");
        $("#telefonoContacto").html("<a href='tel:+529982521518'>(+52) 998 252 1518</a>");
        $("#cdmxMapa").hide();
        $("#guadalajaraMapa").hide();
        $("#quintanaMapa").show();
        $("#republicaMapa").hide();
        $("#panamaMapa").hide();
        $("#republicaMapa").hide();
    }
}
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


/* var images = [
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
}, 2500); */

/* var carouselHabitat = $(".modalHabitad-slider");


$(".right-control").on('click', function () {
    carouselHabitat.trigger('next.owl.carousel');
});
$(".left-control").on('click', function () {
    carouselHabitat.trigger('prev.owl.carousel');
});
if ($(window).width() >= 613) {
    $(".habitat .contenidos .noticiasHabitat .new").click(function () {
        $(".modalHabitad").attr("m-active", "true");
        var proyecto = $(this).attr("m-proyecto");
        console.log(proyecto);
        var folder = "";
        switch (proyecto) {
            case "casapichilingue":
                folder = "img/backgroundPages/habitat/proyectos/casa-pichilingue/";
                $("#tituloProyecto").html('Ampliación Residencia de Acapulco');
                $("#textoProyecto").html('Remodelación y levantamiento de piso superior en casa vacacional en exclusivo condominio de Pichilingue Acapulco.');
                $("#area").html('<span class="area">ÁREA</span> 328.90 M<sup>2</sup>');
                $("#tipo").html('<span class="tipo">TIPO</span> DEPARTAMENTO');
                $("#anio").html('<span class="anio">AÑO PROYECTO</span> 2018');
                $("#ubicacion").html('<span class="ubicacion">UBICACIÓN</span> Pichilingue 39880,  Acapulco, Guerrero.');
                break;
            case "casagrande":
                folder = "img/backgroundPages/habitat/proyectos/casagrande/";
                $("#tituloProyecto").html('Remodelación Casas Grandes');
                $("#textoProyecto").html('Remodelación y restauración  total de un espacio unifamiliar de 3 niveles para vivienda  con acabados de lujo.');
                $("#area").html('<span class="area">ÁREA</span> 315 M<sup>2</sup>');
                $("#tipo").html('<span class="tipo">TIPO</span> Vivienda Residencial');
                $("#anio").html('<span class="anio">AÑO PROYECTO</span> 2018');
                $("#ubicacion").html('<span class="ubicacion">UBICACIÓN</span>Narvarte Oriente CP 03020 Benito Juárez, Ciudad de México');
                break;
            case "sanrafael1073":
                folder = "img/backgroundPages/habitat/proyectos/sanrafael1073/";
                $("#tituloProyecto").html('Casa El Rodeo II');
                $("#textoProyecto").html('Condominio habitacional vertical de 14 recámaras diseñado especialmente para estudiantes y solteros con acabados modernos y áreas comunes para el esparcimiento.');
                $("#area").html('<span class="area">ÁREA</span> 363 M<sup>2</sup>');
                $("#tipo").html('<span class="tipo">TIPO</span> Casa Habitación');
                $("#anio").html('<span class="anio">AÑO PROYECTO</span> 2019');
                $("#ubicacion").html('<span class="ubicacion">UBICACIÓN</span> Colonia El Rodeo CP 08510 Iztacalco, Ciudad de México');
                break;
            case "sanrafael1078":
                folder = "img/backgroundPages/habitat/proyectos/sanrafael1078/";
                $("#tituloProyecto").html('Casa El Rodeo I');
                $("#textoProyecto").html('Condominio habitacional vertical de 14 recámaras diseñado especialmente para estudiantes y solteros con acabados modernos y áreas comunes para el esparcimiento. ');
                $("#area").html('<span class="area">ÁREA</span> 62 M<sup>2</sup>');
                $("#tipo").html('<span class="tipo">TIPO</span> Casa Habitación');
                $("#anio").html('<span class="anio">AÑO PROYECTO</span> 2015');
                $("#ubicacion").html('<span class="ubicacion">UBICACIÓN</span> Colonia El Rodeo CP 08510 Iztacalco, Ciudad de México');
                break;
            case "amores":
                folder = "img/backgroundPages/habitat/proyectos/amores/";
                $("#tituloProyecto").html('Corporativo AIH Group Ciudad de México');
                $("#textoProyecto").html('Oficinas corporativas de AIH Group de Ciudad de México. Con capacidad para 30 personas.');
                $("#area").html('<span class="area">ÁREA</span> 460 M<sup>2</sup>');
                $("#tipo").html('<span class="tipo">TIPO</span> Corporativo');
                $("#anio").html('<span class="anio">AÑO PROYECTO</span> 2016');
                $("#ubicacion").html('<span class="ubicacion">UBICACIÓN</span> Col del Valle Centro, 03100 Ciudad de México, CDMX');
                break;
            case "patricio":
                folder = "img/backgroundPages/habitat/proyectos/patricio/";
                $("#tituloProyecto").html('Call Center Patricio Sanz');
                $("#textoProyecto").html('Oficinas open space para la empresa Traveline con 50 puestos de trabajo en el área central y 7 oficinas privadas.');
                $("#area").html('<span class="area">ÁREA</span> 608 M<sup>2</sup>');
                $("#tipo").html('<span class="tipo">TIPO</span> Call Center');
                $("#anio").html('<span class="anio">AÑO PROYECTO</span> 2019');
                $("#ubicacion").html('<span class="ubicacion">UBICACIÓN</span> Col del Valle Sur CP 03100 Benito Juárez, Ciudad de México');
                break;
            case "polotitlan":
                folder = "img/backgroundPages/habitat/proyectos/polotitlan/";
                $("#tituloProyecto").html('Proyecto Invernaderos Polotitlán');
                $("#textoProyecto").html('Desarrollo del primer complejo agroindustrial para la producción de cannabis legal en México. Proyecto en planificación de acuerdo a los avances en materia de legalización.');
                $("#area").html('<span class="area">ÁREA</span> 20 has');
                $("#tipo").html('<span class="tipo">TIPO</span> Invernaderos');
                $("#anio").html('<span class="anio">AÑO PROYECTO</span> 2019');
                $("#ubicacion").html('<span class="ubicacion">UBICACIÓN</span> Municipio de Polotitlán');
                break;
                case "guadalajara":
                folder = "img/backgroundPages/habitat/proyectos/guadalajara/";
                $("#tituloProyecto").html('Oficina AIH Group Guadalajara');
                $("#textoProyecto").html('Oficinas corporativas AIH Group de Guadalajara. 5 oficinas con espacios de recepción, sala de juntas y área de comedor.');
                $("#area").html('<span class="area">ÁREA</span> --');
                $("#tipo").html('<span class="tipo">TIPO</span> Corporativo');
                $("#anio").html('<span class="anio">AÑO PROYECTO</span> 2018');
                $("#ubicacion").html('<span class="ubicacion">UBICACIÓN</span> Guadalajara, Jalisco.');
                break;
            default:
                folder = "img/backgroundPages/habitat/proyectos/";
        }
        $.ajax({
            url : folder,
            success: function (data) {
                $(data).find("a").attr("href", function (i, val) {
                    if( val.match(/\.(jpg|jpeg|svg|png|gif)$/) ) {
                        $(".modalHabitad-slider").append( "<div class='item'><img class='item' src='"+ folder + val +"'></div>" );
                    }
                });
                setTimeout(function(){
                    carouselHabitat.owlCarousel({
                        loop:false,
                        //autoplay:true,
                        nav:true,
                        animateIn: 'fadeIn',
                        items:1
                    });
                  }, 1500);
            }
        });
        var heightSection = $(".habitat").height();
        $(".modalHabitad").css("height",heightSection+"px")
        $(".modalHabitad").css("min-height",heightSection+"px")
    });
 }

$(".modalHabitad-closeModal").click(function () {
    $(".modalHabitad").attr("m-active", "false");
    carouselHabitat.owlCarousel('destroy');
    $(".modalHabitad-slider").html(" ")
});
$(window).resize(function(){
    var heightSection = $(".habitat").height();
    $(".modalHabitad").css("height",heightSection+"px")
    $(".modalHabitad").css("min-height",heightSection+"px")
});
var owlPost = $(".noticiasHabitat");
function postsCarousel() {
    var checkWidth = $(window).width();

    if (checkWidth >= 613) {
        if(typeof owlPost.data('owl.carousel') != 'undefined'){
            owlPost.data('owl.carousel').destroy();
        }
        owlPost.removeClass('owl-carousel');
    } else if (checkWidth <= 612) {
        $('.noticiasHabitat').on('click', '.owl-item', function () {
            $(".modalHabitad").attr("m-active", "true");
            var proyecto = $(this).children("div").attr("m-proyecto");
            $('html, body').animate( { scrollTop : 0 }, 0 );
            var folder = "";
            switch (proyecto) {
                case "casapichilingue":
                    folder = "img/backgroundPages/habitat/proyectos/casa-pichilingue/";
                    $("#tituloProyecto").html('Ampliación Residencia de Acapulco');
                    $("#textoProyecto").html('Remodelación y levantamiento de piso superior en casa vacacional en exclusivo condominio de Pichilingue Acapulco.');
                    $("#area").html('<span class="area">ÁREA</span> 328.90 M<sup>2</sup>');
                    $("#tipo").html('<span class="tipo">TIPO</span> DEPARTAMENTO');
                    $("#anio").html('<span class="anio">AÑO PROYECTO</span> 2018');
                    $("#ubicacion").html('<span class="ubicacion">UBICACIÓN</span> Pichilingue 39880,  Acapulco, Guerrero.');
                    break;
                case "casagrande":
                    folder = "img/backgroundPages/habitat/proyectos/casagrande/";
                    $("#tituloProyecto").html('Remodelación Casas Grandes');
                    $("#textoProyecto").html('Remodelación y restauración  total de un espacio unifamiliar de 3 niveles para vivienda  con acabados de lujo.');
                    $("#area").html('<span class="area">ÁREA</span> 315 M<sup>2</sup>');
                    $("#tipo").html('<span class="tipo">TIPO</span> Vivienda Residencial');
                    $("#anio").html('<span class="anio">AÑO PROYECTO</span> 2018');
                    $("#ubicacion").html('<span class="ubicacion">UBICACIÓN</span>Narvarte Oriente CP 03020 Benito Juárez, Ciudad de México');
                    break;
                case "sanrafael1073":
                    folder = "img/backgroundPages/habitat/proyectos/sanrafael1073/";
                    $("#tituloProyecto").html('Casa El Rodeo II');
                    $("#textoProyecto").html('Condominio habitacional vertical de 14 recámaras diseñado especialmente para estudiantes y solteros con acabados modernos y áreas comunes para el esparcimiento.');
                    $("#area").html('<span class="area">ÁREA</span> 363 M<sup>2</sup>');
                    $("#tipo").html('<span class="tipo">TIPO</span> Casa Habitación');
                    $("#anio").html('<span class="anio">AÑO PROYECTO</span> 2019');
                    $("#ubicacion").html('<span class="ubicacion">UBICACIÓN</span> Colonia El Rodeo CP 08510 Iztacalco, Ciudad de México');
                    break;
                case "sanrafael1078":
                    folder = "img/backgroundPages/habitat/proyectos/sanrafael1078/";
                    $("#tituloProyecto").html('Casa El Rodeo I');
                    $("#textoProyecto").html('Condominio habitacional vertical de 14 recámaras diseñado especialmente para estudiantes y solteros con acabados modernos y áreas comunes para el esparcimiento. ');
                    $("#area").html('<span class="area">ÁREA</span> 62 M<sup>2</sup>');
                    $("#tipo").html('<span class="tipo">TIPO</span> Casa Habitación');
                    $("#anio").html('<span class="anio">AÑO PROYECTO</span> 2015');
                    $("#ubicacion").html('<span class="ubicacion">UBICACIÓN</span> Colonia El Rodeo CP 08510 Iztacalco, Ciudad de México');
                    break;
                case "amores":
                    folder = "img/backgroundPages/habitat/proyectos/amores/";
                    $("#tituloProyecto").html('Corporativo AIH Group Ciudad de México');
                    $("#textoProyecto").html('Oficinas corporativas de AIH Group de Ciudad de México. Con capacidad para 30 personas.');
                    $("#area").html('<span class="area">ÁREA</span> 460 M<sup>2</sup>');
                    $("#tipo").html('<span class="tipo">TIPO</span> Corporativo');
                    $("#anio").html('<span class="anio">AÑO PROYECTO</span> 2016');
                    $("#ubicacion").html('<span class="ubicacion">UBICACIÓN</span> Col del Valle Centro, 03100 Ciudad de México, CDMX');
                    break;
                case "patricio":
                    folder = "img/backgroundPages/habitat/proyectos/patricio/";
                    $("#tituloProyecto").html('Call Center Patricio Sanz');
                    $("#textoProyecto").html('Oficinas open space para la empresa Traveline con 50 puestos de trabajo en el área central y 7 oficinas privadas.');
                    $("#area").html('<span class="area">ÁREA</span> 608 M<sup>2</sup>');
                    $("#tipo").html('<span class="tipo">TIPO</span> Call Center');
                    $("#anio").html('<span class="anio">AÑO PROYECTO</span> 2019');
                    $("#ubicacion").html('<span class="ubicacion">UBICACIÓN</span> Col del Valle Sur CP 03100 Benito Juárez, Ciudad de México');
                    break;
                case "polotitlan":
                    folder = "img/backgroundPages/habitat/proyectos/polotitlan/";
                    $("#tituloProyecto").html('Proyecto Invernaderos Polotitlán');
                    $("#textoProyecto").html('Desarrollo del primer complejo agroindustrial para la producción de cannabis legal en México. Proyecto en planificación de acuerdo a los avances en materia de legalización.');
                    $("#area").html('<span class="area">ÁREA</span> 20 has');
                    $("#tipo").html('<span class="tipo">TIPO</span> Invernaderos');
                    $("#anio").html('<span class="anio">AÑO PROYECTO</span> 2019');
                    $("#ubicacion").html('<span class="ubicacion">UBICACIÓN</span> Municipio de Polotitlán');
                    break;
                    case "guadalajara":
                    folder = "img/backgroundPages/habitat/proyectos/guadalajara/";
                    $("#tituloProyecto").html('Oficina AIH Group Guadalajara');
                    $("#textoProyecto").html('Oficinas corporativas AIH Group de Guadalajara. 5 oficinas con espacios de recepción, sala de juntas y área de comedor.');
                    $("#area").html('<span class="area">ÁREA</span> --');
                    $("#tipo").html('<span class="tipo">TIPO</span> Corporativo');
                    $("#anio").html('<span class="anio">AÑO PROYECTO</span> 2018');
                    $("#ubicacion").html('<span class="ubicacion">UBICACIÓN</span> Guadalajara, Jalisco.');
                    break;
                default:
                    folder = "img/backgroundPages/habitat/proyectos/";
            }
            $.ajax({
                url :  folder,
                success: function (data) {
                    $(data).find("a").attr("href", function (i, val) {
                        if( val.match(/\.(jpg|jpeg|svg|png|gif)$/) ) {
                            $(".modalHabitad-slider").append( "<div class='item'><img class='item' src='"+ folder + val +"'></div>" );
                        }
                    });
                    setTimeout(function(){
                        carouselHabitat.owlCarousel({
                            loop:false,
                            //autoplay:true,
                            nav:true,
                            animateIn: 'fadeIn',
                            items:1
                        });
                      }, 1500);

                }
            });
        });
        owlPost.addClass('owl-carousel');
        owlPost.owlCarousel({
            items : 2,
            slideSpeed : 500,
            animateOut: 'fadeOut',
            touchDrag: true,
            mouseDrag: true,
            margin:30,
            center:true,
            dots: true,
            loop: true,
            426:{
                items : 2,
                nav:true
            },
        });
    }
}
var carousel_Settings = {
    items : 2,
            slideSpeed : 500,
            animateOut: 'fadeOut',
            touchDrag: true,
            mouseDrag: true,
            center:true,
            dots: true,
            loop: true,
            426:{
                items : 2,
                nav:true
            },
  };

  $( '.filtros' ).on( 'click', '.proyecto', function() {
    var $item = $(this);
    var $thisId = $(this).attr("id");

    if ($thisId == "habitacional") {
        $(this).addClass("habitacional");
        $(".habitat .contenidos .filtros .proyecto").removeClass("corpotrativo");
    } else {
        $(this).addClass("corpotrativo");
        $(".habitat .contenidos .filtros .proyecto").removeClass("habitacional");
    }

    $(".proyecto").attr("m-active","false");
    $("#"+$thisId).attr("m-active","true");
    var filter = $item.data( 'owl-filter' )

    owlPost.owlcarousel2_filter( filter );

} )
postsCarousel();
$(window).resize(postsCarousel);

$('#amaraa').click(function() {
    window.open("https://www.aramaraloscabos.com", '_blank');
 });
 $('#sabinaa').click(function() {
    window.open("https://www.sabinamexicanna.com", '_blank');
 }); */