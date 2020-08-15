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

const toggleButton = () => {
  $(".card").toggle();
  $(".btn").toggle();
  $(".btn-close").toggle();
};

$(".btn").click(function (e) {
  if (!isMoved) {
    toggleButton();
  }
  isMoved = false;
});

$(".btn-close").click(function () {
  toggleButton();
});
