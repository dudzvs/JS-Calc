
const $html = document.querySelector('html')
const toggleMode = document.querySelector('header div')

toggleMode.addEventListener('click', () => {
  $html.classList.toggle('darkMode')
})

