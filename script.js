document.addEventListener("DOMContentLoaded", () => {
  const typing = document.querySelector(".typing");
  let text = typing.textContent;
  typing.textContent = "";
  let i = 0;
  function type() {
    if (i < text.length) {
      typing.textContent += text.charAt(i);
      i++;
      setTimeout(type, 40);
    }
  }
  type();
});
