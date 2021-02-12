const shopLocationsItems = document.querySelectorAll('.shops-location__list__item');
const checkButtons = document.querySelectorAll('.item-checkbox');

shopLocationsItems.forEach((shopLocationItem, idx) =>{
    shopLocationItem.addEventListener('click', (event)=>{
        checkButtons.forEach((checkButton) =>{
            checkButton.checked = false;
        });
        checkButtons[idx].checked = true;
    })

});
