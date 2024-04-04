function shortenURL() {
    const longUrl = document.getElementById('longUrl').value;
    const customSlug = document.getElementById('customSlug').value;

    // Simulating an API call with a delay
    setTimeout(() => {
        // Dummy shortened URL result
        const shortenedUrl = `http://short.url/${customSlug || 'abcd1234'}`;

        // Display the results in the second screen
        document.getElementById('resultLongUrl').textContent += longUrl;
        document.getElementById('resultShortUrl').textContent += shortenedUrl;
        generateQRCode(shortenedUrl);

        // Hide the first screen and show the second
        document.getElementById('screen1').style.display = 'none';
        document.getElementById('screen2').style.display = 'block';
    }, 1500); // Simulate a network call with 1.5 seconds delay
}

function generateQRCode(url) {
    // Dummy QR Code generation
    const qrCodeImageUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(url)}&size=150x150`;
    document.getElementById('qrCode').innerHTML = `<img src="${qrCodeImageUrl}" alt="QR Code for ${url}">`;
}

function enterNewUrl() {
    // Clear the input fields and results
    document.getElementById('longUrl').value = '';
    document.getElementById('customSlug').value = '';
    document.getElementById('resultLongUrl').textContent = 'Long URL: ';
    document.getElementById('resultShortUrl').textContent = 'Shortened URL: ';
    document.getElementById('qrCode').innerHTML = '';

    // Show the first screen and hide the second
    document.getElementById('screen1').style.display = 'block';
    document.getElementById('screen2').style.display = 'none';
}
