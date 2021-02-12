const catImg = document.querySelector('.not_found-info-main__cat')
const link = document.querySelector('.not_found-info__text a')
const tabletWidth = 1200

if (document.documentElement.clientWidth >= tabletWidth) {
  link.addEventListener('mouseover', () => {
    catImg.classList.add('hover')
  })

  link.addEventListener('mouseout', () => {
    catImg.classList.remove('hover')
  })
}
