// Плавное появление элементов при прокрутке
document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(".fade-in");

  const appearOptions = {
    threshold: 0.3,
  };

  const appearOnScroll = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach((fader) => {
    appearOnScroll.observe(fader);
  });
});

// Эффект "вверх" при скролле
const scrollBtn = document.createElement("button");
scrollBtn.textContent = "↑";
scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "30px";
scrollBtn.style.right = "30px";
scrollBtn.style.padding = "10px 15px";
scrollBtn.style.background = "#e60023";
scrollBtn.style.color = "#fff";
scrollBtn.style.border = "none";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.fontSize = "18px";
scrollBtn.style.display = "none";
scrollBtn.style.zIndex = "999";
document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Плавный hover-аним эффект на кнопках
document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "scale(1.05)";
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "scale(1)";
  });
});
