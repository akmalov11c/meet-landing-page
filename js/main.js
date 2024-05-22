const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

sr.reveal(`.hero__img-right`, { origin: "right" });
sr.reveal(`.hero__img-left`, { origin: "left" });
sr.reveal(`.hero__content, .divider, .divider-2, .main__desc`, {
  origin: "bottom",
});
sr.reveal(`.gallery, .header__logo, .footer__inner`, { interval: 100 });
