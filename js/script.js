$(document).ready(function() {
    $('#features-1').owlCarousel({
      loop: true,
      margin: 10,
      responsiveClass: true,
      responsive: {
        0: {
          items: 2,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 4,
          nav: false,
          loop: true,
          margin: 24
        },
        1200: {
          items: 5,
          nav: false,
          loop: true,
          margin: 24
        }
      }
    })
    $('#features-2').owlCarousel({
      loop: true,
      margin: 10,
      responsiveClass: true,
      responsive: {
        0: {
          items: 2,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 4,
          nav: false,
          loop: true,
          margin: 24
        },
        1200: {
          items: 5,
          nav: false,
          loop: true,
          margin: 24
        }
      }
    })
    $('#features-3').owlCarousel({
      loop: true,
      margin: 10,
      responsiveClass: true,
      responsive: {
        0: {
          items: 2,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 4,
          nav: false,
          loop: true,
          margin: 24
        },
        1200: {
          items: 5,
          nav: false,
          loop: true,
          margin: 24
        }
      }
    })
    $('#fb').owlCarousel({
      loop: true,
      margin: 10,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
          nav: false,
          loop: true,
          margin: 24
        }
      }
    })
    $('#brands').owlCarousel({
      loop: true,
      margin: 10,
      responsiveClass: true,
      autoplay:true,
      autoplayTimeout:2000,
      autoplayHoverPause:true,
      responsive: {
        0: {
          items: 2,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 6,
          nav: false,
          loop: true,
          margin: 24
        }
      }
    })
    $('#news').owlCarousel({
      loop: true,
      margin: 10,
      responsiveClass: true,
      autoplay:true,
      autoplayTimeout:5000,
      autoplayHoverPause:true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 4,
          nav: false,
          loop: true,
          margin: 24
        }
      }
    })
    $(document).ready(function(){
      // Add smooth scrolling to all links
      $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });
    });
})

$(window).resize(function(){
  if($(window).width()>=992) {
    $('#aside').css('display','block');
  }
  else {
    $('#aside').css('display','none');
  }
})
$('#btn-filter').click(function(){
  $('#aside').toggle("slide");
})
$('#btn-aside-close').click(function(){
  $('#aside').toggle("slide");
})

function makeTimer() {

    //		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");	
      var endTime = new Date("30 July 2025 23:59:59 GMT+07:00");			
        endTime = (Date.parse(endTime) / 1000);
  
        var now = new Date();
        now = (Date.parse(now) / 1000);
  
        var timeLeft = endTime - now;
  
        var days = Math.floor(timeLeft / 86400); 
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
    
        if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }
  
        $(".days").html(days + "<span>Ngày</span>");
        $(".hours").html(hours + "<span>Giờ</span>");
        $(".minutes").html(minutes + "<span>Phút</span>");
        $(".seconds").html(seconds + "<span>Giây</span>");		
  
    }
  
    setInterval(function() { makeTimer(); }, 1000);

    // Instantiate EasyZoom instances
		var $easyzoom = $('.easyzoom').easyZoom();

		// Setup thumbnails example
		var api1 = $easyzoom.filter('.easyzoom--with-thumbnails').data('easyZoom');

		$('.thumbnails').on('click', 'a', function(e) {
			var $this = $(this);

			e.preventDefault();

			// Use EasyZoom's `swap` method
			api1.swap($this.data('standard'), $this.attr('href'));
		});

		// Setup toggles example
		var api2 = $easyzoom.filter('.easyzoom--with-toggle').data('easyZoom');

		$('.toggle').on('click', function() {
			var $this = $(this);

			if ($this.data("active") === true) {
				$this.text("Switch on").data("active", false);
				api2.teardown();
			} else {
				$this.text("Switch off").data("active", true);
				api2._init();
			}
		});
// Video 3 buoi 9 10
$('#btn-plus').click(function(){
  var qty=$('#qty-value').val();
  qty=parseInt(qty,10);
  qty=qty + 1;
  $('#qty-value').val(qty);
})
$('#btn-minus').click(function(){
  var qty=$('#qty-value').val();
  qty=parseInt(qty,10);
  if(qty<=1){
    $('#qty-value').val(1);
  }
  else {
    qty= qty-1;
    $('#qty-value').val(qty);
  }
})
