(() => {
  const carousel = document.querySelector("[data-carousel]");

  if (!carousel) return;

  const slides = [
    {
      src: "./01_draw-cards.gif",
      title: "Draw your hand",
      description:
        "Draw action cards and turn them into resources, influence, and control.",
      alt: "Drawing action cards in Hidden Council",
    },
    {
      src: "./02_short-war.gif",
      title: "A short war",
      description:
        "Declare war, resolve its battle rounds, and negotiate the final peace.",
      alt: "A short war playing out on the Hidden Council map",
    },
    {
      src: "./03_characters.gif",
      title: "Characters and opinion",
      description:
        "Work through generals, diplomats, and advisors whose opinions can shift.",
      alt: "Inspecting characters and their opinions in Hidden Council",
    },
    {
      src: "./04_long-war.gif",
      title: "A longer campaign",
      description:
        "Watch a multi-round war change ownership and the strategic map over time.",
      alt: "A longer multi-round war in Hidden Council",
    },
    {
      src: "./05_map-lenses.gif",
      title: "Map lenses",
      description:
        "Switch views to read control, ownership, diplomacy, and the state of the world.",
      alt: "Switching between map lenses in Hidden Council",
    },
  ];

  const stage = carousel.querySelector("[data-carousel-stage]");
  const currentImage = carousel.querySelector("[data-carousel-current-image]");
  const previousImage = carousel.querySelector("[data-carousel-prev-image]");
  const nextImage = carousel.querySelector("[data-carousel-next-image]");
  const title = carousel.querySelector("[data-carousel-title]");
  const description = carousel.querySelector("[data-carousel-description]");
  const counter = carousel.querySelector("[data-carousel-counter]");
  const previousLabel = carousel.querySelector("[data-carousel-prev-label]");
  const nextLabel = carousel.querySelector("[data-carousel-next-label]");
  const dots = carousel.querySelector("[data-carousel-dots]");
  let current = 0;
  let pointerStart = null;
  let animationTimer = null;
  let suppressClick = false;

  const wrap = (index) => (index + slides.length) % slides.length;

  const setImage = (image, slide) => {
    image.src = slide.src;
    image.alt = slide.alt;
  };

  const render = (direction = 0) => {
    const previous = slides[wrap(current - 1)];
    const active = slides[current];
    const next = slides[wrap(current + 1)];

    setImage(previousImage, previous);
    setImage(currentImage, active);
    setImage(nextImage, next);
    previousLabel.textContent = previous.title;
    nextLabel.textContent = next.title;
    title.textContent = active.title;
    description.textContent = active.description;
    counter.textContent = `${String(current + 1).padStart(2, "0")} / ${String(
      slides.length,
    ).padStart(2, "0")}`;

    dots.querySelectorAll("button").forEach((dot, index) => {
      const selected = index === current;
      dot.classList.toggle("active", selected);
      dot.setAttribute("aria-current", selected ? "true" : "false");
    });

    window.clearTimeout(animationTimer);
    stage.classList.remove("is-moving-left", "is-moving-right");
    void stage.offsetWidth;

    if (direction !== 0) {
      stage.classList.add(direction > 0 ? "is-moving-left" : "is-moving-right");
      animationTimer = window.setTimeout(() => {
        stage.classList.remove("is-moving-left", "is-moving-right");
      }, 460);
    }
  };

  const move = (direction) => {
    current = wrap(current + direction);
    render(direction);
  };

  slides.forEach((slide, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.setAttribute("aria-label", `Show ${slide.title}`);
    dot.addEventListener("click", () => {
      if (index === current) return;

      const shortestDirection =
        (index - current + slides.length) % slides.length <= slides.length / 2
          ? 1
          : -1;
      current = index;
      render(shortestDirection);
    });
    dots.appendChild(dot);
  });

  carousel.querySelectorAll("[data-carousel-prev]").forEach((button) => {
    button.addEventListener("click", () => move(-1));
  });

  carousel.querySelectorAll("[data-carousel-next]").forEach((button) => {
    button.addEventListener("click", () => move(1));
  });

  carousel.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      move(-1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      move(1);
    }
  });

  stage.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;

    pointerStart = { x: event.clientX, y: event.clientY };
    stage.setPointerCapture(event.pointerId);
  });

  stage.addEventListener("pointerup", (event) => {
    if (!pointerStart) return;

    const deltaX = event.clientX - pointerStart.x;
    const deltaY = event.clientY - pointerStart.y;
    pointerStart = null;

    if (Math.abs(deltaX) > 48 && Math.abs(deltaX) > Math.abs(deltaY)) {
      suppressClick = true;
      move(deltaX < 0 ? 1 : -1);
      window.setTimeout(() => {
        suppressClick = false;
      }, 0);
    }
  });

  stage.addEventListener(
    "click",
    (event) => {
      if (!suppressClick) return;

      event.preventDefault();
      event.stopPropagation();
    },
    true,
  );

  stage.addEventListener("pointercancel", () => {
    pointerStart = null;
  });

  render();
})();
