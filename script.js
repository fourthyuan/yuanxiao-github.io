const body = document.body
const btnTheme = document.querySelector('#btn-theme')
const btnHamburger = document.querySelector('.nav__hamburger i')

const addThemeClass = (bodyClass, btnClass) => {
  body.classList.add(bodyClass)
  btnTheme.classList.add(btnClass)
}

const savedBodyTheme = localStorage.getItem('portfolio-theme') || 'light'
const savedBtnTheme = localStorage.getItem('portfolio-btn-theme') || 'fa-moon'

addThemeClass(savedBodyTheme, savedBtnTheme)

const isDark = () => body.classList.contains('dark')

const setTheme = (bodyClass, btnClass) => {
  body.classList.remove('light', 'dark')
  btnTheme.classList.remove('fa-moon', 'fa-sun')

  addThemeClass(bodyClass, btnClass)

  localStorage.setItem('portfolio-theme', bodyClass)
  localStorage.setItem('portfolio-btn-theme', btnClass)
}

const toggleTheme = () =>
  isDark() ? setTheme('light', 'fa-moon') : setTheme('dark', 'fa-sun')

btnTheme.addEventListener('click', toggleTheme)

const displayList = () => {
  const navUl = document.querySelector('.nav__list')

  if (btnHamburger.classList.contains('fa-bars')) {
    btnHamburger.classList.remove('fa-bars')
    btnHamburger.classList.add('fa-times')
    btnHamburger.parentElement.setAttribute('aria-label', '关闭导航菜单')
    navUl.classList.add('display-nav-list')
  } else {
    btnHamburger.classList.remove('fa-times')
    btnHamburger.classList.add('fa-bars')
    btnHamburger.parentElement.setAttribute('aria-label', '打开导航菜单')
    navUl.classList.remove('display-nav-list')
  }
}

btnHamburger.parentElement.addEventListener('click', displayList)

const scrollUp = () => {
  const btnScrollTop = document.querySelector('.scroll-top')

  if (
    body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    btnScrollTop.style.display = 'block'
  } else {
    btnScrollTop.style.display = 'none'
  }
}

document.addEventListener('scroll', scrollUp)
