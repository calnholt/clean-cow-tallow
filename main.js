function main() {
    window.addEventListener('scroll', function () {
        const header = document.getElementsByClassName('logo')[0];
        if (window.scrollY > 220) {
            header.classList.add('shrink');
        } else {
            header.classList.remove('shrink');
        }
    });
}

function goToInstagram() {
    window.open('https://www.instagram.com/cleancowtallow?igsh=cXZiMjMxb2p0MTc%3D&utm_source=qr', '_blank').focus();
}
function goToEtsy() {
    window.open('http://cleancowtallow.etsy.com/', '_blank').focus();
}
function goToFacebook() {
    window.open('https://www.facebook.com/profile.php?id=61562362583371', '_blank').focus();
}