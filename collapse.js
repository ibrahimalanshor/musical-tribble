(function () {
  const collapseToggles = document.querySelectorAll('.collapse-toggle')

  if (collapseToggles.length) {
    for (const collapseToggle of collapseToggles) {
      const target = document.querySelector(collapseToggle.dataset.target)

      if (target) {
        collapseToggle.addEventListener('click', function () {
          target.classList.toggle('show')
        })
      }
    }
  }
})();