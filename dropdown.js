(function () {
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle')

  if (dropdownToggles.length) {
    for (const dropdownToggle of dropdownToggles) {
      const dropdown = dropdownToggle.closest('.dropdown')
      const dropdownMenu = dropdown.querySelector('.dropdown-menu')

      dropdownToggle.addEventListener('click', function () {
        dropdown.classList.toggle('open')
      })

      document.addEventListener('click', function (e) {
        if (!dropdownMenu.contains(e.target) && e.target !== dropdownToggle) {
          dropdown.classList.remove('open')
        }
      })
    }
  }
})();