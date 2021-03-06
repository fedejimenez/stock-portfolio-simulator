// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require jquery
//= require bootstrap-sprockets
//= require jquery.easy-autocomplete
//= require dataTables/jquery.dataTables
//= require dataTables/bootstrap/3/jquery.dataTables.bootstrap
//= require lookup.js
//= require sweetalert2
//= require sweet-alert2-rails
//= require Chart.bundle
//= require chartkick
//= require jquery.minicolors
//= require jquery.minicolors.simple_form
//= require_tree .
//= stub 'validation'
//= stub 'tabs'
//= stub 'fadeinup-animation'
//= stub 'tabs-slides'
//= stub 'count'

// Add style to search bar (easyAutocomplete)
$(document).on('turbolinks:load', function() {
	if (document.querySelector('#q')) {
		document.querySelector('#q').classList.add("lookup-input")
		document.querySelector('#q').parentNode.classList.add("lookup-input")
	}
})

// Add style to variation if positive/negative number
$(document).on('turbolinks:load', function() {
	textColor();
})
$(document).ready(function() {
	textColor();
})

function textColor(){
	var vals = document.querySelectorAll('.color-text')
	for(var i = 0; i < vals.length; i++){
		if (parseFloat(vals[i].innerText) < 0 ) {
			vals[i].classList.add("red")
		}else{
			vals[i].classList.add("green")
		}
	}
}

// Flash Messages - Close
$(function() {
    $('.page-alert .close').click(function(e) {
        e.preventDefault();
        $(this).closest('.page-alert').slideUp();
    });
});


$(document).on('turbolinks:load', function() {
	// Change Active State of the Buttons in Sidebar
	if (document.querySelector('.breadcrumb-title') !=null){
		var header = document.getElementById("main-menu");
		var btns = header.getElementsByClassName("li-sidebar");
		var selected = document.querySelector('.breadcrumb-title').innerText.split(' ')[1].toLowerCase()
		for (var i = 0; i < btns.length; i++) {
		  btns[i].addEventListener("click", function() {
		  	changeActive();
		  });
		}
	}
	function changeActive(){
	    var current = document.getElementsByClassName("active");
	    current[0].className = current[0].className.replace(" active", "");
	    this.className += " active";
	}
	
	if (document.querySelector('.breadcrumb-title') !=null){
		changeActive();
		$('#li-'+selected).addClass('active');
	}

	// Search Bar 
	$('.search-trigger').on('click', function(event) {
		event.preventDefault();
		event.stopPropagation();
		$('.search-trigger').parent('.header-left').addClass('open');
	});

	$('.search-close').on('click', function(event) {
		event.preventDefault();
		event.stopPropagation();
		$('.search-trigger').parent('.header-left').removeClass('open');
	});

	// Left Menu Trigger
	$('#menuToggle').on('click', function(event) {
        var windowWidth = $(window).width();         
	    if (windowWidth<1010) { 
	        $('body').removeClass('open'); 
	        if (windowWidth<760){ 
	            $('#left-panel').slideToggle(); 
	        } else {
	            $('#left-panel').toggleClass('open-menu');  
	        } 
	    } else {
	        $('body').toggleClass('open');
	        $('#left-panel').removeClass('open-menu');  
	    } 
	}); 

})

// Load Resize 
$(window).on("load resize", function(event) { 
	var windowWidth = $(window).width();  		 
	if (windowWidth<1010) {
		$('body').addClass('small-device'); 
	} else {
		$('body').removeClass('small-device');  
	} 
	
});
   

// Show spinner when loading pages
$(document).on('turbolinks:click', function() {
	// $("#just_load_please").on("click", function(e) {
    // e.preventDefault();

	$("#loadMe").modal({
	  backdrop: "static", //remove ability to close modal with click
	  keyboard: false, //remove option to close with keyboard
	  show: true //Display loader!
	});
});

function launchLoadingModal(){
	$("#loadMe").modal({
	  backdrop: "static", //remove ability to close modal with click
	  keyboard: false, //remove option to close with keyboard
	  show: true //Display loader!
	});
}

$(document).on('turbolinks:load', function() {
	$("#loadMe").modal("hide");
});

