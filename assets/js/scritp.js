$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $('.scrollup').fadeIn();
    } else {
        $('.scrollup').fadeOut();
    }
  }); 
  
  $('.scrollup').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 2000);
    return false;
  });



  $("#slider2").owlCarousel({
  loop: true,
  margin: 15,
  nav: false,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});


var typed2 = new Typed('.text-2', {
  strings: [' ZAYED AMIN',],
  typeSpeed: 100,
  backSpeed: 1000,
  fadeOut: true,
  loop: true
}); 

// var typed2 = new Typed('.text', {
//   strings: ['Web Designer', 'Frontend Designer', 'Youtuber'],
//   typeSpeed: 100,
//   backSpeed: 1000,
//   fadeOut: true,
//   loop: true
// });


let valueDisplays = document.querySelectorAll(".num");
let interval = 10000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue +=1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});