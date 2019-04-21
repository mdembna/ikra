$(document).ready(function() {
  
  let logo = $('#main-logo');
  let carousel = $('.carousel');
  let nav = $('.nav');
  logo.animate({opacity: 1}, 3000);
  setTimeout(() => nav.animate({opacity: 1}, 3000), 1000);
  setTimeout(() => carousel.animate({opacity: 1}, 3000), 2000);


  let scrollLink = $(".scroll");

  scrollLink.click(function(event) {
    event.preventDefault();
    let scrollLength = {
      scrollTop: $(this.hash).offset().top
    };

    $("body, html").animate(scrollLength, 800);
  });
});
