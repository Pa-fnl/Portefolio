gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

gsap.from(".box-skill", {
  scrollTrigger: {
    trigger: ".box-skill",
    toggleActions: "restart none none reset",
    start: "top 100%",
  },
  y: 10,
  opacity: 0,
  scale: 0,
  ease: "elastic(0.4,0.15)",
  duration: 3,
  stagger: 0.5,
});

gsap.defaults({ ease: "none" });

const tl = gsap.timeline();
tl.to("h1 span", {
  duration: 4,
  text: "developpeur Full Stack",
});
