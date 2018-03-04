/***********************
Apartment HTML Site Template
Author: Jan Skwara - http://themeforest.net/user/johnnychaos
***********************/


/********** SETTINGS **********/	

var imageDownloadEnabled = false;  // true or false - set to true if you want to allow visitors to download photos in lightGallery view


/********** SETTINGS END **********/	


"use strict";


/********** MOBILE AND IE DETECTION **********/		


/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-pointerevents-touchevents-setclasses !*/
!function(e,n,t){function o(e,n){return typeof e===n}function s(){var e,n,t,s,i,a,r;for(var f in d)if(d.hasOwnProperty(f)){if(e=[],n=d[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(s=o(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)a=e[i],r=a.split("."),1===r.length?Modernizr[r[0]]=s:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=s),l.push((s?"":"no-")+r.join("-"))}}function i(e){var n=c.className,t=Modernizr._config.classPrefix||"";if(p&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),p?c.className.baseVal=n:c.className=n)}function a(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):p?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function r(){var e=n.body;return e||(e=a(p?"svg":"body"),e.fake=!0),e}function f(e,t,o,s){var i,f,l,d,u="modernizr",p=a("div"),v=r();if(parseInt(o,10))for(;o--;)l=a("div"),l.id=s?s[o]:u+(o+1),p.appendChild(l);return i=a("style"),i.type="text/css",i.id="s"+u,(v.fake?v:p).appendChild(i),v.appendChild(p),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(n.createTextNode(e)),p.id=u,v.fake&&(v.style.background="",v.style.overflow="hidden",d=c.style.overflow,c.style.overflow="hidden",c.appendChild(v)),f=t(p,e),v.fake?(v.parentNode.removeChild(v),c.style.overflow=d,c.offsetHeight):p.parentNode.removeChild(p),!!f}var l=[],d=[],u={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){d.push({name:e,fn:n,options:t})},addAsyncTest:function(e){d.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=u,Modernizr=new Modernizr;var c=n.documentElement,p="svg"===c.nodeName.toLowerCase(),v=u._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];u._prefixes=v;var h=function(){function e(e,n){var s;return e?(n&&"string"!=typeof n||(n=a(n||"div")),e="on"+e,s=e in n,!s&&o&&(n.setAttribute||(n=a("div")),n.setAttribute(e,""),s="function"==typeof n[e],n[e]!==t&&(n[e]=t),n.removeAttribute(e)),s):!1}var o=!("onblur"in n.documentElement);return e}();u.hasEvent=h;var m="Moz O ms Webkit",g=u._config.usePrefixes?m.toLowerCase().split(" "):[];u._domPrefixes=g,Modernizr.addTest("pointerevents",function(){var e=!1,n=g.length;for(e=Modernizr.hasEvent("pointerdown");n--&&!e;)h(g[n]+"pointerdown")&&(e=!0);return e});var w=u.testStyles=f;Modernizr.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)t=!0;else{var o=["@media (",v.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");w(o,function(e){t=9===e.offsetTop})}return t}),s(),i(l),delete u.addTest,delete u.addAsyncTest;for(var y=0;y<Modernizr._q.length;y++)Modernizr._q[y]();e.Modernizr=Modernizr}(window,document);

var w_height = jQuery( window ).height( );
var w_width = jQuery( window ).width( );
var estateMap = false;
var panorama = false;
var staticDescHeight = 0;


function isIE ( ) {
    var myNav = navigator.userAgent.toLowerCase( );
    return ( myNav.indexOf( 'msie' ) != - 1 ) ? parseInt( myNav.split( 'msie' )[1] ) : false;
    }

var mobile = false; 
var ie = false;
var ie9 = false;
if ( isIE( ) && isIE( ) <= 9 ) {
    ie9 = true;
    ie = true;
    jQuery( 'html' ).addClass( 'ie9' );
} else if ( isIE( ) || navigator.appVersion.indexOf( 'Trident/' ) > 0 ){
    ie = true;
}

if ( ( jQuery( 'html' ).hasClass( 'pointerevents' ) || jQuery( 'html' ).hasClass( 'touchevents' ) ) && !ie && w_width < 1025 ) {
    jQuery( 'html' ).addClass( 'mobile' );
    mobile = true;
}


jQuery( document ).ready( function( $ ) {



/********** BOXED LAYOUT **********/



    if( boxed ) {
        $('#wrapper').addClass("boxed");
        $('#wrapper2').addClass("boxed");
        $('header').addClass("boxed");
    }



    /********** FULLSCREEN SECTION SIZE **********/	



    if ( $( "#swiper1" ).length ) {
        var sliderHeight;
        var sliderDescTop;
        if ( $( ".simple-search-cont" ).length ) {
            if( w_height > 600 || w_width < 481 ) {
                sliderHeight = w_height - $( 'header.header1' ).innerHeight( );
                sliderDescTop = ( sliderHeight - $( '.search-cont' ).innerHeight( ) + $( 'header.header2' ).innerHeight( ) - 45 ) / 2;
            } else if ( w_height < 400 ) {
                sliderHeight = 450 + $( 'header.header2' ).innerHeight( );
                sliderDescTop = 180;
            } else  {
                sliderHeight = 450 + $( 'header.header2' ).innerHeight( );
                sliderDescTop = ( sliderHeight - $( '.search-cont' ).innerHeight( ) + $( 'header.header2' ).innerHeight( ) - 45 ) / 2;
            }
            $( "#swiper1" ).css( 'height', sliderHeight + 'px' );
            $( "#swiper1 .container" ).each( function( ) {
                $( this ).css( 'top', sliderDescTop - $( this ).innerHeight( ) / 2 + 'px' );
            } );
            console.log('1');
        } else {
            if ( w_height > 850 || w_width < 481 ) {
                sliderHeight = w_height - $( 'header.header1' ).innerHeight( );
                sliderDescTop = ( sliderHeight - $( '.search-cont' ).innerHeight( ) - 45 ) / 2;
            } else {
                sliderHeight = 720 + $('header.header2').innerHeight();
                sliderDescTop = ( sliderHeight - $( '.search-cont' ).innerHeight( ) - 45 ) / 2;
            }
            $( "#swiper1" ).css( 'height', sliderHeight + 'px' );
            $( "#swiper1 .container" ).each( function( ) {
                $( this ).css( 'top', sliderDescTop - $( this ).innerHeight( ) / 2 + $( 'header.header2' ).innerHeight( )/3 + 'px' );
            } );
             console.log('2');
        }
    }

    if($("#swiper2").length ) {
        var sliderHeight;
        var sliderDescTop;
        if($(".simple-search-cont").length) {
            if( w_height > 580 ) {
                sliderHeight = w_height - $('header.header1').innerHeight();
            } else {
                sliderHeight = 450 + $('header.header2').innerHeight();
            }

            sliderDescTop = ( sliderHeight - $('.search-cont').innerHeight() + $('header.header2').innerHeight() - 45 ) / 2 ;   
            $("#swiper2").css('height', sliderHeight + 'px');
            $("#swiper2 .container").each( function() {
                 $(this).css('top', sliderDescTop - $(this).innerHeight()/2 + 'px');
            });
        } else {

            if( w_height > 800 ) {
                sliderHeight = w_height - $('header.header1').innerHeight();

            } else {
                sliderHeight = 670 + $('header.header2').innerHeight();
            }

            sliderDescTop = ( sliderHeight - $('.search-cont').innerHeight() + $('header.header2').innerHeight() - 45 ) / 2 ;   
            $("#swiper2").css('height', sliderHeight + 'px');

            $("#swiper2 .container").each( function() {
                $(this).css('top', sliderDescTop - $(this).innerHeight()/2 + 'px');
            });

        }
    }

    if($("#swiper-gallery").length ) {
            var sliderHeight;
            var header2;
            if( $("header.header2").length ) {
                var header2 = 140;
            } else {
                header2 = 0;
            }
            if( w_height > 650  || w_width < 481 ) {
                    sliderHeight = w_height - $('header').innerHeight() - $('.thumbs-slider').outerHeight() + header2;
            } else {
                    sliderHeight = 500;
            }
            $("#swiper-gallery").css('height', sliderHeight + 'px');
            $("#swiper-gallery .slide-desc-col").css('height', sliderHeight + 'px');
    }

    if( ("#offers-map").length ) {
            var mapHeight;
            if( mobile ) {
                    mapHeight = w_height - $('header').innerHeight() - 30;
            } else if( w_height > 650 ) {
                    mapHeight = w_height - $('header').innerHeight();
            } else  {
                    mapHeight = 600;
            }
            $("#offers-map").css('height', mapHeight + 'px');
    }

    if( (".offers-map2").length ) {
            var mapHeight;
            if( mobile ) {
                    mapHeight = w_height - 30;
            } else if( w_height > 650 ) {
                    mapHeight = w_height;
            } else {
                    mapHeight = 600;
            }
            $(".offers-map2").css('height', mapHeight + 'px');
    }

    if( ("#full-street-view").length ) {
        var sliderHeight;
        var sliderDescTop;
        staticDescHeight = $(".swiper2-static-desc .slide-desc").innerHeight();
        if( w_height > 500 ) {
                sliderHeight = 	w_height - $('header').innerHeight();
                sliderDescTop = sliderHeight - staticDescHeight - 170;
        } else {
                sliderHeight = 600;
                sliderDescTop = 100;
        }
        $("#full-street-view").css('height', sliderHeight + 'px');
        $(".swiper2-static-desc").css('top', sliderDescTop + 'px');
    }	

});

jQuery(window).load(function() {
    jQuery('html').ApartmentOnload();
});

(function( $ ){
    $.fn.ApartmentOnload = function() {



/********** SWIPER - HOMEPAGE SLIDER **********/


    
        
    if( $("#swiper1").length ) {
        
        swiper1 = new Swiper ('#swiper1', {
            //nextButton: '.slide-next',
           // prevButton: '.slide-prev',
            loop: true,
            grabCursor: true,
            preloadImages: false,
            lazyLoading: true,
            lazyLoadingInPrevNext: true,
            loopAdditionalSlides: 0,
            autoplay: 7000,
            speed: 700
        });

        var slidesSum = $(".swiper-slide").length;
        $(".slide-desc-1").addClass("slide-desc-" + (slidesSum - 1));
        $(".slide-desc-" + (slidesSum - 2)).addClass("slide-desc-0");

        swiper1.on('onTransitionEnd', function () {
            $(".slide-desc-" + swiper1.previousIndex).removeClass("fadeInDown");
            $(".slide-desc-" + swiper1.previousIndex).addClass("fadeOutDown");
            $(".slide-desc-" + swiper1.activeIndex).removeClass("fadeOutDown");
            $(".slide-desc-" + swiper1.activeIndex).addClass("fadeInDown");
            
        });
        
        $('.slide-prev').click( function () {
            swiper1.slidePrev();
        }); 
        
        $('.slide-next').click( function () {
            swiper1.slideNext();
        }); 
    }



/********** SWIPER - HOMEPAGE SLIDER 2 **********/



    if( $("#swiper2").length ) {
        //initialize swiper when document ready  
        swiper2 = new Swiper ('#swiper2', {
            // Optional parameters
            nextButton: '.slide-next',
            prevButton: '.slide-prev',
            loop: true,
            grabCursor: true,
            lazyLoading: true,
            lazyLoadingInPrevNext: true,
            loopAdditionalSlides: 0,
            autoplay: 5000,
            speed: 700
        });

        var slidesSum = $(".swiper-slide").length;
        $(".slide2-desc-1").addClass("slide2-desc-" + (slidesSum - 1));
        $(".slide2-desc-" + (slidesSum - 2)).addClass("slide2-desc-0");

        swiper2.on('onTransitionEnd', function () {
            $(".slide2-desc-" + swiper2.previousIndex).removeClass("fadeInDown");
            $(".slide2-desc-" + swiper2.previousIndex).addClass("fadeOutDown");
            $(".slide2-desc-" + swiper2.activeIndex).removeClass("fadeOutDown");
            $(".slide2-desc-" + swiper2.activeIndex).addClass("fadeInDown");
        });
    }



/********** SWIPER - PHOTO GALLERY SLIDER **********/



    if( $("#swiper-gallery").length ) {
        //initialize swiper when document ready  
        gallerySwiper = new Swiper ('#swiper-gallery', {
            // Optional parameters
            nextButton: '.slide-next',
            prevButton: '.slide-prev',
            loop: true,
            grabCursor: true,
            preloadImages: false,
            lazyLoading: true,
            lazyLoadingInPrevNext: true,
            loopAdditionalSlides: 0,
            autoplay: 5000,
            speed: 700
        });

        var slidesSum = $("#swiper-gallery .swiper-slide").length;
        $(".gallery-slide-desc-1").addClass("gallery-slide-desc-" + (slidesSum - 1));
        $(".gallery-slide-desc-" + (slidesSum - 2)).addClass("gallery-slide-desc-0");

        gallerySwiper.on('onTransitionEnd', function () {
            $(".gallery-slide-desc-" + gallerySwiper.previousIndex).removeClass("fadeInUp");
            $(".gallery-slide-desc-" + gallerySwiper.previousIndex).addClass("fadeOutUp");
            $(".gallery-slide-desc-" + gallerySwiper.activeIndex).removeClass("fadeOutUp");
            $(".gallery-slide-desc-" + gallerySwiper.activeIndex).addClass("fadeInUp");
        });		

        gallerySwiper.on('onSlideChangeStart', function () {
            if( $("#swiper-thumbs").length ) {
                if(gallerySwiper.activeIndex == (slidesSum - 1) ) {
                        thumbsSwiper.slideTo(0);
                } else {	
                        thumbsSwiper.slideTo(gallerySwiper.activeIndex-2);
                }
            }
            $( "#slide-more-cont a" ).css('z-index', 10);
            $( "#slide-more-cont a.num-" + gallerySwiper.activeIndex ).css('z-index', 20);

        });

        $("#swiper-gallery .swiper-slide").each( function(index) {
            var imageHref = $(this).children('.slide-bg').first().attr('data-background');
            var imageDescr = $(this).children('.slide-bg').first().attr('data-sub-html');
            if (typeof imageDescr === "undefined") {
                    imageDescr = "";
            }
            var num = index;

            if( ! $(this).hasClass('swiper-slide-duplicate') ) {
                    $( "#slide-more-cont" ).append( '<a href="' + imageHref + '" class="navigation-box navigation-box-more slide-more num-' + num + '" ' + ((typeof imageDescr !== "undefined")? ' data-sub-html="' + imageDescr : '') + '"><div class="navigation-triangle"></div><div class="navigation-box-icon"><i class="jfont fa-lg">&#xe813;</i></div></a>' );
            }
        });
        $( "#slide-more-cont a.num-1" ).css('z-index', 20);
    }


    if( $("#swiper-thumbs").length ) {
        var slideIndex;
        //initialize swiper when document ready  
        var thumbsSwiper = new Swiper ('#swiper-thumbs', {
            // Optional parameters
            nextButton: '.thumb-next',
            prevButton: '.thumb-prev',
            spaceBetween: 15,
            centeredSlides: false,
            slidesPerView: 'auto',
            touchRatio: 0.2,
            slideToClickedSlide: false
        });

        $("#swiper-thumbs .swiper-slide").click(function() {
                gallerySwiper.slideTo(thumbsSwiper.clickedIndex+1);
        });
    }


/********** ANIMATED SECTIONS **********/	



    if( $('.wow').length ) {
            new WOW({ mobile: wowAnimationMobile }).init();
    }



/********** MENU  **********/



    $('.dropdown-menu').hover(
        function() {
                $(this).parent().children('a').addClass( "hover-menu" );
        }, function() {
                $(this).parent().children('a').removeClass( "hover-menu" );
        }
    );



/********** RANGE SLIDER **********/

//apartment_scripts.currency
//apartment_scripts.placement
//apartment_scripts.format
    var nFormat = apartment_scripts.format.split('|');
    $(".slider-range").each( function( index ) {
        var sliderId = $( this ).attr('id');
        var start = parseFloat($( this ).attr("data-min"))
        var end = parseFloat($( this ).attr("data-max"))
        if( typeof $( this ).attr("data-start") !== 'undefined' && $( this ).attr("data-start") ) {
            start = parseFloat($( this ).attr("data-start"));
        }
        if( typeof $( this ).attr("data-end") !== 'undefined' && $( this ).attr("data-end") ) {
            end = parseFloat($( this ).attr("data-end"));
        }
        $( this ).slider({
            range: true,
            min:  parseFloat($( this ).attr("data-min")),
            max: parseFloat($( this ).attr("data-max")),
            values: [ start, end ],
            slide: function( event, ui ) {
                $( "#" + sliderId + "-value" ).val( formatNumber( Math.abs(ui.values[ 0 ] ), nFormat[0], nFormat[1]  ) + " - " + formatNumber( Math.abs(ui.values[ 1 ] ), nFormat[0], nFormat[1]  ) );
            }
        });
        $( "#" + sliderId + "-value" ).val( formatNumber( Math.abs($( this ).slider( "values", 0 )), nFormat[0], nFormat[1] ) + " - " + formatNumber( Math.abs($( this ).slider( "values", 1 )), nFormat[0], nFormat[1] ) );
    });



/********** LIGHTGALLERY INITIALIZATION **********/



    if( $("#slide-more-cont").length ) {	
        $("#slide-more-cont").lightGallery({
            thumbnail:false,
            download: imageDownloadEnabled,
            autoplay: false
        }); 
    }		

    if( $(".gallery-grid-lg").length ) {	
        $(".gallery-grid-lg").lightGallery({
            thumbnail:false,
            download: imageDownloadEnabled,
            autoplay: false
        }); 
    }
    
    if( $(".section-light").length ) {	
        $(".section-light").lightGallery({
            thumbnail:false,
            download: imageDownloadEnabled,
            autoplay: false,
            selector: 'a[href$=".jpg"], a[href$=".jpeg"], a[href$=".png"], a[href$=".gif"]'
        }); 
    }



/********** OWL CAROUSELS **********/



    if( $(".team-owl").length ) {
        $(".team-owl").each( function() {
            $( this ).owlCarousel({
                items : 4,
                itemsDesktop : [1182,3],
                itemsDesktopSmall : [974,2],
                itemsTablet: [750,2],
                itemsTabletSmall: false,
                itemsMobile : [479,1],
                pagination: false
            });

            var teamOwl  = $( this ).data('owlCarousel');
            $("#" + $( this ).attr( 'id' ) + "-next").click( function ( event ) {
                event.preventDefault();
                teamOwl.next();
            });	
            $("#" + $( this ).attr( 'id' ) + "-prev").click( function ( event ) {
                event.preventDefault();
                teamOwl.prev();
            });
        });
    }

    if( $(".grid-offers-owl").length ) {
        $(".grid-offers-owl").each( function() {
            $( this ).owlCarousel({
                items : 4,
                itemsDesktop : [1182,3],
                itemsDesktopSmall : [974,2],
                itemsTablet: [750,2],
                itemsTabletSmall: false,
                itemsMobile : [479,1],
                mouseDrag: false, 
                pagination: false
            });

            var gridOffersOwl  = $( this ).data('owlCarousel');
            $("#" + $( this ).attr( 'id' ) + "-next").click( function ( event ) {
                    event.preventDefault();
                    gridOffersOwl.next();
            });	
            $("#" + $( this ).attr( 'id' ) + "-prev").click( function ( event ) {
                    event.preventDefault();
                    gridOffersOwl.prev();
            });
        });
    }


    if( $(".featured-offers-owl").length ) {
        $(".featured-offers-owl").each( function() {
            $( this ).owlCarousel({
                items : 3,
                itemsDesktop : [1182,2],
                itemsDesktopSmall : [974,2],
                itemsTablet: [750,2],
                itemsTabletSmall: false,
                itemsMobile: [479,1],
                mouseDrag: false
            });

            var featuredOffersOwl  = $( this ).data('owlCarousel');
            $("#" + $( this ).attr( 'id' ) + "-next").click( function ( event ) {
                event.preventDefault();
                featuredOffersOwl.next();
            });	
            $("#" + $( this ).attr( 'id' ) + "-prev").click( function ( event ) {
                event.preventDefault();
                featuredOffersOwl.prev();
            });
        });
    }

    if( $(".packages-owl").length ) {
        $(".packages-owl").each( function() {
            $( this ).owlCarousel({
                items : 3,
                itemsDesktop : [1182,2],
                itemsDesktopSmall : [974,2],
                itemsTablet: [750,2],
                itemsTabletSmall: false,
                itemsMobile: [479,1],
                mouseDrag: false
            });

            var featuredOffersOwl  = $( this ).data('owlCarousel');
            $("#" + $( this ).attr( 'id' ) + "-next").click( function ( event ) {
                event.preventDefault();
                featuredOffersOwl.next();
            });	
            $("#" + $( this ).attr( 'id' ) + "-prev").click( function ( event ) {
                event.preventDefault();
                featuredOffersOwl.prev();
            });
        });
    }

    if( $(".neighbourhood-owl").length ) {	
        $(".neighbourhood-owl").each( function() {
            $( this ).owlCarousel({
                items : 3,
                itemsDesktop : [1182,2],
                itemsDesktopSmall : [974,2],
                itemsTablet: [750,2],
                itemsTabletSmall: false,
                itemsMobile: [479,1],
                mouseDrag: true
            });

            var featuredOffersOwl  = $( this ).data('owlCarousel');
            $("#" + $( this ).attr( 'id' ) + "-next").click( function ( event ) {
                event.preventDefault();
                featuredOffersOwl.next();
            });	
            $("#" + $( this ).attr( 'id' ) + "-prev").click( function ( event ) {
                event.preventDefault();
                featuredOffersOwl.prev();
            });
        });
    }

    if( $(".testimonials-owl").length ) {		
        $(".testimonials-owl").each( function() {
            $( this ).owlCarousel({
                items : 1, 
                itemsDesktop : [1182,1],
                itemsDesktopSmall : [974,1],
                itemsTablet: [750,1],
                itemsTabletSmall: false,
                itemsMobile: [479,1],
                pagination: false
            });

            var testimonialsOwl  = $( this ).data('owlCarousel');
            $("#" + $( this ).attr( 'id' ) + "-next").click( function ( event ) {
                event.preventDefault();
                testimonialsOwl.next();
            });	
            $("#" + $( this ).attr( 'id' ) + "-prev").click( function ( event ) {
                event.preventDefault();
                testimonialsOwl.prev();
            });
        });                      
    }

    if( $(".list-offers-owl").length ) {	
        $(".list-offers-owl").each( function() {
            $( this ).owlCarousel({
                items : 1, 
                itemsDesktop : [1182,1],
                itemsDesktopSmall : [974,1],
                itemsTablet: [750,1],
                itemsTabletSmall: false,
                itemsMobile: [479,1],
                pagination: false
            });

            var listOffersOwl  = $(this).data('owlCarousel');
            $("#" + $( this ).attr( 'id' ) + "-next").click( function ( event ) {
                event.preventDefault();
                listOffersOwl.next();
            });	
            $("#" + $( this ).attr( 'id' ) + "-prev").click( function ( event ) {
                event.preventDefault();
                listOffersOwl.prev();
            });
        });
    }

    if( $(".short-offers-owl").length ) {	
        $(".short-offers-owl").each( function() {
            $( this ).owlCarousel({
                items : 3,
                itemsDesktop : [1182,2],
                itemsDesktopSmall : [974,2],
                itemsTablet: [750,2],
                itemsTabletSmall: false,
                itemsMobile: [479,1],
                mouseDrag: false,
                pagination: false
            });

            var shortOffersOwl  = $( this ).data('owlCarousel');
            $("#" + $( this ).attr( 'id' ) + "-next").click( function ( event ) {
                event.preventDefault();
                shortOffersOwl.next();
            });	
            $("#" + $( this ).attr( 'id' ) + "-prev").click( function ( event ) {
                event.preventDefault();
                shortOffersOwl.prev();
            });
        });
    }	

    if( $(".short-team-owl").length ) {	
        $(".short-team-owl").each( function() {
            $( this ).owlCarousel({
                items : 3,
                itemsDesktop : [1182,2],
                itemsDesktopSmall : [974,2],
                itemsTablet: [750,2],
                itemsTabletSmall: false,
                itemsMobile: [479,1],
                mouseDrag: true,
                pagination: false
            });

            var shortTeamOwl  = $( this ).data('owlCarousel');
            $("#" + $( this ).attr( 'id' ) + "-next").click( function ( event ) {
                event.preventDefault();
                shortTeamOwl.next();
            });	
            $("#" + $( this ).attr( 'id' ) + "-prev").click( function ( event ) {
                event.preventDefault();
                shortTeamOwl.prev();
            });
        });
    }

    if( $(".logos-owl").length ) {
        $(".logos-owl").each( function() {
            $( this ).owlCarousel({
                items : 4,
                itemsDesktop : [1182,3],
                itemsDesktopSmall : [974,2],
                itemsTablet: [750,1],
                itemsTabletSmall: false,
                itemsMobile : [479,1],
                mouseDrag: true, 
                pagination: false
            });

            var logosOwl  = $( this ).data('owlCarousel');
            $("#" + $( this ).attr( 'id' ) + "-next").click( function ( event ) {
                event.preventDefault();
                logosOwl.next();
            });	
            $("#" + $( this ).attr( 'id' ) + "-prev").click( function ( event ) {
                event.preventDefault();
                logosOwl.prev();
            });
        });
    }

    if( $(".short-logos-owl").length ) {
        $(".short-logos-owl").each( function() {
            $( this ).owlCarousel({
                items : 3,
                itemsDesktop : [1182,2],
                itemsDesktopSmall : [974,2],
                itemsTablet: [750,1],
                itemsTabletSmall: false,
                itemsMobile: [479,1],
                mouseDrag: true, 
                pagination: false
            });

            var shortLogosOwl  = $( this ).data('owlCarousel');
            $("#" + $( this ).attr( 'id' ) + "-next").click( function ( event ) {
                event.preventDefault();
                shortLogosOwl.next();
            });	
            $("#" + $( this ).attr( 'id' ) + "-prev").click( function ( event ) {
                event.preventDefault();
                shortLogosOwl.prev();
            });
        });
    }		



    /********** COUNTING NUMBERS **********/



        if( $('.count-container').length ) {
            var run = false;
            $('.count-container').appear();
             $('.count-container').on('appear', function(event, $all_appeared) {
                if( ! run ) {
                    run = true;
                    $('.count').countTo('restart');
                }
             });
             $('.count-container').on('disappear', function(event, $all_appeared) {
                    run = false;
             });
        }



    /********** PARALLAX SECTIONS **********/



        if( $('.parallax').length && w_width > 991 ) {
            $('.parallax').parallax("50%", 0.2);
        }



    /********** SMOOTH SCROLLING **********/



        $(window).scroll(function () {
            if( stickyHeader ) {
                $('header').addClass("sticky-start");
                $('#wrapper').addClass("wrapper-sticky-start");

                if ($(this).scrollTop() > 1){  
                    $('header').addClass("sticky");
                    $('#wrapper').addClass("wrapper-sticky");
                }
                else {
                    $('header').removeClass("sticky");
                    $('#wrapper').removeClass("wrapper-sticky");
                }
            }	


            if ($(this).scrollTop() > 100) {
                $('.move-top').fadeIn();
            } else {
                $('.move-top').fadeOut();
            }


            var footer_h = $('footer.small-cont').innerHeight();
            var doc_height = $(document).height();
            var window_h = $(window).height();
            if ( doc_height - window_h - $(this).scrollTop() < footer_h ) {	
                if( !boxed || $(window).width() < 1230 ) {
                    $('.move-top').css('bottom', (footer_h - ( doc_height - window_h - $(this).scrollTop() )) + 'px' );
                } else {
                    $('.move-top').css('bottom','0px');
                }
            } else {
                $('.move-top').css('bottom','0px');
            }

        });

        $('.move-top .big-icon-second-color').click(function () {
            $("html, body").animate({
                scrollTop: 0
            }, 1000);
            return false;
        });

        $('a.scroll[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
        
        $('.navbar a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });



    /********** TOOLTIP **********/



        $('[data-toggle="tooltip"]').tooltip();



    /********** SEARCH FORM **********/		 


        var prop_id = $( "input[name='property_type']" ).val();

        $( '.adv-search-cont .tab-pane' ).each( function() {
            if( $(this).attr('id') != prop_id && ( !$('input[name="ofa"]').length || $('input[name="ofa"]').val() != 1 ) ) {
                $(this).find("select").each( function() {                 
                    $(this).prop('disabled', true);
                    //$(this).selectpicker('destroy');
                    
                });
                $(this).find("input").each( function() {
                    $(this).prop('disabled', true);
                });
            } else {

            }
        });


        $('.adv-search-tabs li a').click( function() {
            var prop_id = $(this).attr('href').substring(1);
            $( "input[name='property_type']" ).val( prop_id );
            $( '.adv-search-cont .tab-pane' ).each( function() {
                if( $(this).attr('id') != prop_id ) {      
                    $(this).find("select").each( function() {
                        $(this).prop('disabled', true);
                    });
                    $(this).find("input").each( function() {
                        $(this).prop('disabled', true);   
                        
                    });
                } else {
                     $(this).find("select").each( function() {
                       $(this).prop('disabled', false);
                       $(this).selectpicker('refresh');
//                       $(this).selectpicker({
//                            container: 'body',
//                            selectedTextFormat: 'count > 2'
//                        });
                    });
                    $(this).find("input").each( function() {
                        $(this).prop('disabled', false);
                    });
                }
            });
        });



    /********** WIDGET STYLES **********/	



        $( '.sidebar-widget ul li' ).not( '.dsidx-results-widget ul li' ).each( function( ) {
            $( this ).prepend( '<span class="custom-ul-bullet"></span>' );
        } );
            $( '.widget_search input' ).each( function( ) {
        $( this ).addClass( 'main-input input-sidebar' );
        } );
            $( '.sidebar-widget select' ).each( function( ) {
        $( this ).addClass( 'bootstrap-select' );
        } );
            $( '.footer-widget ul li' ).not( '.dsidx-results-widget' ).each( function( ) {
        $( this ).prepend( '<span class="custom-ul-bullet"></span>' );
        } );
            $( '.footer-widget select' ).each( function( ) {
        $( this ).addClass( 'bootstrap-select' );
        } );
            $( '.footer-widget ul' ).each( function( ) {
        $( this ).addClass( 'footer-ul' );
    } );           



    /********** dsIDXpress **********/	



        $( '.dsidx-resp-search-box select' ).each( function( ) {
            $( this ).addClass( 'bootstrap-select' );
        } );
            $( '.dsidx-sorting-control select' ).each( function( ) {
        $( this ).addClass( 'bootstrap-select' );
        } );
            $( '.dsidx-resp-area-submit' ).each( function( ) {
        $( this ).html( '<a href="#" class="button-primary button-shadow dsidx-submit"><span>Search</span><div class="button-triangle"></div><div class="button-triangle2"></div><div class="button-icon"><i class="fa fa-search"></i></div></a>' );
        } );
            $( '.dsidx-submit' ).click( function( ) {
        $( this ).parents( 'form.dsidx-resp-search-form' ).submit( );
        } );
            $( '.dsidx-contact-form-message' ).each( function( ) {
        $( this ).html( '<a href="#" class="button-primary button-shadow dsidx-single-submit pull-right"><span>Submit</span><div class="button-triangle"></div><div class="button-triangle2"></div><div class="button-icon"><i class="fa fa-paper-plane"></i></div></a>' );
        } );
            $( '.dsidx-single-submit' ).click( function( ) {
        $( this ).parents( 'form' ).submit( );
        } );
            $( '.dsidx-resp-search-form .adv-search-cont' ).each( function( ) {
        $( this ).append( '<a href="#" class="button-primary button-shadow dsidx-submit"><span>Search</span><div class="button-triangle"></div><div class="button-triangle2"></div><div class="button-icon"><i class="fa fa-search"></i></div></a>' );
        } );
        if ( $( ".dsidx-details" ).length ) {
            $( ".short-image h1" ).html( $( "#dsidx-price" ).html( ).replace( "<th>", "" ).replace( "</th>", ": " ).replace( "<td>", "" ).replace( "</td>", "" ) );
            $( ".short-image h5" ).html( $( "#dsidx-property-types" ).html( ).replace( "<strong>Property Type(s)</strong>", "" ).replace( ":", "" ) );
            $( ".short-image" ).append( '<div class="short-image-idx"></div>' );
            $( ".short-image-idx" ).css( 'background-image', 'url(' + $( "#dsidx-media .jb-dt-main-image-0 img" ).attr( 'src' ) + ')' );
        }




    /********** HTML SELECT **********/



        [].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {	
            new SelectFx(el);
        });

        $('.bootstrap-select').selectpicker({
            container: 'body',
            selectedTextFormat: 'count > 2'

        });

        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
            $('.bootstrap-select').selectpicker('mobile');
        }

        if( typeof termId !== 'undefined' && termId ) {

            for( i = 0, j = termId.length; i < j;i++ ) {
                $( "select[name='location1_" + termId[i] +"[]']" ).change(function() {
                    var name = $(this).attr('name').toString().replace('location1','location2');
                    jQuery.ajax({
                        type : "post",
                        dataType : "json",
                        url : apartment_scripts.ajaxurl,
                        data : {action: "apartment_wp_get_locations", location_name: $( this ).val(), level: '2' },
                        success: function(response) {
                           $selectbox = $( "select[name='" + name + "']" );
                           $selectbox.empty();
                            var list = '';
                            for (var i = 0; i < response.length; i++){
                                if( (option = response[i].trim()).length ) {
                                    list += "<option value='" + option + "'>" + option + "</option>";
                                }
                            }
                            $selectbox.html(list);
                            $selectbox.selectpicker('refresh');
                            $selectbox.selectpicker('selectAll');
                            $selectbox.trigger('change');
                            $selectbox.selectpicker('deselectAll');
                        }
                    })    
                });

                $( "select[name='location2_" + termId[i] +"[]']" ).change(function() {
                    var name = $(this).attr('name').toString().replace('location2','location3');
                    jQuery.ajax({
                        type : "post",
                        dataType : "json",
                        url : apartment_scripts.ajaxurl,
                        data : {action: "apartment_wp_get_locations", location_name: $( this ).val(), level: '3' },
                        success: function(response) {

                           $selectbox = $( "select[name='" + name + "']" );
                           $selectbox.empty();
                            var list = '';
                            for (var i = 0; i < response.length; i++){
                                if( (option = response[i].trim()).length ) {
                                    list += "<option value='" + option + "'>" + option + "</option>";
                                }
                            }
                            $selectbox.html(list);
                            $selectbox.selectpicker('refresh');
                            $selectbox.selectpicker('selectAll');
                            $selectbox.trigger('change');
                            $selectbox.selectpicker('deselectAll');
                        }
                    })    
                });

                $( "select[name='location3_" + termId[i] +"[]']" ).change(function() {
                    var name = $(this).attr('name').toString().replace('location3','location4');
                    jQuery.ajax({
                        type : "post",
                        dataType : "json",
                        url : apartment_scripts.ajaxurl,
                        data : {action: "apartment_wp_get_locations", location_name: $( this ).val(), level: '4' },
                        success: function(response) {

                           $selectbox = $( "select[name='" + name + "']" );
                           $selectbox.empty();
                            var list = '';
                            for (var i = 0; i < response.length; i++){
                                if( (option = response[i].trim()).length ) {
                                    list += "<option value='" + option + "'>" + option + "</option>";
                                }
                            }
                            $selectbox.html(list);
                            $selectbox.html(list);
                            $selectbox.selectpicker('refresh');
                            $selectbox.selectpicker('selectAll');
                            $selectbox.trigger('change');
                            $selectbox.selectpicker('deselectAll');
                        }
                    })    
                });
            }
        }
        
        if( typeof sidebarTermId !== 'undefined' && sidebarTermId ) {

            for( i = 0, j = sidebarTermId.length; i < j;i++ ) {
                $( "select[name='location1_" + sidebarTermId[i] +"[]']" ).change(function() {
                    var name = $(this).attr('name').toString().replace('location1','location2');
                    jQuery.ajax({
                        type : "post",
                        dataType : "json",
                        url : apartment_scripts.ajaxurl,
                        data : {action: "apartment_wp_get_locations", location_name: $( this ).val(), level: '2' },
                        success: function(response) {
                           $selectbox = $( "select[name='" + name + "']" );
                           $selectbox.empty();
                            var list = '';
                            for (var i = 0; i < response.length; i++){
                                if( (option = response[i].trim()).length ) {
                                    list += "<option value='" + option + "'>" + option + "</option>";
                                }
                            }
                            $selectbox.html(list);
                            $selectbox.selectpicker('refresh');
                            $selectbox.selectpicker('selectAll');
                            $selectbox.trigger('change');
                            $selectbox.selectpicker('deselectAll');
                        }
                    })    
                });

                $( "select[name='location2_" + sidebarTermId[i] +"[]']" ).change(function() {
                    var name = $(this).attr('name').toString().replace('location2','location3');
                    jQuery.ajax({
                        type : "post",
                        dataType : "json",
                        url : apartment_scripts.ajaxurl,
                        data : {action: "apartment_wp_get_locations", location_name: $( this ).val(), level: '3' },
                        success: function(response) {

                           $selectbox = $( "select[name='" + name + "']" );
                           $selectbox.empty();
                            var list = '';
                            for (var i = 0; i < response.length; i++){
                                if( (option = response[i].trim()).length ) {
                                    list += "<option value='" + option + "'>" + option + "</option>";
                                }
                            }
                            $selectbox.html(list);
                            $selectbox.selectpicker('refresh');
                            $selectbox.selectpicker('selectAll');
                            $selectbox.trigger('change');
                            $selectbox.selectpicker('deselectAll');
                        }
                    })    
                });

                $( "select[name='location3_" + sidebarTermId[i] +"[]']" ).change(function() {
                    var name = $(this).attr('name').toString().replace('location3','location4');
                    jQuery.ajax({
                        type : "post",
                        dataType : "json",
                        url : apartment_scripts.ajaxurl,
                        data : {action: "apartment_wp_get_locations", location_name: $( this ).val(), level: '4' },
                        success: function(response) {

                           $selectbox = $( "select[name='" + name + "']" );
                           $selectbox.empty();
                            var list = '';
                            for (var i = 0; i < response.length; i++){
                                if( (option = response[i].trim()).length ) {
                                    list += "<option value='" + option + "'>" + option + "</option>";
                                }
                            }
                            $selectbox.html(list);
                            $selectbox.html(list);
                            $selectbox.selectpicker('refresh');
                            $selectbox.selectpicker('selectAll');
                            $selectbox.trigger('change');
                            $selectbox.selectpicker('deselectAll');
                        }
                    })    
                });
            }
        }

         $( "select[name='property_type']" ).change(function() {

            jQuery.ajax({
                type : "post",
                dataType : "json",
                url : apartment_scripts.ajaxurl,
                data : {action: "apartment_wp_get_subtypes", type_name: $( this ).val() },
                success: function(response) {

                   $selectbox = $( "select[name='property_subtype']" );
                   $selectbox.empty();
                    var list = '';
                    for (var i = 0; i < response['ids'].length; i++){
                        if( response['ids'][i] && response['names'][i] ) {
                            list += "<option value='" + response['ids'][i] + "'>" + response['names'][i] + "</option>";
                        }
                    }
                    $selectbox.html(list);
                    $selectbox.selectpicker('refresh');
                    $selectbox.selectpicker('selectAll');
                    $selectbox.trigger('change');
                    $selectbox.selectpicker('deselectAll');
                }
            })    
        });


    /********** AJAX AUTOCOMPLETE **********/	


        if( typeof termId !== 'undefined' && termId ) {
            for( i = 0, j = termId.length; i < j;i++ ) {
                $( '#location-ajax-1x_' + termId[i] ).autocomplete({
                    source: apartment_scripts.ajaxurl  + "?action=apartment_wp_autocomplete",
                    minLength: 2,
                }).autocomplete( "instance" )._renderItem = function( ul, item ) {
                    item.label = item.label.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + $.ui.autocomplete.escapeRegex(this.term) + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>");

                    return $( "<li></li>" )
                        .data( "item.autocomplete", item )
                        .append( "<a>" + item.label +"</a>" )
                        .appendTo( ul );
                };

                $( '#location-ajax-2x_' + termId[i] ).autocomplete({
                    source: apartment_scripts.ajaxurl  + "?action=apartment_wp_autocomplete",
                    minLength: 2,
                }).autocomplete( "instance" )._renderItem = function( ul, item ) {
                    item.label = item.label.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + $.ui.autocomplete.escapeRegex(this.term) + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>");
                    return $( "<li></li>" )
                        .data( "item.autocomplete", item )
                        .append( "<a>" + item.label +"</a>" )
                        .appendTo( ul );
                };

                $( '#location-ajax-3x_' + termId[i] ).autocomplete({
                    source: apartment_scripts.ajaxurl  + "?action=apartment_wp_autocomplete",
                    minLength: 2,
                }).autocomplete( "instance" )._renderItem = function( ul, item ) {
                    item.label = item.label.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + $.ui.autocomplete.escapeRegex(this.term) + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>");

                    return $( "<li></li>" )
                        .data( "item.autocomplete", item )
                        .append( "<a>" + item.label +"</a>" )
                        .appendTo( ul );
                };
            }
        }

        $( '#simple-location' ).autocomplete({
            source: apartment_scripts.ajaxurl  + "?action=apartment_wp_autocomplete",
            minLength: 2,
        }).autocomplete( "instance" )._renderItem = function( ul, item ) {
            item.label = item.label.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + $.ui.autocomplete.escapeRegex(this.term) + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>");

            return $( "<li></li>" )
                .data( "item.autocomplete", item )
                .append( "<a>" + item.label +"</a>" )
                .appendTo( ul );
        };


        if( ! $('#submit-location1').val() ) { 
            $('#submit-location2').prop("disabled", true);
            $('#submit-location2').val('');
        } else {
            $('#submit-location2').prop("disabled", false)
        }

        if( ! $('#submit-location2').val() ) {
            $('#submit-location3').prop("disabled", true);
            $('#submit-location3').val('');
        } else {
            $('#submit-location3').prop("disabled", false)
        }

        if( ! $('#submit-location3').val() ) {
            $('#submit-location4').prop("disabled", true);
            $('#submit-location4').val('');
        } else {
            $('#submit-location4').prop("disabled", false)
        }

        $('#submit-location1').change( function () {
            if( ! $('#submit-location1').val() ) {
                $('#submit-location2').prop("disabled", true);
                $('#submit-location2').val('');
            } else {
                $('#submit-location2').prop("disabled", false);
                $('#submit-location2').val('');
            }
            $('#submit-location2').trigger('change');
        });

        $('#submit-location2').change( function () {
            if( ! $('#submit-location2').val() ) {
                $('#submit-location3').prop("disabled", true);
                $('#submit-location3').val('');
            } else {
                $('#submit-location3').prop("disabled", false);
                 $('#submit-location3').val('');
            }
            $('#submit-location3').trigger('change');
        });

        $('#submit-location3').change( function () {
            if( ! $('#submit-location3').val() ) {
                $('#submit-location4').prop("disabled", true);
                $('#submit-location4').val('');
            } else {
                $('#submit-location4').prop("disabled", false);
                $('#submit-location4').val('');
            }
            $('#submit-location4').trigger('change');
        });

        $('#submit-location1').keyup( function () {
            if( ! $('#submit-location1').val() ) {
                $('#submit-location2').prop("disabled", true);
                $('#submit-location2').val('');
            } else {
                $('#submit-location2').prop("disabled", false);
                 $('#submit-location2').val('');
            }
            $('#submit-location2').trigger('change');
        });

        $('#submit-location2').keyup( function () {
            if( ! $('#submit-location2').val() ) {
                $('#submit-location3').prop("disabled", true);
                $('#submit-location3').val('');
            } else {
                $('#submit-location3').prop("disabled", false);
                $('#submit-location3').val('');
            }
            $('#submit-location3').trigger('change');
        });

        $('#submit-location3').keyup( function () {
            if( ! $('#submit-location3').val() ) {
                $('#submit-location4').prop("disabled", true);
                $('#submit-location4').val('');
            } else {
                $('#submit-location4').prop("disabled", false);
                $('#submit-location4').val('');
            }
            $('#submit-location4').trigger('change');
        });



        $( '#submit-location1' ).autocomplete({
            source: apartment_scripts.ajaxurl  + "?action=apartment_wp_autocomplete_level&level=1",
            minLength: 2,

        }).autocomplete( "instance" )._renderItem = function( ul, item ) {
            item.label = item.label.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + $.ui.autocomplete.escapeRegex(this.term) + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>");

            return $( "<li></li>" )
                .data( "item.autocomplete", item )
                .append( "<a>" + item.label +"</a>" )
                .appendTo( ul );
        };
        $( '#submit-location2' ).autocomplete({
            //source: apartment_scripts.ajaxurl  + "?action=apartment_wp_autocomplete_level&level=2&parent=" + ( var p = function(){ return $( '#submit-location1' ).val(); } ),
        source: function (request, response) {
            $.ajax({
                url: apartment_scripts.ajaxurl  + "?action=apartment_wp_autocomplete_level&level=2&parent=" + $( '#submit-location1' ).val(),
                data: request,
                success: response,
                error: function () {
                    response([]);
                },
                dataType: 'json'
            });
        },
        minLength: 2,

        }).autocomplete( "instance" )._renderItem = function( ul, item ) {
            item.label = item.label.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + $.ui.autocomplete.escapeRegex(this.term) + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>");

            return $( "<li></li>" )
                .data( "item.autocomplete", item )
                .append( "<a>" + item.label +"</a>" )
                .appendTo( ul );
        };
        $( '#submit-location3' ).autocomplete({
            //source: apartment_scripts.ajaxurl  + "?action=apartment_wp_autocomplete_level&level=3&parent=" + $( '#submit-location2' ).val(),
            source: function (request, response) {
                $.ajax({
                    url: apartment_scripts.ajaxurl  + "?action=apartment_wp_autocomplete_level&level=3&parent=" + $( '#submit-location2' ).val(),
                    data: request,
                    success: response,
                    error: function () {
                        response([]);
                    },
                    dataType: 'json'
                });
            },
            minLength: 2,

        }).autocomplete( "instance" )._renderItem = function( ul, item ) {
            item.label = item.label.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + $.ui.autocomplete.escapeRegex(this.term) + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>");

            return $( "<li></li>" )
                .data( "item.autocomplete", item )
                .append( "<a>" + item.label +"</a>" )
                .appendTo( ul );
        };
        $( '#submit-location4' ).autocomplete({
            source: function (request, response) {
                $.ajax({
                    url: apartment_scripts.ajaxurl  + "?action=apartment_wp_autocomplete_level&level=4&parent=" + $( '#submit-location3' ).val(),
                    data: request,
                    success: response,
                    error: function () {
                        response([]);
                    },
                    dataType: 'json'
                });
            },
            minLength: 2,

        }).autocomplete( "instance" )._renderItem = function( ul, item ) {
            item.label = item.label.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + $.ui.autocomplete.escapeRegex(this.term) + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>");

            return $( "<li></li>" )
                .data( "item.autocomplete", item )
                .append( "<a>" + item.label +"</a>" )
                .appendTo( ul );
        };



    /********** ADD TO FAVOURITES **********/	



         $( ".fav-icon" ).click(function(e) {
            e.preventDefault();
            var $icon = $( this ).find('i');
                    jQuery.ajax({
                        type : "post",
                        dataType : "json",
                        url : apartment_scripts.ajaxurl,
                        data : {action: "apartment_wp_add_favourite", prop_id: $( this ).data('prop'), user_id: $( this ).data('user') },
                        success: function(response) {
                            if( response == 1 ) { //deleted favourite
                               $icon.removeClass('fav-added');
                            } else if ( response == 2 ) { // added favourite
                                $icon.addClass('fav-added');
                            }
                        }
                    })    
                });




    /********** GRID LAYOUT **********/		



        $('.featured-offer-col').each( function () {
            var gh = 0; 
            gh += $(this).find('.featured-offer-photo').outerHeight();
            gh += $(this).find('.featured-offer-text').outerHeight();
            gh += $(this).find('.featured-price').outerHeight();
            gh += $(this).find('.featured-offer-params').outerHeight();
            $(this).stop(true, true).animate( { height: gh + 45 }, 0);
            $(this).find('.featured-offer-back').stop(true, true).animate( { height: gh - 40}, 0);
        });
        if( w_width < 768 ) {
            $('.grid-offer-col').each( function () {
                var gh = 0; 
                gh += $(this).find('.grid-offer-photo').outerHeight();
                gh += $(this).find('.grid-offer-text').outerHeight();
                gh += $(this).find('.price-grid-cont').outerHeight();
                gh += $(this).find('.grid-offer-params').outerHeight();
                $(this).find('.grid-offer').stop(true, true).animate( { height: gh }, 0);
                $(this).find('.grid-offer-back').stop(true, true).animate( { height: gh }, 0);
            });
        }
        $('.list-offer-left').each( function () {
            var gh = 0; 
            gh += $(this).find('.list-offer-photo').outerHeight();
            gh += $(this).find('.list-offer-params').outerHeight();
            $(this).stop(true, true).animate( { height: gh - 30 }, 0);
            $(this).find('.list-offer-back').stop(true, true).animate( { height: gh }, 0);
        });	

        setTimeout(function(){ 
            if( w_width < 768 ) {
                $('.grid-offer-col').each( function () {
                    var gh = 0; 
                    gh += $(this).find('.grid-offer-photo').outerHeight();
                    gh += $(this).find('.grid-offer-text').outerHeight();
                    gh += $(this).find('.price-grid-cont').outerHeight();
                    gh += $(this).find('.grid-offer-params').outerHeight();
                    $(this).find('.grid-offer').stop(true, true).animate( { height: gh }, 0);
                    $(this).find('.grid-offer-back').stop(true, true).animate( { height: gh }, 0);
                });
            }
            $('.featured-offer-col').each( function () {
                var gh = 0; 
                gh += $(this).find('.featured-offer-photo').outerHeight();
                gh += $(this).find('.featured-offer-text').outerHeight();
                gh += $(this).find('.featured-price').outerHeight();
                gh += $(this).find('.featured-offer-params').outerHeight();
                $(this).stop(true, true).animate( { height: gh + 45 }, 0);
                $(this).find('.featured-offer-back').stop(true, true).animate( { height: gh - 40}, 0);
            });
            $('.list-offer-left').each( function () {

                var gh = 0; 
                gh += $(this).find('.list-offer-photo').outerHeight();
                gh += $(this).find('.list-offer-params').outerHeight();
                $(this).stop(true, true).animate( { height: gh - 30 }, 0);
                $(this).find('.list-offer-back').stop(true, true).animate( { height: gh }, 0);
            });	
        }, 500);
        	



    /********** MASONRY LAYOUT **********/		



        if( $('.masonry-grid').length ) {
            masonryGrid = $('.masonry-grid').isotope({
                itemSelector: '.masonry-grid-item',
                percentPosition: false,
                masonry: {
                  columnWidth: '.masonry-grid-sizer',
                  gutter: 30
                }
            })
        }

        if( $('.gallery-grid').length ) {
            galleryGrid = $('.gallery-grid').isotope({
                itemSelector: '.gallery-grid-item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.gallery-grid-sizer',
                }
            });
            $('.gallery-filter').click( function() {
                var filterValue = $(this).attr('data-filter');
                galleryGrid.isotope({ filter: filterValue });
            });
        }



    /********** FILE INPUT **********/	



        if( $('#gallery-upload').length ) {
            $('#gallery-upload').fileinput({
                uploadUrl: '#',
                allowedFileExtensions : ['jpg','jpeg','png','gif'],
                language: 'pl',
                showUpload: false,
                showRemove: false,
                maxFileCount: 48,
                initialPreview: ip,
                initialPreviewConfig: ipc,
                dropZoneEnabled: false,
                fileActionSettings:{
                    showDrag: false,
                    showZoom: false,
                    },
                layoutTemplates:  {'footer':
        '<div class="file-thumbnail-footer">\n' +
        '<div class="file-footer-caption">{caption}</div>' +
        ' <div class="gallery-cover"><input type="checkbox" value="" id="" name="gallery-cover[]" class="main-checkbox gc-checkbox" />\n' +
        ' <label for=""><span></span>' + cLabel + '</label>\n' +
        ' </div>\n' +
        ' {actions}\n' +
        '</div>'
                },
                validateInitialCount: true,
                overwriteInitial: false,
                browseClass: "button-shadow btn",
            });
            
            $('#gallery-upload').on('filedeleted', function(event, key) {
		$('#gallery-upload-deleted').val($('#gallery-upload-deleted').val() + key + ',');
            });
        }

        var i = 0;
        $('.gallery-cover').each( function() {
           $( this ).children('input').attr('id', 'gc' + i );
           $( this ).children('label').attr('for', 'gc' + i++ );
           $( this ).children('input').val( i );
           if( (i-1) == thumbnailId ) {
                $( this ).children('input').prop('checked',true);
           }

        });

        $('.gc-checkbox').change( function () {
            if( $( this ).prop('checked') ) {
                $('.gc-checkbox').each( function() {
                    $( this ).prop('checked', false);
                });
                $(this).prop('checked',true);
            } else {
                $('#gc0').prop('checked',true);
            }
        });

         $('#gallery-upload').on('fileloaded', function(event) {
             var i = 0;
            $('.gallery-cover').each( function() {
               $( this ).children('input').attr('id', 'gc' + i );
               $( this ).children('label').attr('for', 'gc' + i++ );
               $( this ).children('input').val( i );

            });
            $('.gc-checkbox').change( function () {
                if( $( this ).prop('checked') ) {
                    $('.gc-checkbox').each( function() {
                        $( this ).prop('checked', false);
                    });
                    $(this).prop('checked',true);
                } else {
                    $('#gc0').prop('checked',true);
                }
            });
        });

           $('#gallery-upload').on('filepredelete', function(event, key) {
            $('#gi' + key ).remove();
        });

        if( $('#plans-upload').length ) {
            $('#plans-upload').fileinput({
                uploadUrl: '#',
                allowedFileExtensions : ['jpg','jpeg','png','gif'],
                language: 'pl',
                showUpload: false,
                showRemove: false,
                maxFileCount: 48,
                initialPreview: ip2,
                initialPreviewConfig: ipc2,
                validateInitialCount: true,
                overwriteInitial: false,
                dropZoneEnabled: false,
                browseClass: "button-shadow btn",
            });
            
            $('#plans-upload').on('filedeleted', function(event, key) {
		$('#plans-upload-deleted').val($('#plans-upload-deleted').val() + key + ',');
            });
        }

         if( $('#files-upload').length ) {
            $('#files-upload').fileinput({
                uploadUrl: '#',
                allowedFileExtensions : ['jpg','jpeg','png','gif','svg','ico','pdf','doc','docx','txt','ppt','pptx','pps','ppsx','odt','xls','xlsx','psd','mp3','m4a','ogg','wav','mp4','m4v','wmv','mov','avi','mpg','ogv','3gp','3g2'],
                previewClass: 'files-upload',
                language: 'pl',
                showUpload: false,
                showRemove: false,
                maxFileCount: 48,
                initialPreview: ip3,
                initialPreviewConfig: ipc3, 
                validateInitialCount: true,
                overwriteInitial: false,
                dropZoneEnabled: false,
                previewFileIcon: '<i class="fa fa-file-o text-primary"></i>',
                allowedPreviewTypes: false, // set to empty, null or false to disable preview for all types
                previewFileIconSettings: {
                    'docx': '<i class="fa fa-file-word-o text-primary"></i>',
                    'xlsx': '<i class="fa fa-file-excel-o text-primary"></i>',
                    'pptx': '<i class="fa fa-file-powerpoint-o text-primary"></i>',
                    'jpg': '<i class="fa fa-file-photo-o text-primary"></i>',
                    'gif': '<i class="fa fa-file-photo-o text-primary"></i>',
                    'png': '<i class="fa fa-file-photo-o text-primary"></i>',
                    'pdf': '<i class="fa fa-file-pdf-o text-primary"></i>',
                    'zip': '<i class="fa fa-file-archive-o text-primary"></i>',
                },
                browseClass: "button-shadow btn",
            });
            
            $('#files-upload').on('filedeleted', function(event, key) {
                console.log('Key = ' + key);
		$('#files-upload-deleted').val($('#files-upload-deleted').val() + key + ',');
            });
        }

        $("#video-delete").click(function(e) {
            e.preventDefault();
            $( "#video-remove-click" ).val(1);
            $( "#submitted-video" ).fadeOut('slow');
            $("#video").prop('disabled', false);
            $("#video_link").prop('disabled', false);
        });   

        $("#slide-delete").click(function(e) {
            e.preventDefault();
            $( "#slide-remove-click" ).val(1);
            $( "#submitted-slide" ).fadeOut('slow');
        });   



    /********** AGENT PHOTO UPLOAD **********/		



        $( "#agent-photo" ).change( function() {
            $( "#agent-file-name" ).val( $(this).val() );
            $( "#agent-file-name" ).fadeTo(500,1);
            $( "#agent-profile-photo" ).fadeTo(500,0.5);
        })



    /********** ADVANCED SEARCH HIDE **********/		



        if( $("#adv-search-hide").length ) {
            $("#adv-search-hide").click(function(e) {
                e.preventDefault();
                if( $(this).hasClass('search-hidden') ) {
                        $(".adv-search-cont").css('bottom', '45px');
                        $(this).css('margin-top','19px');
                        $(this).removeClass('adv-search-hide-rotate');
                        $(this).removeClass('search-hidden');
                        setTimeout(function(){ 
                            $('.adv-search-section').css('overflow', 'visible'); 
                        }, 1000);

                } else {
                        $(".adv-search-cont").css('bottom', -$(".adv-search-cont").innerHeight() + 'px');
                        $(this).css('margin-top','-50px');
                        $(this).addClass('adv-search-hide-rotate');
                        $(this).addClass('search-hidden');
                        $('.adv-search-section').css('overflow', 'hidden'); 
                }
            })
        }



    /********** MODALS **********/		



        var click;
        $( ".register-link" ).click( function() {
            $( "#login-modal").modal('hide');
            click = true;
            $('#login-modal').on('hidden.bs.modal', function () {
                if(click) $( "#register-modal").modal();
                click = false;
            })
            $('body').css('padding-right','0px');
        })

        $( ".login-link" ).click( function() {
            $( "#register-modal" ).modal('hide');
            click = true;
            $('#register-modal').on('hidden.bs.modal', function () {
                if(click) $( "#login-modal" ).modal();
                click = false;
            })
            $('body').css('padding-right','0px');
        })

        $( ".forgot-link" ).click( function() {
            $( "#login-modal" ).modal('hide');
            $( "#forgot-modal" ).modal();
            $('body').css('padding-right','0px');
        })

        $( "#login-modal" ).on('hidden.bs.modal', function (e) {
            $('body').css('padding-right','0px');
        })
        $( "#register-modal" ).on('hidden.bs.modal', function (e) {
            $('body').css('padding-right','0px');
        })
        $( "#forgot-modal" ).on('hidden.bs.modal', function (e) {
            $('body').css('padding-right','0px');
        })

        $(".register-link").on('shown.bs.modal', function (e) {
            $('body').css('padding-right','0px');
        })
        $(".login-link").on('shown.bs.modal', function (e) {
            $('body').css('padding-right','0px');
        })
        $(".forgot-link").on('shown.bs.modal', function (e) {
            $('body').css('padding-right','0px');
        })



    /********** GEOCOMPLETE ON SUMBMIT PROPERTY PAGE **********/		



        if($("#geocomplete").length) {
            $("#geocomplete").geocomplete({
                map: "#submit-property-map",
                details: "form ",
                location: new google.maps.LatLng($("input[name=lat]").val(), $("input[name=lng]").val() ),
                mapOptions: {
                    zoom: 14,
                    scrollwheel: true,
                    mapTypeId: "roadmap",
                    disableDefaultUI: false,
                    mapTypeControl: true,
                    mapTypeControlOptions: {
                        position: google.maps.ControlPosition.LEFT_TOP
                    },
                    zoomControl: true,
                    zoomControlOptions: {
                        position: google.maps.ControlPosition.RIGHT_TOP
                    },
                    scaleControl: true,
                    streetViewControl: true,
                    streetViewControlOptions: {
                        position: google.maps.ControlPosition.RIGHT_TOP
                    },
                    styles: mapStyle         
                },
                markerOptions: {
                    draggable: true,
                    icon: emptyPin
                }
            });

            $("#geocomplete").bind("geocode:dragged", function(event, latLng){
                $("input[name=lat]").val(latLng.lat());
                $("input[name=lng]").val(latLng.lng());
            });
        }

        //redraw map
        $("a[href='#tab-map']").click( function() {
            if( estateMap ) {
                setTimeout(function(){ 
                    google.maps.event.trigger(estateMap,'resize');
                }, 500);
            }
        });
        $("a[href='#tab-street-view']").click( function() {
            if( panorama ) {
                setTimeout(function(){ 
                    panorama.setVisible(true);
                }, 500);
            }
        });



    /********** DISABLE MOBILE HOVER **********/		



        if( !disableMobileHover || !($('html').hasClass('mobile')) ) {
            $('html').addClass('no-pointerevents').addClass('no-touchevents');
            $('html').removeClass('pointerevents').removeClass('touchevents');
        } else {         
            $('html').addClass('pointerevents').addClass('touchevents');
            $('html').removeClass('no-pointerevents').removeClass('no-touchevents');
        }
        if( ( ($('html').hasClass('pointerevents') || $('html').hasClass('touchevents') ) && disableMobileHover ) || ie9 ) {       
            $('.featured-offer-col').css('cursor','pointer');
            $('.featured-offer-col').find(".button-primary").css('visibility','hidden');
            $('.grid-offer').css('cursor','pointer');
            $('.grid-offer').find(".button-primary").css('visibility','hidden');
            $('.featured-offer-col').click( function() {
                window.location.href = $(this).find(".button-primary").attr('href');
            });
            $('.grid-offer').click( function() {
                window.location.href = $(this).find(".button-primary").attr('href');	
            });
        }



    /********** IE <=9 PLACEHOLDER FIX **********/	



        if(ie9) {		
            $('[placeholder]').focus(function() {
                var input = $(this);
                if (input.val() == input.attr('placeholder')) {
                    input.val('');
                    input.removeClass('placeholder');
                }
            }).blur(function() {
                var input = $(this);
                if (input.val() == '' || input.val() == input.attr('placeholder')) {
                    input.addClass('placeholder');
                    input.val(input.attr('placeholder'));
                }
                }).blur().parents('form').submit(function() {
                    $(this).find('[placeholder]').each(function() {
                    var input = $(this);
                    if (input.val() == input.attr('placeholder')) {
                        input.val('');
                    }
                })
            });
        }



    /********** SUBMIT & VALIDATE FORM **********/				



        $("#comment-submit").click(function(e) {
            e.preventDefault();
            $( "#commentform" ).submit();
        });   


        $("#sort-form #sort").change(function() {
            $("#sort-form").submit();
        });

       $("#simple-search-submit").click(function(e) {
            e.preventDefault();
            $( ".simple-search-form" ).submit();
        });   
        
        $("#agent-search-submit").click(function(e) {
            e.preventDefault();
            $( ".agent-search-form" ).submit();
        });  

        $("#adv-search-submit").click(function(e) {
            e.preventDefault();
            $( ".adv-search-form" ).submit();
        });   

        $("#sidebar-search-submit").click(function(e) {
            e.preventDefault();
            $( "#sidebar-search-form" ).submit();
        }); 

        $("#login-submit").click(function(e) {
            e.preventDefault();
            $( "#login-form" ).submit();
        });   

        $("#register-submit").click(function(e) {
            e.preventDefault();
            $( "#register-form" ).submit();
        });   

        $("#forgot-submit").click(function(e) {
            e.preventDefault();
            $( "#lostpasswordform" ).submit();
        });   

        $("#profile-submit").click(function(e) {
            e.preventDefault();
            $( "#agent-form" ).submit();
        });   

        $("#offer-submit").click(function(e) {
            e.preventDefault();
            var error = false;

            $('#offer-form')
                .find("input, select, textarea")
                .filter('[data-required="required"]')
                .each(function() {                    
                    if( $(this).val() == '' && $(this).attr('id') != 'gallery-upload' && $(this).attr('id') != 'plans-upload' && $(this).attr('id') != 'files-upload' ) {
                        error = true;
                        $(this).css({ "border-color":"red" });
                        $(this).prev('label').append(" " + apartment_scripts.required);
                        $(this).prev('label').addClass('bg-danger');
                    }   
                       
            });
            if( $('#gallery-upload').data('required') == 'required' ) {
                if( $('#gallery-upload').get(0).files.length === 0 && $('[name="gallery-initial[]"]').length == 0 ) {
                    $('#gallery-error').removeClass('hidden');
                    error = true;
                }
            }
            
            if( $('#plans-upload').data('required') == 'required' ) {
               
                if( $('#plans-upload').get(0).files.length === 0 && $('[name="plans-initial[]"]').length == 0 ) {
                    $('#plans-error').removeClass('hidden');
                    error = true;
                }
            }
            
            if( $('#files-upload').data('required') == 'required' ) {
                if( $('#files-upload').get(0).files.length === 0 && $('[name="files-initial[]"]').length == 0 ) {
                    $('#files-error').removeClass('hidden');
                    error = true;
                }
            }
            
            
            if( !error ) {
                $( "#offer-form" ).submit();
            } else {
                $("#offer-submit").before('<p class="bg-danger"><strong>' + apartment_scripts.fillall + '.</strong></p>');
            }
            
        });   

        $("#choose-role-submit").click(function(e) {
            e.preventDefault();
            $( "#choose-role-form" ).submit();
        });   

        $("#change-package-submit").click(function(e) {
            e.preventDefault();
            $( "#change-package-form" ).submit();
        });   
        
        $("#submit-password-post").click(function(e) {
            e.preventDefault();
            $( "#form-password-post" ).submit();
        });     
        
        $("a[name='activation-edit-listing']").click(function(e) {
            e.preventDefault();
            $( this ).parent( 'form' ).submit();
        });  
        
        $("a[name='activation-edit-package']").click(function(e) {
            var propid = $( this ).data('propid');
            e.preventDefault();
            jQuery.ajax({
                type : "post",
                dataType : "json",
                url : apartment_scripts.ajaxurl,
                data: { action: "apartment_wp_activation_edit_package", user_id: document.getElementById( "user-id" + propid ).value, listing_id: document.getElementById( "listing-id" + propid ).value, activate: document.getElementById( "activate" +propid ).checked, add_featured: document.getElementById( "add-featured" + propid ).checked, add_slider: document.getElementById( "add-slider" + propid ).checked },

                success: function(response) {
                    
                    window.location.href = response;

                }
            })   
        });        
        
        $("a[name='activation-edit-free']").click(function(e) {
            var propid = $( this ).data('propid');
            e.preventDefault();
            jQuery.ajax({
                type : "post",
                dataType : "json",
                url : apartment_scripts.ajaxurl,
                data: { action: "apartment_wp_activation_edit_free", user_id: document.getElementById( "user-id" + propid ).value, listing_id: document.getElementById( "listing-id" + propid ).value, activate: document.getElementById( "activate" +propid ).checked, add_featured: document.getElementById( "add-featured" + propid ).checked, add_slider: document.getElementById( "add-slider" + propid ).checked },

                success: function(response) {
                    
                    window.location.href = response;

                }
            })   
        });  


        $('#delete-modal').on('show.bs.modal', function (event) {
            var button = $(event.relatedTarget) // Button that triggered the modal
            var recipient = button.data('pid') // Extract info from data-* attributes
            var modal = $(this);
            var link = $('#delete-modal #delete-confirm-link').attr('href');
            link = link.replace('did', button.data('pid' ));
            $('#delete-modal #delete-confirm-link').attr('href', link);
         })
         
         
        $("#form-submit").click(function(e) {
            
            e.preventDefault();
            jQuery.ajax({
                type : "post",
                dataType : "json",
                url : apartment_scripts.ajaxurl,
                data: { action: "apartment_wp_send_email", sendmail: "1", name: document.getElementById( "name" ).value, mail: document.getElementById( "mail" ).value, phone: document.getElementById( "phone" ).value, message: document.getElementById( "message" ).value, receivemail: document.getElementById( "receivemail" ).value, prop_id: ( ($('#prop_id').length) ? document.getElementById( "prop_id" ).value : null ), prop_url: ( ($('#prop_url').length) ? document.getElementById( "prop_url" ).value : null ) },

                //data : {action: "apartment_wp_get_locations", location_name: $( this ).val(), level: '3' },
                success: function(response) {
                    
                   if ( response == "false" ) {

                        var formInput = document.getElementById( "contact-form" );
                        formInput.style.border = "1px solid #d12f19";
                        formError.push( "contact-form" );
                    } else if ( response ) {

                        document.getElementById( "form-result" ).innerHTML = response;
                        if ( ( response ).indexOf( 'class="success' ) > -1 ) {
                            document.getElementById( formid ).reset();
                        }
                    } 
                }
            })   
        });   
        
   
        
        
        
    /********** DATEPICKER **********/	



    $( ".datepicker" ).datepicker();



    /********** ALL LOAD, REMOVE LOADER **********/				


        $( '.post_thumbnail_figure' ).height($('.post_thumbnail_figure img').height());
        $(".loader-bg").fadeOut('slow');
        //window.setTimeout(function() {jQuery(window).trigger("smartresize");},2000);
        $(window).trigger("smartresize");


    }
})(jQuery);



/********** ON WINDOW RESIZE ADJUSTMENTS **********/		



(function($,sr){

    // debouncing function from John Hann
    // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
    var debounce = function (func, threshold, execAsap) {
    var timeout;

    return function debounced () {
        var obj = this, args = arguments;
        function delayed () {
            if (!execAsap)
                func.apply(obj, args);
                timeout = null;
            };

            if (timeout) {
                clearTimeout(timeout);
            }
            else if (execAsap) {
                func.apply(obj, args);
            }
            timeout = setTimeout(delayed, threshold || 100);
        };
    }
    // smartresize 
    jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');


jQuery(window).smartresize(function(){

    jQuery( '.post_thumbnail_figure' ).height(jQuery('.post_thumbnail_figure img').height());
    w_height = jQuery(window).height();
    w_width = jQuery(window).width();
    if( jQuery("#swiper1").length ) {
        var sliderHeight;
        var sliderDescTop;
        if(jQuery(".simple-search-cont").length) {
            if( w_height > 600 || w_width < 481 ) {
                sliderHeight = w_height - jQuery('header.header1').innerHeight();
                sliderDescTop = ( sliderHeight - jQuery('.search-cont').innerHeight() + jQuery('header.header2').innerHeight() - 45 ) / 2;
            } else if( w_height < 400 ) {
                sliderHeight = 450 + jQuery('header.header2').innerHeight();
                sliderDescTop = 180;

            } else  {
                sliderHeight = 450 + jQuery('header.header2').innerHeight(); 
                sliderDescTop = ( sliderHeight - jQuery('.search-cont').innerHeight() + jQuery('header.header2').innerHeight() - 45 ) / 2;
            }
            jQuery("#swiper1").css('height', sliderHeight + 'px');
            jQuery("#swiper1 .container").each( function() {
                jQuery(this).css('top', sliderDescTop - jQuery(this).innerHeight()/2 + 'px');
            });

        } else {
            if( w_height > 850 || w_width < 481 ) {
                sliderHeight = w_height - jQuery('header.header1').innerHeight();
                sliderDescTop = (sliderHeight - jQuery('.search-cont').innerHeight() - 45)/2;
            } else {
                sliderHeight = 720 + jQuery('header.header2').innerHeight();
                sliderDescTop = (sliderHeight - jQuery('.search-cont').innerHeight() - 45)/2;
            }
            jQuery("#swiper1").css('height', sliderHeight + 'px');
            jQuery("#swiper1 .container").each( function() {
                jQuery(this).css('top', sliderDescTop - jQuery(this).innerHeight()/2 + jQuery( 'header.header2' ).innerHeight( )/3 + 'px');
            });
        }
    }	
    if( jQuery("#swiper2").length ) {
        var sliderHeight;
        var sliderDescTop;
        if(jQuery(".simple-search-cont").length) {
            if( w_height > 580 ) {
                sliderHeight = w_height - jQuery('header.header1').innerHeight();
            } else {
                sliderHeight = 450 + jQuery('header.header2').innerHeight();
            }

            sliderDescTop = ( sliderHeight - jQuery('.search-cont').innerHeight() + jQuery('header.header2').innerHeight() - 45 ) / 2 ;   
            jQuery("#swiper2").css('height', sliderHeight + 'px');
            jQuery("#swiper2 .container").each( function() {
                jQuery(this).css('top', sliderDescTop - jQuery(this).innerHeight()/2 + 'px');
            });
        } else {

            if( w_height > 800 ) {
                sliderHeight = w_height - jQuery('header.header1').innerHeight();
            } else {
                sliderHeight = 670 + jQuery('header.header2').innerHeight();
            }

            sliderDescTop = ( sliderHeight - jQuery('.search-cont').innerHeight() + jQuery('header.header2').innerHeight() - 45 ) / 2 ;   
            jQuery("#swiper2").css('height', sliderHeight + 'px');
            jQuery("#swiper2 .container").each( function() {
                jQuery(this).css('top', sliderDescTop - jQuery(this).innerHeight()/2 + 'px');
            });

        }
    }
    if( jQuery("#offers-map").length ) {
        var mapHeight;
        if( mobile ) {
            mapHeight = w_height - jQuery('header').innerHeight() - 30;
        } else if( w_height > 650 ) {
            mapHeight = w_height - jQuery('header').innerHeight();
        } else  {
            mapHeight = 600;
        }
        jQuery("#offers-map").css('height', mapHeight + 'px');
    }

    if( jQuery(".offers-map2").length ) {
        var mapHeight;
        if( mobile ) {
            mapHeight = w_height - 30;
        } else if( w_height > 650 ) {
            mapHeight = w_height;
        } else {
            mapHeight = 600;
        }
        jQuery(".offers-map2").css('height', mapHeight + 'px');
    }
    if( jQuery("#swiper-gallery").length ) {
        var sliderHeight;
        var header2;
        if( jQuery("header.header2").length ) {
            var header2 = 140;
        } else {
            header2 = 0;
        }
        if( w_height > 650  || w_width < 481 ) {
            sliderHeight = w_height - jQuery('header').innerHeight() - jQuery('.thumbs-slider').outerHeight() + header2;
        } else {
            sliderHeight = 500;
        }
        jQuery("#swiper-gallery").css('height', sliderHeight + 'px');
        jQuery("#swiper-gallery .slide-desc-col").css('height', sliderHeight + 'px');
    }

    if( jQuery("#full-street-view").length ) {
        var sliderHeight;
        var sliderDescTop;
        staticDescHeight = jQuery(".swiper2-static-desc .slide-desc").innerHeight();
        if( w_height > 500 ) {
            sliderHeight = w_height - jQuery('header').innerHeight();
            sliderDescTop = sliderHeight - staticDescHeight - 170;
        } else {
            sliderHeight = 600;
            sliderDescTop = 100;
        }
        jQuery("#full-street-view").css('height', sliderHeight + 'px');
        jQuery(".swiper2-static-desc").css('top', sliderDescTop + 'px');
    }

    if( jQuery('.gallery-grid').length ) {
        galleryGrid.isotope('layout');
    }

    if( jQuery('.masonry-grid').length ) {
        masonryGrid.isotope('layout');
    }

    jQuery('.list-offer-left').each( function () {
        var gh = 0; 
        gh += jQuery(this).find('.list-offer-photo').outerHeight();
        gh += jQuery(this).find('.list-offer-params').outerHeight();
        jQuery(this).stop(true, true).animate( { height: gh - 30 }, 0);
        jQuery(this).find('.list-offer-back').stop(true, true).animate( { height: gh }, 0);
    });	

    jQuery('.featured-offer-col').each( function () {
        var gh = 0; 
        gh += jQuery(this).find('.featured-offer-photo').outerHeight();
        gh += jQuery(this).find('.featured-offer-text').outerHeight();
        gh += jQuery(this).find('.featured-price').outerHeight();
        gh += jQuery(this).find('.featured-offer-params').outerHeight();
        jQuery(this).stop(true, true).animate( { height: gh }, 0);
    });
    if( w_width < 768 ) {
        jQuery('.grid-offer-col').each( function () {
            console.log( jQuery(this).find('.grid-offer-photo').outerHeight() + ' ' + jQuery(this).find('.grid-offer-text').outerHeight() + ' ' + jQuery(this).find('.price-grid-cont').outerHeight() + ' ' +  jQuery(this).find('.grid-offer-params').outerHeight());
            var gh = 0; 
            gh += jQuery(this).find('.grid-offer-photo').outerHeight();
            gh += jQuery(this).find('.grid-offer-text').outerHeight();
            gh += jQuery(this).find('.price-grid-cont').outerHeight();
            gh += jQuery(this).find('.grid-offer-params').outerHeight();
            jQuery(this).find('.grid-offer').stop(true, true).animate( { height: gh }, 0);
            jQuery(this).find('.grid-offer-back').stop(true, true).animate( { height: gh }, 0);
        });
    }

    setTimeout(function(){ 
        if( w_width < 768 ) {
            console.log('middle');
            jQuery('.grid-offer-col').each( function () {
                var gh = 0; 
                gh += jQuery(this).find('.grid-offer-photo').outerHeight();
                gh += jQuery(this).find('.grid-offer-text').outerHeight();
                gh += jQuery(this).find('.price-grid-cont').outerHeight();
                gh += jQuery(this).find('.grid-offer-params').outerHeight();
                jQuery(this).find('.grid-offer').stop(true, true).animate( { height: gh }, 0);
                jQuery(this).find('.grid-offer-back').stop(true, true).animate( { height: gh }, 0);
                console.log( jQuery(this).find('.grid-offer-photo').outerHeight() + ' ' + jQuery(this).find('.grid-offer-text').outerHeight() + ' ' + jQuery(this).find('.price-grid-cont').outerHeight() + ' ' +  jQuery(this).find('.grid-offer-params').outerHeight());
                
            });
            console.log('end');
        }
        jQuery('.featured-offer-col').each( function () {
            var gh = 0; 
            gh += jQuery(this).find('.featured-offer-photo').outerHeight();
            gh += jQuery(this).find('.featured-offer-text').outerHeight();
            gh += jQuery(this).find('.featured-price').outerHeight();
            gh += jQuery(this).find('.featured-offer-params').outerHeight();
            jQuery(this).stop(true, true).animate( { height: gh + 45 }, 0);
            jQuery(this).find('.featured-offer-back').stop(true, true).animate( { height: gh - 40}, 0);
        });
        jQuery('.list-offer-left').each( function () {
            var gh = 0; 
            gh += jQuery(this).find('.list-offer-photo').outerHeight();
            gh += jQuery(this).find('.list-offer-params').outerHeight();
            jQuery(this).stop(true, true).animate( { height: gh - 30 }, 0);
            jQuery(this).find('.list-offer-back').stop(true, true).animate( { height: gh }, 0);
        });	
    }, 500);	
    
    
});


function getIDXLocations(id, pinicon) {
    if(jQuery('.dsidx-listing-container').length) {
        var idx_locations = [];
        jQuery('.dsidx-listing-container').each( function() {

            var address = jQuery(this).find('.dsidx-address a').html().replace('<span>','').replace('</span>','');
            var link = jQuery(this).find('.dsidx-address a').attr('href');
            var photo = jQuery(this).find('.dsidx-photo img').attr('src');
            var price = jQuery(this).find('.dsidx-price').html();
            idx_locations.push([address,link,photo,address,price ]);
        });
        
        var coords = [];
        var mapOptions = {
            zoom: 15,
            disableDefaultUI: false,
            mapTypeControl: true,
            mapTypeControlOptions: {
                    position: google.maps.ControlPosition.LEFT_TOP
            },
            zoomControl: true,
            zoomControlOptions: {
                    position: google.maps.ControlPosition.RIGHT_CENTER
            },
            scaleControl: true,
            streetViewControl: true,
            streetViewControlOptions: {
                    position: google.maps.ControlPosition.RIGHT_CENTER
            },
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: mapStyle
        };
	var mapElement = document.getElementById(id);
        var geocoder = new google.maps.Geocoder();
	var map = new google.maps.Map(mapElement, mapOptions);
        geocoder.geocode( { 'address': idx_locations[0][0] }, function(results, status) {
            if(status == google.maps.GeocoderStatus.OK) {
                map.setCenter(results[0].geometry.location);
            }     
        });
                        
                        
	var LatLngList = [];
	var i = 0;
	var mapMarkers = [];
        var bounds = new google.maps.LatLngBounds();
        var time = 0;
        for(var i = 0; i < idx_locations.length; i++) {
            time += 700;
            window.setTimeout(idx_geocode, time, idx_locations, i, coords, id, pinicon, bounds, mapMarkers, map);
         }
    }
       
}

function idx_geocode(idx_locations, i, coords, id, pinicon, bounds, mapMarkers, map) {
    var currAddress = idx_locations[i][0];
    var geocoder = new google.maps.Geocoder();
    if (geocoder) {
        geocoder.geocode({'address':currAddress}, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                //coords.push(results[0].geometry.location);
                coords.push([ results[0].geometry.location.lat(), results[0].geometry.location.lng(), pinicon, idx_locations[i][1],idx_locations[i][2],idx_locations[i][3],idx_locations[i][4] ]);
                var pos = new google.maps.LatLng(results[0].geometry.location.lat(), results[0].geometry.location.lng());
                    var marker = new google.maps.Marker({
                            position: pos,
                            map: map,
                            title: '',
                            icon: pinicon
                    });

                    mapMarkers[i] = marker;

                    var infoBoxContent = document.createElement("div");
                    infoBoxContent.className = "infobox-wrapper";
                    infoBoxContent.innerHTML = "<a class='infobox-main' href='" + idx_locations[i][1] + "'><div class='infobox-image'><img src='" + idx_locations[i][2] + "' alt='" + idx_locations[i][3] + "' /></div><div class='infobox-text'>" + idx_locations[i][3] + "</div><div class='infobox-price'>" + idx_locations[i][4] + "</div></a>";
                    mapMarkers[i].infobox = new InfoBox({
                            content: infoBoxContent,
                            disableAutoPan: false,
                            pixelOffset: new google.maps.Size(30, -150),
                            zIndex: null,
                             boxStyle: {	
                                            },
                                        closeBoxMargin: "0px",
                                        closeBoxURL: templateDir + "/images/infobox-close.png",
                                        infoBoxClearance: new google.maps.Size(1, 1)
                                });
                                google.maps.event.addListener(marker, 'click', (function(marker, i) {
                                    return function() {
                                                                var j = 0;
                                        for (j = 0; j < mapMarkers.length; j++) {
                                            mapMarkers[j].infobox.close();
                                        }
                                        mapMarkers[i].infobox.open(map, this);
                                    }
                                })(marker, i));

                                bounds.extend(pos);
                                map.fitBounds(bounds);



            } else {
                coords.push(['','','','','','','' ]);
                mapMarkers[i] = null;
            }
            if(coords.length == idx_locations.length) {
                   
                var markerClusterStyle = [{
                    url: emptyPin,
                    height: 80,
                    width: 48,
                    textSize: 16,
                    textColor: '#3798dd'
                }];
                var markerCluster = new MarkerClusterer(map, mapMarkers, {styles:markerClusterStyle});
                minClusterZoom = 14;
                markerCluster.setMaxZoom(minClusterZoom);

                var oms = new OverlappingMarkerSpiderfier(map, {markersWontMove: true, markersWontHide: true, keepSpiderfied: true, legWeight: 2 });

                for (var k = 0; k < mapMarkers.length; k++) {
                    oms.addMarker(mapMarkers[k]);  // <-- here
                }
                jQuery(".map-loading").css('display', 'none');
                               
            }     
       });
    }
    return mapMarkers;
}



/********** GOOGLE MAPS **********/		



function mapInit(lat,lng,id, pinicon, ui, offset, disablezoom) {
    //alert('mapinit ' + lat + " " + lng + " " + id + " " + pinicon + " " + ui + " " + offset);
    //alert( id + ' ' + disablezoom );
    if( ui == "1" ) {
        ui = false;
    } else {
        ui = true;
    }
    if( w_width > 991 ) {
        if( typeof offset !== 'undefined' && offset == '1') {
            offset = 0.0075
        } else {
            offset = 0;
        }
    } else {
        offset = 0;
    }
    
    zoom = true;
    drag = true;
    //alert(disablezoom);
    if( typeof disablezoom !== 'undefined' && disablezoom == "1" ){
        zoom = false;
        drag = false;
    } else if( typeof disablezoom !== 'undefined' && disablezoom == "2" ){
        zoom = false;
        drag = true;
    }
    var mapOptions = {
        zoom: 15,
        disableDefaultUI: ui,
        scrollwheel: zoom,
        draggable: drag,
        mapTypeControlOptions: {
        position: google.maps.ControlPosition.LEFT_TOP
    },
    zoomControlOptions: {
        position: google.maps.ControlPosition.RIGHT_TOP
    },
    streetViewControlOptions: {
        position: google.maps.ControlPosition.RIGHT_TOP
    },
    center: new google.maps.LatLng(lat - offset, lng),
        styles: mapStyle
    };

    var mapElement = document.getElementById(id);
    var map = new google.maps.Map(mapElement, mapOptions);

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(lat, lng),
        map: map,
        title: '',
        icon: pinicon
    });
    if( id == "estate-map" ) {
        estateMap = map;
    }
}



/********** GOOGLE STREET VIEW ON OFFER DETAILS **********/					
			
			
			
function streetViewInit(mlat,mlng,id,rotate) {
    var fenway = {lat: mlat, lng: mlng};
    panorama = new google.maps.StreetViewPanorama(
    document.getElementById(id), {
            position: fenway,
            scrollwheel: false,
            pov: {
              heading: 34,
              pitch: 10
            }
    });

    if(typeof rotate !== 'undefined' && rotate) {
        var move = true;
        jQuery("#" + id).on("click", function () {
            move = false;
        });
        jQuery("#" + id).on("mouseleave", function () {
            move = true;
        });
        window.setInterval(function() {
            if ( move ) {
                var pov = panorama.getPov();
                pov.heading -= 0.05;
                panorama.setPov(pov);
            }
        }, 10);
    }
}

function streetViewInitId(panoId,id,rotate) {
    google.maps.streetViewViewer = 'photosphere';
    panorama = new google.maps.StreetViewPanorama(
    document.getElementById(id), {
        pano: "F:" + panoId.replace('%2F','/'),
        scrollwheel: false,
        pov: {
          heading: 34,
          pitch: 10
        }
    });

    if(typeof rotate !== 'undefined' && rotate) {
        var move = true;
        $("#" + id).on("click", function () {
            move = false;
        });
        $("#" + id).on("mouseleave", function () {
            move = true;
        });
        window.setInterval(function() {
            if ( move ) {
                var pov = panorama.getPov();
                pov.heading -= 0.05;
                panorama.setPov(pov);
            }
        }, 10);
    }
}



/********** BIG OFFERS MAP WITH INFOBOXES **********/		


			
function offersMapInit(id, locations, color) {
    var mapOptions = {
        zoom: 15,
        disableDefaultUI: false,
        mapTypeControl: true,
        mapTypeControlOptions: {
                position: google.maps.ControlPosition.LEFT_TOP
        },
        zoomControl: true,
        zoomControlOptions: {
                position: google.maps.ControlPosition.RIGHT_CENTER
        },
        scaleControl: true,
        streetViewControl: true,
        streetViewControlOptions: {
                position: google.maps.ControlPosition.RIGHT_CENTER
        },
        scrollwheel: false,
        center: new google.maps.LatLng(locations[0][0], locations[0][1]),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: mapStyle
    };
    var mapElement = document.getElementById(id);

    var map = new google.maps.Map(mapElement, mapOptions);

    var LatLngList = [];
    var i = 0;
    var mapMarkers = [];
    for (i = 0; i < locations.length; i++) {
        var pos = new google.maps.LatLng(locations[i][0], locations[i][1]);
        var marker = new google.maps.Marker({
            position: pos,
            map: map,
            title: '',
            icon: locations[i][2]
        });

        mapMarkers[i] = marker;

        var infoBoxContent = document.createElement("div");
        infoBoxContent.className = "infobox-wrapper";
        infoBoxContent.innerHTML = "<a class='infobox-main' href='" + locations[i][3] + "'><div class='infobox-image'><img src='" + locations[i][4] + "' alt='" + locations[i][5] + "' /></div><div class='infobox-text'>" + locations[i][5] + "</div><div class='infobox-price'>" + locations[i][6] + "</div></a>";
        mapMarkers[i].infobox = new InfoBox({
            content: infoBoxContent,
            disableAutoPan: false,
            pixelOffset: new google.maps.Size(30, -150),
            zIndex: null,
             boxStyle: {},
            closeBoxMargin: "0px",
            closeBoxURL: templateDir + "/images/infobox-close.png",
            infoBoxClearance: new google.maps.Size(1, 1)
        });
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                var j = 0;
                for (j = 0; j < mapMarkers.length; j++) {
                    mapMarkers[j].infobox.close();
                }
                mapMarkers[i].infobox.open(map, this);
            }
        })(marker, i));
        LatLngList[i] = pos;
    }

    var bounds = new google.maps.LatLngBounds();
    for (var i = 0, LtLgLen = LatLngList.length; i < LtLgLen; i++) {
        bounds.extend(LatLngList[i]);
    }
    map.fitBounds(bounds);

    var markerClusterStyle = [{
        url: emptyPin,
        height: 80,
        width: 48,
        textSize: 16,
        textColor: color
    }];
    var markerCluster = new MarkerClusterer(map, mapMarkers, {styles:markerClusterStyle});
    minClusterZoom = 14;
    markerCluster.setMaxZoom(minClusterZoom);

    var oms = new OverlappingMarkerSpiderfier(map, {markersWontMove: true, markersWontHide: true, keepSpiderfied: true, legWeight: 2 });

    for (var i = 0; i < mapMarkers.length; i ++) {
        oms.addMarker(mapMarkers[i]);  // <-- here
    }
}

function offersMapInitAddress(id, idx_locations, pinicon, color) {
    
    var geocoder = new google.maps.Geocoder();
    var i = 0;
    var mapMarkers = [];
    var locations = [];
    for (i = 0; i < idx_locations.length; i++) {    
    var j = i;
        geocoder.geocode( { 'address': idx_locations[j][0]}, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
               locations.push([ results[0].geometry.location.Pa, results[0].geometry.location.Qa, idx_locations[i][1],idx_locations[i][2],idx_locations[i][3],idx_locations[i][4] ]);
            };
        });
    }

    var mapOptions = {
            zoom: 15,
            disableDefaultUI: false,
            mapTypeControl: true,
            mapTypeControlOptions: {
                    position: google.maps.ControlPosition.LEFT_TOP
            },
            zoomControl: true,
            zoomControlOptions: {
                    position: google.maps.ControlPosition.RIGHT_CENTER
            },
            scaleControl: true,
            streetViewControl: true,
            streetViewControlOptions: {
                    position: google.maps.ControlPosition.RIGHT_CENTER
            },
            scrollwheel: false,
            center: new google.maps.LatLng(locations[0][0], locations[0][1]),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: mapStyle
    };
    var mapElement = document.getElementById(id);

    var map = new google.maps.Map(mapElement, mapOptions);
    var LatLngList = [];
    var i = 0;
    var mapMarkers = [];
    for (i = 0; i < locations.length; i++) {
        var pos = new google.maps.LatLng(locations[i][0], locations[i][1]);
        var marker = new google.maps.Marker({
            position: pos,
            map: map,
            title: '',
            icon: pinincon
        });

        mapMarkers[i] = marker;

        var infoBoxContent = document.createElement("div");
        infoBoxContent.className = "infobox-wrapper";
        infoBoxContent.innerHTML = "<a class='infobox-main' href='" + locations[i][3] + "'><div class='infobox-image'><img src='" + locations[i][4] + "' alt='" + locations[i][5] + "' /></div><div class='infobox-text'>" + locations[i][5] + "</div><div class='infobox-price'>" + locations[i][6] + "</div></a>";
        mapMarkers[i].infobox = new InfoBox({
            content: infoBoxContent,
            disableAutoPan: false,
            pixelOffset: new google.maps.Size(30, -150),
            zIndex: null,
             boxStyle: {	
                            },
            closeBoxMargin: "0px",
            closeBoxURL: templateDir + "/images/infobox-close.png",
            infoBoxClearance: new google.maps.Size(1, 1)
        });
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                var j = 0;
                for (j = 0; j < mapMarkers.length; j++) {
                    mapMarkers[j].infobox.close();
                }
                mapMarkers[i].infobox.open(map, this);
            }
        })(marker, i));
        LatLngList[i] = pos;
    }

    var bounds = new google.maps.LatLngBounds();
    for (var i = 0, LtLgLen = LatLngList.length; i < LtLgLen; i++) {
        bounds.extend(LatLngList[i]);
    }
    map.fitBounds(bounds);

    var markerClusterStyle = [{
        url: emptyPin,
        height: 80,
        width: 48,
        textSize: 16,
        textColor: color
    }];
    var markerCluster = new MarkerClusterer(map, mapMarkers, {styles:markerClusterStyle});
    minClusterZoom = 14;
    markerCluster.setMaxZoom(minClusterZoom);

    var oms = new OverlappingMarkerSpiderfier(map, {markersWontMove: true, markersWontHide: true, keepSpiderfied: true, legWeight: 2 });

    for (var i = 0; i < mapMarkers.length; i ++) {
        oms.addMarker(mapMarkers[i]);  // <-- here
    }
}

function formatNumber(n,t,f) {
  var s = ''+(Math.floor(n)), d = n % 1, i = s.length, r = '';
  while ( (i -= 3) > 0 ) { r = t + s.substr(i, 3) + r; }
  return s.substr(0, i + 3) + r + (d ? f + Math.round(d * Math.pow(10,2)) : '');
}