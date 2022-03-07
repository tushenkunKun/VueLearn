$(document).ready(function () {
  $(".wrap").mouseenter(function () {
    $(this).find(".before").css("opacity", "1").animate({ left: "0" }, 200);
    $(this).children(".after").css({
      "z-index": "-2",
      width: "100px",
    });
  });
  $(".wrap").mouseleave(function () {
    $(this).find(".before").css({ opacity: "0", left: "-100px" });
    $(this).children(".after").css("z-index", "2").animate({ width: "0" }, 200);
  });
});
