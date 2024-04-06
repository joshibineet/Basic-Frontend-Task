function shortenURL() {
    const longUrl = document.getElementById('longUrl').value;
    const customSlug = document.getElementById('customSlug').value;

    setTimeout(() => {
        const shortenedUrl = `http://short.url/${customSlug || 'abcd1234'}`;

        document.getElementById('resultLongUrl').textContent += longUrl;
        document.getElementById('resultShortUrl').textContent += shortenedUrl;
        generateQRCode(shortenedUrl);

        document.getElementById('screen1').style.display = 'none';
        document.getElementById('screen2').style.display = 'block';
    }, 1500); 
}

function generateQRCode(url) {
    const qrCodeImageUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(url)}&size=150x150`;
    document.getElementById('qrCode').innerHTML = `<img src="${qrCodeImageUrl}" alt="QR Code for ${url}">`;
}

function enterNewUrl() {
    document.getElementById('longUrl').value = '';
    document.getElementById('customSlug').value = '';
    document.getElementById('resultLongUrl').textContent = 'Long URL: ';
    document.getElementById('resultShortUrl').textContent = 'Shortened URL: ';
    document.getElementById('qrCode').innerHTML = '';

    document.getElementById('screen1').style.display = 'block';
    document.getElementById('screen2').style.display = 'none';
}
