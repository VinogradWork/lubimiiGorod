

$(document).ready(function(){
	$("#formTel").mask("+7 (999) 999-9999");
	$("#footerNumber").mask("+7 (999) 999-9999");
  });




// const openDocLinks = document.querySelectorAll('.image-document');
// if (openDocLinks.length > 0) {
// 	for (let index = 0; index < openDocLinks.length; index++) {
// 		const openDoclink = openDocLinks[index];

// 		openDoclink.addEventListener("click", function (event) {
// 			let i_path = openDoclink.src;
// 			console.log(openDoclink + '  ---  ' + i_path);
// 		});
// 	};
// };

const openLinks = document.querySelectorAll('.image-document-after');
const docLinks = document.querySelectorAll('.image-document');
if (openLinks.length > 0) {
	for (let index = 0; index < openLinks.length; index++) {
		const link = openLinks[index];
		const docLink = docLinks[index];
		// if (documentLinks.length > 0) {
		// 	for (let index = 0; index < documentLinks.length; index++) {
		// 		const documentLink = documentLinks[index];
		link.addEventListener("click", function (event) {
			let i_path = docLink.src;
			$('body').append('<div id="overlay"></div><div id="magnify"><img src="' + i_path + '"><div id="close-popup"><span></span></div></div>');
			$('#magnify').css({
				left: ($(document).width() - $('#magnify').outerWidth()) / 2,
				// top: ($(document).height() - $('#magnify').outerHeight())/2
				top: ($(window).height() - $('#magnify').outerHeight()) / 2
			});
			$('#overlay, #magnify').fadeIn('fast');
		});
	};
	// 	}
	// }
	$('body').on('click', '#close-popup, #overlay', function (event) {
		event.preventDefault();
		$('#overlay, #magnify').fadeOut('fast', function () {
			$('#close-popup, #magnify, #overlay').remove();
		});
	});
};


// $(function(){
// 	$('.image-document-after').click(function(event) {
// 		let i_path = $('.image-document').attr('src');
// 		$('body').append('<div id="overlay"></div><div id="magnify"><img src="'+i_path+'"><div id="close-popup"><span></span></div></div>');
// 		$('#magnify').css({
// 			left: ($(document).width() - $('#magnify').outerWidth())/2,
// 			// top: ($(document).height() - $('#magnify').outerHeight())/2
// 			top: ($(window).height() - $('#magnify').outerHeight())/2
// 		});
// 		$('#overlay, #magnify').fadeIn('fast');
// 	});

// 	$('body').on('click', '#close-popup, #overlay', function(event) {
// 		event.preventDefault();
// 		$('#overlay, #magnify').fadeOut('fast', function() {
// 			$('#close-popup, #magnify, #overlay').remove();
// 		});
// 	});
// });


  $(function() {
	$(".image-document-after").css("opacity","0");  
	$(".image-document-after").hover(function () {
	$(this).stop().animate({
	opacity: .6
	}, "slow");
	},
	   
	function () {
	$(this).stop().animate({
	opacity: 0
	}, "slow");
	});
	});

	// let header  = document.querySelector('header')
	// let headerHeight = header.offsetHeight;
	
	
	
	// $(document).ready(function() {
	// 	$('d-banner').css = `paddingTop: ${headerHeight}px`;
	// }
	
	$(document).ready(function() {
		$('.menu__icon').click(function(event) {
		  $('.menu__body,.icon-menu,.header-logo,.header-callback__icon-tel').toggleClass('active');
		  $('body').toggleClass('lock');
		});
	   }); 




