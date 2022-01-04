(function () {
  const modalToggles = document.querySelectorAll('.modal-toggle')

  if (modalToggles.length) {
    for (const modalToggle of modalToggles) {
      const target = document.querySelector(modalToggle.dataset.target)
      if (target) {
        modalToggle.addEventListener('click', function () {
            target.classList.toggle('open')
        })
      
        document.addEventListener('click', function (e) {
          const modalWrapper = target.querySelector('.modal-wrapper')

          if (!modalWrapper.contains(e.target) && !modalToggle.contains(e.target)) {
            target.classList.remove('open')
          }
        })
      }
    }
  }

  const modalCloses = document.querySelectorAll('.modal-close')

  if (modalCloses.length) {
    for (const modalClose of modalCloses) {
      modalClose.addEventListener('click', function () {
        const modal = modalClose.closest('.modal')

        if (modal) {
          modal.classList.remove('open')
        }
      })
    }
  }
})();