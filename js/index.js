$(document).ready(function () {
  $("#home .owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 10000,
  });
  $(".owl-prev").html('<i class="fa-solid fa-arrow-left"></i>');
  $(".owl-next").html('<i class="fa-solid fa-arrow-right"></i>');
});

document.addEventListener("mousedown", () => {
  document.getElementsByClassName("owl-carousel")[0].style.cssText =
    "cursor:default";
});

$(document).ready(function () {
  $("#pricing .owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    autoplay: true,
    smartSpeed: 1000,

    autoplayTimeout: 10000,
  });
  $(".owl-prev").html('<i class="fa-solid fa-arrow-left"></i>');
  $(".owl-next").html('<i class="fa-solid fa-arrow-right"></i>');
});

document.addEventListener("mousedown", () => {
  document.getElementsByClassName("owl-carousel")[1].style.cssText =
    "cursor:default";
});
