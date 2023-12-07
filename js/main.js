const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
  faq.addEventListener("click", (e) => {
    showAnswer(e);
  });
});

function showAnswer(e) {
  const faq = e.currentTarget;
  faq.classList.toggle("active");
  changeIcon(e);
}
function changeIcon(e) {
  const faq = e.currentTarget;
  const icon = e.currentTarget.children[0].children[1];
  const plusIcon = "assets/images/icon-plus.svg";
  const minusIcon = "assets/images/icon-minus.svg";

  if (faq.classList.contains("active")) {
    icon.src = minusIcon;
  } else {
    icon.src = plusIcon;
  }
}
