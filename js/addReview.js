
const selectedFile = document.getElementById('btn-loader');
const downloadedFiles = document.getElementById('list');
const writeBtn = document.querySelector('.review__add-review-write-btn');
const filesForSend = [];
let counterOfPhotos = 0;

writeBtn.addEventListener('click', () => {
    document.querySelector('.full-table-for-review').style.display = 'flex';
    writeBtn.textContent = 'отправить'
});

selectedFile.addEventListener('change', (event) => {
    const fileList = event.target.files;
    filesForSend.push(fileList);
    const file = document.createElement('p');
    file.textContent = fileList[0].name;
    file.classList.add('loaded-files');
    downloadedFiles.appendChild(file);
    file.addEventListener('click', () => {
        file.parentNode.removeChild(file);
        filesForSend.splice(counter, 1);
        counter--;
    })
    counter++;
}, false)