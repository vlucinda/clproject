/**********JS comments: This function allowed me to manipulate the presentation of the slideshow on the index page. I can change the amount of time each photo is displayed (autoplay speed) and how long it takes for the pictures to change on the screen (speed).  The pictures are set to fade; there are dots underneath that indicate where the viewer is in the sideshow; and one slide displays at a time. Autoplay:true ensures that the show starts without prompting by the user.**********/

$(document).ready(function(){
  $('.fade').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      
  });
});
