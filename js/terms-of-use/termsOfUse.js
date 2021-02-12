const accordions = document.querySelectorAll('.terms-list__acc')
const mobileWidth = 768

accordions.forEach( accordion => {
  accordion.addEventListener('click', function () {
    this.classList.toggle('acc-active')
    const content = this.nextElementSibling
    if (content.style.maxHeight) {
      content.style.maxHeight = null
    }
    else {
      let marginBottomIncrease = 48  // отступ от конца статьи до следующего аккордеона
      if (document.documentElement.clientWidth < mobileWidth) {
        marginBottomIncrease = 62
      }
      content.style.maxHeight = content.scrollHeight + marginBottomIncrease + "px"
      content.style.height = content.scrollHeight + marginBottomIncrease + "px"
    }
  })
})