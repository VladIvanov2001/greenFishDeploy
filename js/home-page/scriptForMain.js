const checkedValue = document.getElementById('menu__toggle');
const showMoreBtn = document.querySelector('.popular-models__info__show-more');
const hiddenItems = document.querySelectorAll('.more');

checkedValue.addEventListener('click', () => {
    checkedValue.checked ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'initial';
});

showMoreBtn.addEventListener('click', () =>{
    hiddenItems.forEach((elem)=>{
       elem.style.display = 'flex';
    })
    showMoreBtn.style.display = 'none'
})
