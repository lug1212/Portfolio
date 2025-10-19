document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector(".logo");
  const body = document.body;

  if (!logo) return;

  // Determine target rotation from CSS class
  let targetRotation = 360;
  if (body.classList.contains("about-page")) targetRotation = 270;
  if (body.classList.contains("contacts-page")) targetRotation = 180;
  if (body.classList.contains("project-page")) targetRotation = 90;

  // Get previous rotation
  const storedRotation = localStorage.getItem("logoRotation");
  const previousRotation = storedRotation !== null ? Number(storedRotation) : targetRotation;

  // Temporarily disable transition
  logo.style.transition = "none";
  logo.style.transform = `rotate(${previousRotation}deg)`;

  // Force reflow
  void logo.offsetWidth;

  // Animate to target
  setTimeout(() => {
    logo.style.transition = "transform 0.5s ease-in-out";
    logo.style.transform = `rotate(${targetRotation}deg)`;
    localStorage.setItem("logoRotation", targetRotation);
  }, 25);
});