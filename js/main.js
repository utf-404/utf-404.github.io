const contactButton = document.querySelector("#contactButton");
const contactMessage = document.querySelector("#contactMessage");

contactButton.addEventListener("click", () => {
  contactMessage.textContent = "이메일: your-email@example.com";
});
