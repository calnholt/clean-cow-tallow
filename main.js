const INSTAGRAM_URL = 'https://www.instagram.com/cleancowtallow?igsh=cXZiMjMxb2p0MTc%3D&utm_source=qr';
const ETSY_URL = 'http://cleancowtallow.etsy.com/';
const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61562362583371';

main = () => {
	setHeaderScrollEvent();
}

setHeaderScrollEvent = () => {
	window.addEventListener('scroll', () => {
		const header = document.getElementsByClassName('logo')[0];
		if (window.scrollY > 220) {
			header.classList.add('shrink');
		} else {
			header.classList.remove('shrink');
		}
	});
}

goToInstagram = () => {
	window.open(INSTAGRAM_URL, '_blank').focus();
}
goToEtsy = () => {
	window.open(ETSY_URL, '_blank').focus();
}
goToFacebook = () => {
	window.open(FACEBOOK_URL, '_blank').focus();
}
