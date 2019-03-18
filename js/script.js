
// sticky navbar
$(window).scroll(function(e) {
	if ($(this).scrollTop() > 40){  
    	$('.navbar').addClass("navbar-fixed-top");
 	}
  	else{
    	$('.navbar').removeClass("navbar-fixed-top");
	}
});

// Header carousel init
$(document).ready(function(){
  $(".mainCarousel").owlCarousel({
    loop:true,
    items:1,
    center: true,
    responsiveClass:true,
    nav:true,
    navText: [],
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:false
  });
});

//Gallery Carousel
$(document).ready(function(){
  $(".galleryCarousel").owlCarousel({
    loop:true,
    items:1,
    center: true,
    responsiveClass:true,
    nav:true,
    rtl: false,
    navText: [],
    autoplay:false,
    autoplayHoverPause:false
  });
});	

// Testimonials Carousel init
$(document).ready(function(){
  $(".testimonialsCarousel").owlCarousel({
    loop:true,
    items:1,
    center: true,
    responsiveClass:true,
    nav:true,
    rtl: false,
    navText: [],
    autoplay:false,
    autoplayHoverPause:false
  });
});

// fancybox init
$('.fancybox').fancybox({
	padding: 0,
	helpers: {
		overlay: {
			locked: false
		}
	}
});

// mansory (portfolio)
	var self = $(".project-list");
	self.masonry({
		columnWidth: '.grid-sizer',
		itemSelector: '.grid-item',
		percentPosition: true
	});

	$(".filter a").on("click",function(e){
		e.preventDefault();
		var filter = $(this).attr("data-filter");
	        $(".filter a").removeClass('current');
			$(this).addClass('current');
				self.masonryFilter({
				filter: function () {
			    	if (!filter) return true;
			        	return $(this).attr("data-filter") == filter;
		    }
		});
	})

// googleMaps
var myCenter = new google.maps.LatLng(27.779466, -97.502404);

function initialize() {
var mapProp = {
center: myCenter,
zoom: 11,
scrollwheel: false,
draggable: false,
mapTypeId:google.maps.MapTypeId.ROADMAP
};

var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

var marker = new google.maps.Marker({
            icon: 'img/marker.png',
            map: map,
            position: map.getCenter()
            });
map.getCenter(),
marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);

// skills settings

$(document).ready(function () {
    var loaded=false;
        $(window).scroll(function () {                     
            var anchor = $(".features");
            var offset = anchor.offset();
            var scrollTop =  $(window).scrollTop();
                if( scrollTop > offset.top){
                    initCircles(loaded);
                    loaded = true;
            };
        });
    });     

    var values = [93,90,85,87,93,90,65];
    var colors = [ ['transparent', '#ffffff'],
                   ['transparent', '#ffffff'], 
                   ['transparent', '#ffffff'], 
                   ['transparent', '#ffffff'], 
                   ['transparent', '#ffffff'], 
                   ['transparent', '#ffffff'], 
                   ['transparent', '#ffffff']
                ];
   
    function initCircles(loaded) {
        if (!loaded) {
            for (var i = 1; i <= values.length; i++) {
                var child = document.getElementById('circles-' + i);
                    Circles.create({
                    id:         child.id,
                    percentage: values[i-1],
                    radius:     50,
                    width:      3,
                    number:     values[i-1],
                    text:       '%',
                    colors:     colors[i - 1],
                    duration: 2000
                });
            };
        };  
    }; 

