// Toggle mobile menu
function toggleMenu() {
  const menu = document.getElementById("myLinks");
  menu.classList.toggle("open");
  console.log("Menu toggled. Current state:", menu.classList.contains("open") ? "OPEN" : "CLOSED");
}

// Close menu on link click
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("#myLinks a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      document.getElementById("myLinks").classList.remove("open");
      console.log("Menu closed via link click");
    });
  });

  // jQuery Marquee animation (only runs if .marquee exists)
  if ($(".marquee").length) {
    var $text = $(".marquee span");
    var containerWidth = $(".marquee").width();
    var textWidth = $text.width();

    function animateMarquee() {
      $text.css({ left: -textWidth }) // start outside left
           .animate({ left: containerWidth },
              20000, // 20 seconds
              "linear",
              animateMarquee // repeat
           );
    }

    animateMarquee();

    // Update widths on resize
    $(window).resize(function () {
      containerWidth = $(".marquee").width();
      textWidth = $text.width();
    });
  }
});
