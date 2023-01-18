window.scrollTo({ top: 0 })

const heroSection = document.querySelector('.hero')
const workSection = document.querySelector('.work')
const workArticles = workSection.querySelectorAll('article')

const workObserver = new IntersectionObserver(
  ([entry]) => {
    if (
      entry.boundingClientRect.y <
      window.innerHeight - window.innerHeight / 6
    ) {
      heroSection.classList.add('hide')
    } else {
      heroSection.classList.remove('hide')
    }
  },
  {
    threshold: [0, 0.1, 0.2, 0.4, 0.5, 0.6, 0.8, 1],
  }
)

workObserver.observe(workSection)

const articleObserver = new IntersectionObserver(
  ([entry]) => {
    console.log(entry.intersectionRatio)
    if (
      entry.intersectionRatio > 0.25
    ) {
      entry.target.classList.add('show')
    } else {
      entry.target.classList.remove('show')
    }
  },
  { threshold: [0, 0.1, 0.2, 0.4, 0.5, 0.6, 0.8, 1] }
)

workArticles.forEach((article) => articleObserver.observe(article))
