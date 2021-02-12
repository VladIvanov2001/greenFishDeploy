const minusBtns = document.querySelectorAll('.item-count-minus');
const plusBtns = document.querySelectorAll('.item-count-plus');
const itemsCounter = document.querySelectorAll('.item-count');
const costForOneItems = document.querySelectorAll('.cost-for-one-item');
const necessaryNumbersForPhone = 15;
const finalCosts = document.querySelectorAll('.final-cost');
const sendByPost = document.getElementById('mail');
const phoneInput = document.querySelector('.phone');
const emailInput = document.querySelector('.email');
const nameInput = document.querySelector('.name');
const phoneNumber = document.querySelector('.buyer-info__phone');
const name = document.querySelector('.buyer-info__name');
const email = document.querySelector('.buyer-info__email');
const sendOrderBtn = document.querySelector('.basket-main__right__send-order');
const adressOrCommentInput = document.querySelector('.comment');
let finalOrderPriceTablet = document.querySelector('.final-order-tablet__sum-numbers span');
let finalOrderAmountTablet = document.querySelector('.final-order-tablet__count .title-small span');
let finalOrderAmountDesktop = document.querySelector('.final-count span');
let finalOrderPriceDesktop = document.querySelector('.final-sum span');
sendByPost.disabled = true;

const phoneMask = {
    mask: '+{375}(00)0000000'
}
const mask = new IMask(phoneInput, phoneMask);

function validation() {
    let flag = true;
    console.log(phoneInput.value.length);
    if (nameInput.value.length === 0) {
        flag = false;
        nameInput.classList.add('error-input');
    } else nameInput.classList.remove('error-input');
    if (phoneInput.value.length !== necessaryNumbersForPhone) {
        flag = false;
        phoneInput.classList.add('error-input');
    } else phoneInput.classList.remove('error-input');
    if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(emailInput.value)) {
        flag = false;
        emailInput.classList.add('error-input');
    } else emailInput.classList.remove('error-input');
    if (adressOrCommentInput.value.length === 0) {
        flag = false;
        adressOrCommentInput.classList.add('error-input');
    } else adressOrCommentInput.classList.remove('error-input');
    if (flag) {
        name.textContent = nameInput.value;
        phoneNumber.textContent = phoneInput.value;
        email.textContent = emailInput.value;
        sendOrderBtn.classList.add('send-btn-active');
        document.querySelector('.order-notification').style.display = 'none';
    } else {
        document.querySelector('.order-notification').style.display = 'block';
        document.querySelector('.order-notification').style.color = 'red';
        sendOrderBtn.classList.remove('send-btn-active');
        name.textContent = '';
        phoneNumber.textContent = '';
        email.textContent = '';

    }
}

function checkAccessForMail(count) {
    if (count >= 5) {
        sendByPost.disabled = false;
        document.querySelector('.info-about-mail').classList.add('info-about-mail-active');
    } else {
        sendByPost.disabled = true;
        document.querySelector('.info-about-mail').classList.remove('info-about-mail-active');
    }
}

function countFinalAmount() {
    let result = 0;
    itemsCounter.forEach(elem => {
        result += Number(elem.textContent);
    });
    return result;
}

function countFinalPrice() {
    let result = 0;
    finalCosts.forEach(elem => {
        result += Number(elem.textContent.replace(',', '.'));
    });
    return result;
}

nameInput.addEventListener('keyup', validation)
phoneInput.addEventListener('keyup', validation)
emailInput.addEventListener('keyup', validation)
adressOrCommentInput.addEventListener('keyup', validation)

minusBtns.forEach((minusBtn, idx) => {
    let itemCounter = itemsCounter[idx];
    let costForOneItem = costForOneItems[idx];
    let finalCost = finalCosts[idx];
    minusBtn.addEventListener('click', () => {
        let counter = itemCounter.textContent;
        if (+counter > 1) {
            itemCounter.textContent = `${--counter}`;
        }
        const price = costForOneItem.textContent.replace(',', '.');
        let result = Number(price) * counter;
        if (!(result.toString().includes('.'))) {
            result = `${result},0`
        } else {
            result = result.toString().replace('.', ',')
        }
        finalCost.textContent = `${result}`;
        const finalCount = countFinalAmount();
        let finalPrice = countFinalPrice();

        finalOrderPriceTablet.textContent = `${finalPrice}`;
        finalOrderPriceDesktop.textContent = `${finalPrice}`;
        checkAccessForMail(finalCount);
        finalOrderAmountTablet.textContent = `${finalCount}`;
        finalOrderAmountDesktop.textContent = `${finalCount}`;
    })
})

plusBtns.forEach((plusBtn, idx) => {
    let itemCounter = itemsCounter[idx];
    let costForOneItem = costForOneItems[idx];
    let finalCost = finalCosts[idx];
    plusBtn.addEventListener('click', () => {
        let counter = itemCounter.textContent;
        itemCounter.textContent = `${++counter}`;
        const price = costForOneItem.textContent.replace(',', '.');
        let result = Number(price) * counter;
        if (!(result.toString().includes('.'))) {
            result = `${result},0`
        } else {
            result = result.toString().replace('.', ',')
        }
        finalCost.textContent = `${result}`;
        const finalCount = countFinalAmount();
        finalOrderAmountTablet.textContent = `${finalCount}`;
        finalOrderAmountDesktop.textContent = `${finalCount}`;
        checkAccessForMail(finalCount);
        let finalPrice = countFinalPrice();
        finalOrderPriceTablet.textContent = `${finalPrice}`;
        finalOrderPriceDesktop.textContent = `${finalPrice}`;
    })
});
