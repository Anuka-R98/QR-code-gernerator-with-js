const form = document.getElementById('generate-form');
const qr = document.getElementById('qr-code');

const onGenerateSubmit = (e) => {
    e.preventDefault();
     
    clearUi();
    
    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;
    
    // console.log(url, size);
    
    if(url == '') {
        alert('Please ennter URL !');
    } else {
        showSpinner();

        setTimeout(() => {

            hideSpinner();
            generateQRCode(url, size);

            setTimeout(() => {
                const saveUrl = qr.querySelector('img').src;
                createSaveBtn(saveUrl);
                
            }, 50);

        }, 1000);
    }
};

const generateQRCode = (url, size) => {

    const qrcode = new QRCode ('qr-code', {
        text: url,
        height: size,
        width: size,
    });
} 

const showSpinner = () => document.getElementById('spinner').style.display = 'block';
const hideSpinner = () => document.getElementById('spinner').style.display = 'none';

const clearUi = () => {
    qr.innerHTML = '';
    const saveLink = document.getElementById('save-link');
    
    if(saveLink) saveLink.remove();
}

const createSaveBtn = (saveUrl) => {
    const link = document.createElement('a');
    link.id = 'save-link';
    link.classList = 'bg-red-500 text-white font-bold py-2 rounded w-1/3 m-auto my-s5';
    link.href = saveUrl;
    link.download = 'qr-code';
    link.innerHTML = 'Save Image';
    document.getElementById('generated').appendChild(link);
}

hideSpinner();

form = addEventListener('submit', onGenerateSubmit);