


const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const aboutMenu = document.querySelector('#about-page');
  const servicesMenu = document.querySelector('#services-page');
  let scrollPos = window.scrollY;
  // console.log(scrollPos);

  // adds 'highlight' class to my menu items
  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    servicesMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    servicesMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  }

  if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};


var avi = 2;
    setInterval(function () {
        if(avi == 1) op = "one";
        if(avi == 2) op = "two";
        if(avi == 3) op = "three";
        if(avi == 4) op = "four";

        document.querySelectorAll('.opiniaoc.one, .opiniaoc.two, .opiniaoc.three, .opiniaoc.four').forEach(function (el) {
            el.style.opacity = 0;
            setTimeout(function () {
                el.style.display = 'none';
            }, 400);
        });

        setTimeout(function () {
            var el = document.querySelector(".opiniaoc." + op);
            el.style.display = 'block';
            setTimeout(function () {
                el.style.opacity = 1;
            }, 200);
        }, 400);

        avi++;
        if(avi == 6) avi = 1;
    }, 7000);

    document.querySelectorAll('img[src]').forEach(function (data) {
        var image = new Image();
        image.onload = function () {
            data.src = this.src;
            data.style.opacity = 1;
        };
        image.src = data.getAttribute('data-src');
    });



$(document).ready(function() {

    $('.counter').each(function () {
    $(this).prop('Counter',0).animate({
    Counter: $(this).text()
    }, {
    duration: 5000,
    easing: 'swing',
    step: function (now) {
    $(this).text(Math.ceil(now));
    }
    });
    });
    
    });

    jQuery(document).ready(function($) {
      "use strict";
      //  TESTIMONIALS CAROUSEL HOOK
      $('#customers-testimonials').owlCarousel({
          loop: true,
          center: true,
          items: 3,
          margin: 0,
          autoplay: true,
          dots:true,
          autoplayTimeout: 8500,
          smartSpeed: 450,
          responsive: {
            0: {
              items: 1
            },
            768: {
              items: 2
            },
            1170: {
              items: 3
            }
          }
      });
    });