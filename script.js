// Toggle mobile menu
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("open");
}

// Close menu on link click
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("#navLinks a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      document.getElementById("navLinks").classList.remove("open");
    });
  });

  // jQuery Marquee animation
  if ($(".marquee").length) {
    var message = "Elektrik  Eel  Father's  Day  SALE  coming  on  the  20th  of  August  to  the 7  September";
    var repeatedMessage = (" | " + message + "  ").repeat(20);
    $(".marquee span").text(repeatedMessage);

    var $text = $(".marquee span");
    var containerWidth = $(".marquee").width();
    var textWidth = $text.width();

    function animateMarquee() {
      $text.css({ left: -textWidth })
           .animate({ left: containerWidth }, 200000, "linear", animateMarquee);
    }

    animateMarquee();

    $(window).resize(function () {
      containerWidth = $(".marquee").width();
      textWidth = $text.width();
    });
  }
  
});
