/********** STYLE SWITCHER **********/		




jQuery(document).ready(function($) {
    !function(t){t.widget("sylightsUI.switchButton",{options:{checked:void 0,show_labels:!0,labels_placement:"both",on_label:"ON",off_label:"OFF",width:25,height:11,button_width:12,clear:!0,clear_after:null,on_callback:void 0,off_callback:void 0},_create:function(){void 0===this.options.checked&&(this.options.checked=this.element.prop("checked")),this._initLayout(),this._initEvents()},_initLayout:function(){this.element.hide(),this.off_label=t("<span>").addClass("switch-button-label"),this.on_label=t("<span>").addClass("switch-button-label"),this.button_bg=t("<div>").addClass("switch-button-background"),this.button=t("<div>").addClass("switch-button-button"),this.off_label.insertAfter(this.element),this.button_bg.insertAfter(this.off_label),this.on_label.insertAfter(this.button_bg),this.button_bg.append(this.button),this.options.clear&&(null===this.options.clear_after&&(this.options.clear_after=this.on_label),t("<div>").css({clear:"left"}).insertAfter(this.options.clear_after)),this._refresh(),this.options.checked=!this.options.checked,this._toggleSwitch()},_refresh:function(){switch(this.options.show_labels?(this.off_label.show(),this.on_label.show()):(this.off_label.hide(),this.on_label.hide()),this.options.labels_placement){case"both":(this.button_bg.prev()!==this.off_label||this.button_bg.next()!==this.on_label)&&(this.off_label.detach(),this.on_label.detach(),this.off_label.insertBefore(this.button_bg),this.on_label.insertAfter(this.button_bg),this.on_label.addClass(this.options.checked?"on":"off").removeClass(this.options.checked?"off":"on"),this.off_label.addClass(this.options.checked?"off":"on").removeClass(this.options.checked?"on":"off"));break;case"left":(this.button_bg.prev()!==this.on_label||this.on_label.prev()!==this.off_label)&&(this.off_label.detach(),this.on_label.detach(),this.off_label.insertBefore(this.button_bg),this.on_label.insertBefore(this.button_bg),this.on_label.addClass("on").removeClass("off"),this.off_label.addClass("off").removeClass("on"));break;case"right":(this.button_bg.next()!==this.off_label||this.off_label.next()!==this.on_label)&&(this.off_label.detach(),this.on_label.detach(),this.off_label.insertAfter(this.button_bg),this.on_label.insertAfter(this.off_label),this.on_label.addClass("on").removeClass("off"),this.off_label.addClass("off").removeClass("on"))}this.on_label.html(this.options.on_label),this.off_label.html(this.options.off_label),this.button_bg.width(this.options.width),this.button_bg.height(this.options.height),this.button.width(this.options.button_width),this.button.height(this.options.height)},_initEvents:function(){var t=this;this.button_bg.click(function(e){return e.preventDefault(),e.stopPropagation(),t._toggleSwitch(),!1}),this.button.click(function(e){return e.preventDefault(),e.stopPropagation(),t._toggleSwitch(),!1}),this.on_label.click(function(){return t.options.checked&&"both"===t.options.labels_placement?!1:(t._toggleSwitch(),!1)}),this.off_label.click(function(){return t.options.checked||"both"!==t.options.labels_placement?(t._toggleSwitch(),!1):!1})},_setOption:function(t,e){return"checked"===t?void this._setChecked(e):(this.options[t]=e,void this._refresh())},_setChecked:function(t){t!==this.options.checked&&(this.options.checked=!t,this._toggleSwitch())},_toggleSwitch:function(){this.options.checked=!this.options.checked;var t="";if(this.options.checked){this.element.prop("checked",!0),this.element.change();var e=this.options.width-this.options.button_width;t="+="+e,"both"==this.options.labels_placement?(this.off_label.removeClass("on").addClass("off"),this.on_label.removeClass("off").addClass("on")):(this.off_label.hide(),this.on_label.show()),this.button_bg.addClass("checked"),"function"==typeof this.options.on_callback&&this.options.on_callback.call(this)}else this.element.prop("checked",!1),this.element.change(),t="-1px","both"==this.options.labels_placement?(this.off_label.removeClass("off").addClass("on"),this.on_label.removeClass("on").addClass("off")):(this.off_label.show(),this.on_label.hide()),this.button_bg.removeClass("checked"),"function"==typeof this.options.off_callback&&this.options.off_callback.call(this);this.button.animate({left:t},250,"easeInOutCubic")}})}(jQuery);


	
	$('body').append('<div id="switcher-button" style="background: #3797DD; text-align: center; padding-top: 12px; width: 50px; height: 50px; color: #ffffff; cursor: pointer; z-index: 1000; position: fixed; top: 150px; left: 0px;"><i class="fa fa-cog fa-spin fa-2x"></i></div><div id="switcher" style="width: 285px; position: fixed; overflow-x: hidden; left: -285px; top: 130px; z-index: 1000; margin-top: 20px; margin-bottom: 20px;"><div style="float: left; background: #3797DD; width: 285px; height: 50px; line-height: 50px; text-align: center; color: #ffffff;"><h4 style="color:#ffffff; line-height: 50px;">Settings</h4></div><div id="switch-content" style="width: 285px; background: white; padding: 30px; float: left;"><h5 style="margin: 0 0 10px 0;">Change text direction</h5><div style="text-align: center;"><a href="?direction=rtl" class="btn btn-info"><i class="fa fa-outdent" aria-hidden="true"></i> RTL</a> <a href="?direction=ltr" class="btn btn-info"><i class="fa fa-indent" aria-hidden="true"></i> LTR</a></div><h5 style="margin: 20px 0 10px 0;">Layout Style</h5><input type="checkbox" name="boxed" id="boxed"/><hr/><h5 style="margin: 20px 0 10px 0">Color Skins</h5><div id="blue" style="width: 45px; height: 45px; background: #3797dd; float: left; margin-right: 15px; margin-bottom: 15px; cursor: pointer;"></div><div id="red" style="width: 45px; height: 45px; background: #E36159; float: left; margin-right: 15px; margin-bottom: 15px; cursor: pointer;"></div><div id="green" style="width: 45px; height: 45px; background: #91BA2D; float: left; margin-right: 15px; margin-bottom: 15px; cursor: pointer;"></div><div id="orange" style="width: 45px; height: 45px; background: #EC8D38; float: left; margin-bottom: 15px; cursor: pointer;"></div><div id="navy" style="width: 45px; height: 45px; background: #18457C; float: left; margin-right: 15px; margin-bottom: 15px; cursor: pointer;"></div><div id="turquoise" style="width: 45px; height: 45px; background: #26AAAF; float: left; margin-right: 15px; margin-bottom: 15px; cursor: pointer;"></div><div id="black" style="width: 45px; height: 45px; background: #262626; float: left; margin-right: 15px; margin-bottom: 15px; cursor: pointer;"></div><div id="purple" style="width: 45px; height: 45px; background: #AE5DB1; float: left; margin-bottom: 15px; cursor: pointer;"></div><div class="clearfix"></div><hr/><h5 style="margin: 20px 0 10px 0">Background Patterns (for boxed Layout)</h5><div id="bg-thumb1" style="float: left; margin-right: 15px; margin-bottom: 15px; cursor: pointer;"><img src="' + demourl.url + '/images/bg-thumb1.jpg" alt=""/></div><div id="bg-thumb2" style="float: left; margin-right: 15px; margin-bottom: 15px; cursor: pointer;"><img src="' + demourl.url + '/images/bg-thumb2.jpg" alt=""/></div><div id="bg-thumb3" style="float: left; margin-right: 15px; margin-bottom: 15px; cursor: pointer;"><img src="' + demourl.url + '/images/bg-thumb3.jpg" alt=""/></div><div id="bg-thumb4" style="float: left; margin-bottom: 15px; cursor: pointer;"><img src="' + demourl.url + '/images/bg-thumb4.jpg" alt=""/></div><div id="bg-thumb5" style="float: left; margin-right: 15px; margin-bottom: 15px; cursor: pointer;"><img src="' + demourl.url + '/images/bg-thumb5.jpg" alt=""/></div><div id="bg-thumb6" style="float: left; margin-right: 15px; margin-bottom: 15px; cursor: pointer;"><img src="' + demourl.url + '/images/bg-thumb6.jpg" alt=""/></div><div id="bg-thumb7" style="float: left; margin-right: 15px; margin-bottom: 15px; cursor: pointer;"><img src="' + demourl.url + '/images/bg-thumb7.jpg" alt=""/></div><div id="bg-thumb8" style="float: left; margin-bottom: 15px; cursor: pointer;"><img src="' + demourl.url + '/images/bg-thumb8.jpg" alt=""/></div><div id="bg-thumb9" style="float: left; margin-right: 15px; margin-bottom: 15px; cursor: pointer;"><img src="' + demourl.url + '/images/bg-thumb9.jpg" alt=""/></div><div id="bg-thumb10" style="float: left; margin-right: 15px; margin-bottom: 15px; cursor: pointer;"><img src="' + demourl.url + '/images/bg-thumb10.jpg" alt=""/></div><div id="bg-thumb11" style="float: left; margin-right: 15px; margin-bottom: 15px; cursor: pointer;"><img src="' + demourl.url + '/images/bg-thumb11.jpg" alt=""/></div><div id="bg-thumb12" style="float: left; margin-bottom: 15px; cursor: pointer;"><img src="' + demourl.url + '/images/bg-thumb12.jpg" alt=""/></div><div class="clearfix"></div><hr/><a href="https://themeforest.net/item/apartment-wp-real-estate-responsive-wordpress-theme-for-agents-portals-single-property-sites/16265143?ref=johnnychaos" class="button-primary button-shadow button-full"><span>Buy this theme!</span><div class="button-triangle"></div><div class="button-triangle2"></div><div class="button-icon"><i class="fa fa-cart-arrow-down"></i></div></a></div></div>');
	$('head').append('<style>.switch-button-label{float:left;font-size:10pt;cursor:pointer}.switch-button-label.off{color:#adadad}.switch-button-label.on{color:#08C}.switch-button-background{float:left;position:relative;background:#ccc;border:1px solid #aaa;margin:1px 10px;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;cursor:pointer}.switch-button-button{position:absolute;left:-1px;top:-1px;background:#FAFAFA;border:1px solid #aaa;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px}</style>');
	$("input#boxed").switchButton({on_label: " BOXED",off_label: "WIDE ",width: 125, height: 25, button_width: 30, checked: false });
	if( w_height - 150 < $("#switcher").innerHeight() ) {
		$("#switcher").css('height', w_height - 150 + "px");
		$("#switcher").css('overlow-y', "scroll");
	}
	$("#switcher-button").click( function () {
		if( $("#switcher").hasClass("open") ) {
			$("#switcher").removeClass("open");		
			$("#switcher").animate( { "left": "-285px" }, 500);
			$("#switcher-button").animate( { "left": "0px" }, 500);
			$("#switch-content").css("box-shadow", "none");
			
		} else {
			$("#switcher").addClass("open");	
			$("#switcher").animate( { "left": "0px" }, 500);
			$("#switcher-button").animate( { "left": "285px" }, 500);
			$("#switch-content").css("box-shadow", "0px 0px 20px 0px rgba(0, 0, 0, 0.35)");
		}
	});
	
	$("#boxed").change( function () {
		if ($(this).prop("checked")) {
			$('#wrapper').addClass("boxed");
			$('#wrapper2').addClass("boxed");
			$('header').addClass("boxed");
			boxed = true;
			if( typeof swiper1 !== 'undefined' ) { swiper1.update(); swiper1.slideTo(1); }
			if( typeof swiper2 !== 'undefined' ) { swiper2.update(); swiper2.slideTo(1); }
			if( typeof gallerySwiper !== 'undefined' ) { gallerySwiper.update(); gallerySwiper.slideTo(1); }
        } else {
			$('#wrapper').removeClass("boxed");
			$('#wrapper2').removeClass("boxed");
			$('header').removeClass("boxed");
			if( typeof swiper1 !== 'undefined' ) { swiper1.update(); swiper1.slideTo(1); }
			if( typeof swiper2 !== 'undefined' ) { swiper2.update(); swiper2.slideTo(1); }
			if( typeof gallerySwiper !== 'undefined' ) { gallerySwiper.update(); gallerySwiper.slideTo(1); }
		}
	});
	
	$("#bg-thumb1").click( function () {
		$("body").css('background','white url(' + demourl.url + '/images/bg-pattern1.jpg) repeat');
	});
	$("#bg-thumb2").click( function () {
		$("body").css('background','white url(' + demourl.url + '/images/bg-pattern2.jpg) repeat');
	});
	$("#bg-thumb3").click( function () {
		$("body").css('background','white url(' + demourl.url + '/images/bg-pattern3.jpg) repeat');
	});
	$("#bg-thumb4").click( function () {
		$("body").css('background','white url(' + demourl.url + '/images/bg-pattern4.jpg) repeat');
	});
	$("#bg-thumb5").click( function () {
		$("body").css('background','white url(' + demourl.url + '/images/bg-pattern5.jpg) repeat');
	});
	$("#bg-thumb6").click( function () {
		$("body").css('background','white url(' + demourl.url + '/images/bg-pattern6.jpg) repeat');
	});
	$("#bg-thumb7").click( function () {
		$("body").css('background','white url(' + demourl.url + '/images/bg-pattern7.jpg) repeat');
	});
	$("#bg-thumb8").click( function () {
		$("body").css('background','white url(' + demourl.url + '/images/bg-pattern8.jpg) repeat');
	});
	$("#bg-thumb9").click( function () {
		$("body").css('background','white url(' + demourl.url + '/images/bg-pattern9.jpg) repeat');
	});
	$("#bg-thumb10").click( function () {
		$("body").css('background','white url(' + demourl.url + '/images/bg-pattern10.jpg) repeat');
	});
	$("#bg-thumb11").click( function () {
		$("body").css('background','white url(' + demourl.url + '/images/bg-pattern11.jpg) no-repeat fixed center top');
		$("body").css('-webkit-background-size','cover');
		$("body").css('-moz-background-size','cover');
		$("body").css('-o-background-size','cover');
		$("body").css('background-size','cover');
	});
	$("#bg-thumb12").click( function () {
		$("body").css('background','white url(' + demourl.url + '/images/bg-pattern12.jpg) no-repeat fixed center top');
		$("body").css('-webkit-background-size','cover');
		$("body").css('-moz-background-size','cover');
		$("body").css('-o-background-size','cover');
		$("body").css('background-size','cover');
	});
	
	
	$("#blue").click( function () {
		 $('#default-skin-css').replaceWith('<link id="default-skin-css" rel="stylesheet" type="text/css" href="' + demourl.parent + '/css/apartment-colors-blue.css">');
	});
	
	$("#red").click( function () {
		 $('#default-skin-css').replaceWith('<link id="default-skin-css" rel="stylesheet" type="text/css" href="' + demourl.parent + '/css/apartment-colors-red.css">');
	});
	
	$("#green").click( function () {
		 $('#default-skin-css').replaceWith('<link id="default-skin-css" rel="stylesheet" type="text/css" href="' + demourl.parent + '/css/apartment-colors-green.css">');
	});
	
	$("#orange").click( function () {
		 $('#default-skin-css').replaceWith('<link id="default-skin-css" rel="stylesheet" type="text/css" href="' + demourl.parent + '/css/apartment-colors-orange.css">');
	});	
	
	$("#navy").click( function () {
		 $('#default-skin-css').replaceWith('<link id="default-skin-css" rel="stylesheet" type="text/css" href="' + demourl.parent + '/css/apartment-colors-navy.css">');
	});
	
	$("#turquoise").click( function () {
		 $('#default-skin-css').replaceWith('<link id="default-skin-css" rel="stylesheet" type="text/css" href="' + demourl.parent + '/css/apartment-colors-turquoise.css">');
	});
	
	$("#black").click( function () {
		 $('#default-skin-css').replaceWith('<link id="default-skin-css" rel="stylesheet" type="text/css" href="' + demourl.parent + '/css/apartment-colors-black.css">');
	});
	
	$("#purple").click( function () {
		 $('#default-skin-css').replaceWith('<link id="default-skin-css" rel="stylesheet" type="text/css" href="' + demourl.parent + '/css/apartment-colors-purple.css">');
	});
	
	
	$(".profile-list-delete").each( function() {
		$(this).addClass("demo-info");
	});
	
	$(".activation-edit").each( function() {
		$(this).addClass("demo-info").addClass("activation-edit-demo").removeClass("activation-edit");
	});
	
	$("#change-package-submit").each( function() {
		$(this).addClass("demo-info");
		$(this).removeAttr('id');
	});
	
	$("#profile-submit").addClass("demo-info").removeAttr('id');
	
	$("#register-submit").addClass("demo-info").removeAttr('id');
	
	$("#video-delete").each( function() {
		$(this).addClass("demo-info");
		$(this).removeAttr('id');
	});
	
	$("#video-delete").each( function() {
		$(this).addClass("demo-info");
		$(this).removeAttr('id');
	});
	
	

	$("#offer-submit").each( function() {
		$(this).addClass("demo-info");
		$(this).removeAttr('id');
	});
	
});
	
	

jQuery(window).load(function() {
		jQuery('html').ApartmentDemo();
	});

(function( $ ){
	$.fn.ApartmentDemo = function() {
		
	$(".file-footer-buttons button").prop('disabled', true);
	
	$(".demo-info").click( function(e) {
		e.preventDefault();
		$('#demo-modal').modal('show');
		return false;
	});
	}
})(jQuery);

/**
 * jquery.switchButton.js v1.0
 * jQuery iPhone-like switch button
 * @author Olivier Lance <olivier.lance@sylights.com>
 *
 * Copyright (c) Olivier Lance - released under MIT License {{{
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 * }}}
 */


