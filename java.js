$(function () {
    $("#mega").click(function () {
      $(".mega-menu").slideToggle("slow");
      $(".mega-menu").css("display",'flex');
    });


    $("#mega1").click(function () {
        $("#mega-menu").slideToggle("slow");
        $("#mega-menu").css("display",'flex');
      });
  });
  



let wroks = document.querySelector(".works");
let divs = document.querySelectorAll(".works-texts div");
let imgs = document.querySelectorAll(".works-img img ");


window.onscroll = function () {
  
    // start works
    if (window.scrollY >= wroks.offsetTop - 50) {
      imgs.forEach((img) => {
        img.style.opacity = img.dataset.opacity;
      });
      divs.forEach((div) => {
        div.style.opacity = div.dataset.opacity;
      });
    }
    // end works
  };
  