    
"use strict";
$(document).ready( function(){
    $('.js-slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        speed: 400,
        vertical: true
    });

    $('.latest__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        dots: true,
        prevArrow: '<button type="button" class="js-slick-prev"><</button>',
        nextArrow: '<button type="button" class="js-slick-next">></button>',
      });

})

$(document).ready(function(){
    
        $(".scroll").on("click", function (event) {
    
            //отменяем стандартную обработку нажатия по ссылке
    
            event.preventDefault();
    
     
    
            //забираем идентификатор бока с атрибута href
    
            var id  = $(this).attr('href'),
    
     
    
            //узнаем высоту от начала страницы до блока на который ссылается якорь
    
                top = $(id).offset().top;
    
             
    
            //анимируем переход на расстояние - top за 1500 мс
    
            $('body,html').animate({scrollTop: top}, 1500);
    
        });
    
    });

    $(document).ready(function(){

      $(".js-gallery-btn").on("click", function (event) {
        $('.js-gallery').toggleClass( "js-gallery-open" );
      });
    
        $(".scroll").on("click", function (event) {
    
            //отменяем стандартную обработку нажатия по ссылке
    
            event.preventDefault();
    
     
    
            //забираем идентификатор бока с атрибута href
    
            var id  = $(this).attr('href'),
    
     
    
            //узнаем высоту от начала страницы до блока на который ссылается якорь
    
                top = $(id).offset().top;
    
             
    
            //анимируем переход на расстояние - top за 1500 мс
    
            $('body,html').animate({scrollTop: top}, 1500);
    
        });
    
    });


      var map;
      var marker;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map-js'), {
          center: {lat: 51.495866, lng: 31.2204985},
          zoom: 8
        });

        var image = 'img/marker-2.png';
        marker = new google.maps.Marker({
          position: {lat: 51.495866, lng: 31.2204985},
          map: map,
          icon: image,
          draggable: true,
          animation: google.maps.Animation.DROP
        });
        marker.addListener('click', toggleBounce);
      }
      function toggleBounce() {
        if (marker.getAnimation() !== null) {
          marker.setAnimation(null);
        } else {
          marker.setAnimation(google.maps.Animation.BOUNCE);
        }
      }
    
      $(document).ready( function(){

        $('.header').viewportChecker({
              
          callbackFunction: function(elem, action){
            $('.header__nav').css( "background-color", "transparent" );
            $('.nav__item a').css( "color", "black" );
            $('.js-item').css( "border-color", "black" );
            $('.js-item i').css( "color", "black" );
          },
          scrollHorizontal: false,
          
          repeat: true
      });
        
          $('.whatWeDo').viewportChecker({
              
              callbackFunction: function(elem, action){
                $('.header__nav').css( "background-color", "black" );
                $('.nav__item a').css( "color", "white" );
                $('.js-item').css( "border-color", "white" );
                $('.js-item i').css( "color", "white" );
              },
              scrollHorizontal: false,
              offset: ['100%'],
              repeat: true
          });

          $('.latest').viewportChecker({
              
            callbackFunction: function(elem, action){
              $('.header__nav').css( "background-color", "transparent" );
            },
            scrollHorizontal: false,
            offset: ['95%'],
            repeat: true
        });

        $('.gallery').viewportChecker({
              
          callbackFunction: function(elem, action){
            $('.header__nav').css( "background-color", "black" );
          },
          scrollHorizontal: false,
          offset: ['90%'],
          repeat: true
      });

      
    
    })