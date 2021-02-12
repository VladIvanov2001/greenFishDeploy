const snippets = document.querySelectorAll('.about-events-main-snippets__item')
let activeSnippet = document.querySelector('.about-events-main-snippets__item.active_snippet')
const bigImg = document.querySelector('.about-events-gallery__img')
const bitImgText = document.querySelector('.about-events-gallery__text')
bitImgText.innerHTML = activeSnippet.getAttribute('alt')

snippets.forEach((snippet) => {
  snippet.addEventListener('click', (e) => {
    const clickedSnippet = e.currentTarget
    if (clickedSnippet !== activeSnippet) {
      activeSnippet.classList.remove('active_snippet')
      activeSnippet = clickedSnippet
      activeSnippet.classList.add('active_snippet')
      bigImg.setAttribute('src', clickedSnippet.getAttribute('src'))
      bitImgText.innerHTML = clickedSnippet.getAttribute('alt') // описание из alt сниппета переносится в блок под большой картинкой
    }
  })
})

const aboutSwiper = new Swiper('.about-events-slider', {
  slidesPerView: 'auto',
  spaceBetween: 8,
  loop: true
})