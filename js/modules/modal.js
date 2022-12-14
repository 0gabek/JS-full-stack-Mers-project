function openModal(modalSelector, modalTimer) {
  const modal = document.querySelector(modalSelector);
  modal.classList.add("show");
  document.body.style.overflow = "hidden";
  console.log(modalTimer);
  if (modalTimer) {
    clearInterval(modalTimer);
  }
}
function closeModal(modalSelector) {
  const modal = document.querySelector(modalSelector);
  modal.classList.remove("show");
  document.body.style.overflow = "";
}

export default function modal(triggerSelector, modalSelector, modalTimer) {
  // MODAL, FEEDBACK
  const allModalBtn = document.querySelectorAll(triggerSelector),
    modal = document.querySelector(modalSelector);

  allModalBtn.forEach((btn) =>
    btn.addEventListener("click", () => {
      openModal(modalSelector, modalTimer);
    })
  );

  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.getAttribute("data-close") === "") {
      closeModal(modalSelector);
    }
  });

  function showMyModalByScroll() {
    if (
      window.pageYOffset + 2 + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    ) {
      openModal(modalSelector, modalTimer);
      window.removeEventListener("scroll", showMyModalByScroll);
    }
  }
  window.addEventListener("scroll", showMyModalByScroll);
}

export { closeModal, openModal };
