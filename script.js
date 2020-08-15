const position = { x: 0, y: 0 };
let isMoved = false;

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

$(".btn").click("touchstart touchend", function (e) {
  if (!isMoved) {
    $(".card").toggle();
    $(".btn").toggle();
  }
  isMoved = false;
});
