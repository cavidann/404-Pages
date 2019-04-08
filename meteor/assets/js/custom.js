// loader start
$(window).on("load", function () {
  $(".loader-bk").fadeOut(1000)
})
// loader end

$(document).ready(function() {
  // Planet and stars animation start
  $(document).mousemove(function(e) {
    let width_X, width_Y, x_Left, y_Left, x_Right, y_Right;

    width_X = e.pageX;

    width_Y = e.pageY;

    x_Left = Math.ceil(-width_X / 40);

    y_Left = Math.ceil(-width_Y / 10);

    x_Right = Math.ceil(width_X / 40);

    y_Right = Math.ceil(width_Y / 10);

    $(".planet-stars .img-outer:nth-child(1)").css({
      transform: "translate3d(" + x_Left + "px , " + y_Left + "px , 0px)"
    });

    $(".planet-stars .img-outer:nth-child(2)").css({
      transform: "translate3d(" + x_Right + "px , " + y_Right + "px , 0px)"
    });
  });
  // Planet and stars animation end
});
