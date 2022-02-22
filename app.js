const anotherNope = document.querySelector(".nope2");
const yep = document.querySelector(".yep");
yep.addEventListener("click", () => alert(`I'm with you, bro`));

const nope = document.querySelector(".nope");
nope.addEventListener("click", () => {
  nope.style.display = "none";
  anotherNope.style.visibility = "visible";
});

anotherNope.addEventListener("click", () => {
  const randomY = Math.floor(Math.random() * 200) + 1;
  const randomX = Math.floor(Math.random() * 200) + -100;

  anotherNope.style.top = `${randomY}px`;
  anotherNope.style.left = `${randomX}px`;
});
