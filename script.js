const navToggle = document.querySelector('[data-nav-toggle]')
const nav = document.querySelector('[data-nav]')
const header = document.querySelector('[data-header]')
const year = document.querySelector('[data-year]')

if (year) year.textContent = new Date().getFullYear()

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open')
    navToggle.setAttribute('aria-expanded', String(open))
  })

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open')
      navToggle.setAttribute('aria-expanded', 'false')
    })
  })
}

const revealItems = document.querySelectorAll('.reveal')
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible')
      observer.unobserve(entry.target)
    }
  })
}, { threshold: 0.12 })

revealItems.forEach((item) => observer.observe(item))

window.addEventListener('scroll', () => {
  if (!header) return
  header.style.boxShadow = window.scrollY > 10 ? '0 12px 40px rgba(0,0,0,.22)' : 'none'
})
