let qr_input = document.getElementById('qr-input');
let qr_btn = document.getElementById('qr-btn');
let qr_img = document.getElementById('qr-img');
let message = document.getElementById('message');

qr_btn.addEventListener('click', function () {
    let value = qr_input.value;
    if (!value) {
        alert("Please enter URL or text in field first!");
        return;
    }
    else {
        qr_img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}`;
        qr_img.alt = `QR code for ${value}`;
        qr_img.addEventListener('load', function () {
            message.style.display = 'block';
        });
        setTimeout(() => {
            message.style.display = 'none';
        }, 2000);
    }
})