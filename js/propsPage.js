const copyBtn = document.querySelector('.props__container__copy');
const text = document.querySelector('.props__container__info-text');
const blockWithProps = document.querySelector('.props');
const closedBtn = document.querySelector('.props__closed-btn');
const propsBtn = document.querySelector('.footer__catalog__props');
const successfulMessage = document.createElement('p');
let counter = 0;

propsBtn.addEventListener('click', () =>{
    blockWithProps.style.display = 'flex';
    document.body.style.overflow = 'hidden'
});

copyBtn.addEventListener('click', function copyText() {
    const el = document.createElement('textarea');
    el.value = text.innerHTML.replace(/(<([^>]+)>)/g,'');
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    if (counter === 0) {
        successfulMessage.textContent = 'Реквизиты скопированы, можно вставить в документ';
        document.querySelector('.props__container-for-btn').appendChild(successfulMessage);
    }
    counter++;
});

closedBtn.addEventListener('click', () =>{
    document.body.style.overflow = 'visible';
    blockWithProps.style.display = 'none';
    successfulMessage.remove();
    counter = 0;
});
