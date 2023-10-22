function innit() {
  const body = document.querySelector("body");
  const ctaBtn = document.querySelector(".cta-btn");
  const modal = document.querySelector(".modal");
  const overlay = document.querySelector(".overlay");
  const closeBtn = document.querySelector(".close");

  // open modal
  ctaBtn.addEventListener("click", () => {
    addActiveClasses();
  });

  // close modal after clicking on overlay
  overlay.addEventListener("click", () => {
    removeActiveClasses();
  });

  // close modal after clickingclose button
  closeBtn?.addEventListener("click", () => {
    removeActiveClasses();
  });

  // close modal using ESC key
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      removeActiveClasses();
    }
  });

  // close modal ENTER key Enter when button is focused
  closeModalByKey();

  trapFocus();

  //////////////////////////////////////
  ///// functions declarations ///////
  //////////////////////////////////////

  function removeActiveClasses() {
    modal.classList.remove("modal-active");
    overlay.classList.remove("modal-active");
  }

  function addActiveClasses() {
    modal.classList.add("modal-active");
    overlay.classList.add("modal-active");
    closeBtn?.focus({ preventScroll: true });
  }

  function closeModalByKey() {
    document.addEventListener(
      "focusin",
      () => {
        if (document.activeElement === closeBtn) {
          closeBtn?.addEventListener("keydown", e => {
            if (e.key === "Enter") {
              removeActiveClasses();
            }
          });
        }
      },
      true
    );
  }

  function trapFocus() {
    const firstEl = closeBtn;
    const lastEl = document.querySelector(".btn-focus");

    modal.addEventListener("keydown", e => {
      const submitBtn = document.querySelector(".form_btn");
      const isTabPressed = e.key === "Tab";
      const hasFocus = document.activeElement;

      if (!isTabPressed) {
        return;
      }

      if (e.shiftKey) {
        if (hasFocus === firstEl) {
          submitBtn.focus();
          e.preventDefault();
        }
      } else {
        if (hasFocus === lastEl) {
          closeBtn.focus();
          e.preventDefault();
        }
      }
    });
  }
}

// function maternityModal() {
//   const maternityModal = document.querySelectorAll(".maternity-modal");
//   const closeBtn = document.querySelector(".close-maternity-modal");

//   setTimeout(() => {
//     maternityModal.forEach(modal => modal.classList.add("modal-active"));
//   }, 4000);

//   closeBtn?.addEventListener("click", () => {
//     document
//       .querySelectorAll(".maternity-modal")
//       .forEach(modal => modal.classList.remove("modal-active"));
//   });
// }

innit();
// maternityModal();
