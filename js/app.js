


var overlay = document.getElementsByClassName("overlay")[0];
var isSideNavOpen = false; // Variable to track the state of the side navigation

document.querySelector(".btn-bg").addEventListener(
    "click",
    function(){
        var sideNav = document.querySelector(".side-nav");
        var cross = document.getElementsByClassName("cross")[0];
        
        // Toggle the transform property of the side nav
        sideNav.style.transform = isSideNavOpen ? "translateX(100%)" : "translateX(0%)";

        overlay.style.opacity = isSideNavOpen ? "0" : "0.5"; // Adjust the opacity as necessary
        overlay.style.visibility = isSideNavOpen ? "hidden" : "visible";

        
        // Toggle the src attribute of the cross
        cross.src = isSideNavOpen ? "images/Property 1=hamburger-initial.png" : "images/Property 1=hamburger-close.png"; // Adjust image paths as necessary
        
        // Update the state of the side navigation
        isSideNavOpen = !isSideNavOpen;
    }
);

// Close side navigation when overlay is clicked
overlay.addEventListener("click", function() {
    var sideNav = document.querySelector(".side-nav");
    var cross = document.getElementsByClassName("cross")[0];
    
    // Toggle the transform property of the side nav
    sideNav.style.transform = "translateX(100%)";
    
    // Toggle the src attribute of the cross
    cross.src = "images/Property 1=hamburger-initial.png"; // Change to your initial icon source
    
    // Update the state of the side navigation
    isSideNavOpen = false;
});


$('.your-class').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  });


$('.your-class-1').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 8,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  });