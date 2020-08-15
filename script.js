const position = { x: 236.028, y: 74.9548 };
let isMoved = false;
let isMouseInsideCard = false;
// style="transform: translate(236.028px, 74.9548px);"
interact(".draggable").draggable({
  listeners: {
    move(event) {
      if (position.x > 260) position.x = 260;
      if (position.x < 0) position.x = 0;

      position.x += event.dx;
      position.y += event.dy;

      event.target.style.transform = `translate(${position.x}px, ${position.y}px)`;
      event ? (isMoved = true) : null;
    },
  },
});

$(".btn").click(function (e) {
  if (!isMoved) {
    $(".btn").addClass("fade-out").removeClass("fade-in");
    $(".btn-close")
      .removeClass("slide-out-bottom d-none")
      .addClass("slide-in-bottom");

    $(".card").removeClass("d-none slide-out-top").addClass("slide-in-top");
  }
  isMoved = false;
});

$(".btn-close").click(function () {
  $(".btn").addClass("fade-in").removeClass("fade-out");
  $(".btn-close").addClass("slide-out-bottom").removeClass("slide-in-bottom");
  $(".card").addClass("slide-out-top").removeClass("slide-in-top");
});
