function openEnvelope() {
    document.querySelector(".letter").style.display = "block";
}

// Tạo QR code
var qrcode = new QRCode(document.getElementById("qrcode"), {
    text: window.location.href,
    width: 200,
    height: 200,
});
