// loader start
$(window).on("load", function() {
  $(".loader-bk").fadeOut(1000);
});
// loader end

//   Gradient animation config start
var granimInstance = new Granim({
  element: "#canvas-basic",
  name: "basic-gradient",
  direction: "left-right", // 'diagonal', 'top-bottom', 'radial'
  opacity: [0.6, 0.5],
  isPausedWhenNotInView: false,
  states: {
    "default-state": {
      gradients: [
        ["#ef3f3f", "#f3f74a"],
        ["#33FFCC", "#673ab7"],
        ["#FF33CC", "#FFCC33"],
        ["#D48911", "#89D411"]
      ]
    }
  }
});
// Gradient animation config end
