$(document).ready(function(){
    $(".owl-virgus").owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        nav: true,
        navText: [
            '<div class="owl-prev"><i class="fa fa-arrow-left"></div>', 
            '<div class="owl-next"><i class="fa fa-arrow-right"></div>'
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
});

$(document).ready(function(){
    $(".owl-train").owlCarousel({
      items: 3, // Adjust the number of items to display
      loop: true, // Enable continuous loop mode
      margin: 10, // Adjust the margin between items
      autoplay: true, // Enable autoplay
      autoplayTimeout: 700, // Set autoplay interval in milliseconds
      autoplayHoverPause: true, // Pause on mouse hover
      autoplaySpeed: 700, // Speed of the autoplay transition (in milliseconds)
      smartSpeed: 700, // Speed of the transitions between items (in milliseconds)
      nav: false, // Show navigation buttons
      dots: false, // Show pagination dots
      responsive: {
        0: {
          items: 1 // Adjust items for small devices
        },
        600: {
          items: 2 // Adjust items for medium devices
        },
        1000: {
          items: 3 // Adjust items for large devices
        }
      }
    });
  });
$(document).ready(function(){
    $(".owl-train2").owlCarousel({
      items: 3, // Adjust the number of items to display
      loop: true, // Enable continuous loop mode
      margin: 10, // Adjust the margin between items
      autoplay: true, // Enable autoplay
      autoplayTimeout: 900, // Set autoplay interval in milliseconds
      autoplayHoverPause: true, // Pause on mouse hover
      autoplaySpeed: 900, // Speed of the autoplay transition (in milliseconds)
      smartSpeed: 900, // Speed of the transitions between items (in milliseconds)
      nav: false, // Show navigation buttons
      dots: false, // Show pagination dots
      responsive: {
        0: {
          items: 1 // Adjust items for small devices
        },
        600: {
          items: 2 // Adjust items for medium devices
        },
        1000: {
          items: 3 // Adjust items for large devices
        }
      }
    });
  });

  $(document).ready(function(){
    $('.filter-btn').on('click', function(){
        var filter = $(this).data('filter');
        if(filter == 'all'){
            $('.filter').show();
        }else{
            $('.filter').hide();
            $('.filter[data-category="'+filter+'"]').show();
        }
    });
});


