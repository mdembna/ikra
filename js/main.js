$(document).ready(function() {
    
  let scrollLink = $(".scroll");

  scrollLink.click(function(event) {
    event.preventDefault();
    let scrollLength = {
      scrollTop: $(this.hash).offset().top
    };

    $("body, html").animate(scrollLength, 800);
  });
});
