if (matchDomain('webcache.googleusercontent.com')) {
	if ((document.documentElement.textContent || document.documentElement.innerText).includes('was not found on this server')) {
		const elements = document.querySelectorAll('body > *');
		for (const elem of elements) {
			elem.remove();
		}

		const tag = document.createElement('p');
		const text = document.createTextNode("Sorry, this web page isn't indexed. :/");
		tag.appendChild(text);

		const element = document.querySelector('body');
		element.appendChild(tag);
	} else {
		const elements = document.querySelectorAll("[id*='google-cache-hdr']");

		for (const elem of elements) {
			elem.remove();
		}
	}
}

function matchDomain(domains) {
	const hostname = window.location.hostname;

	if (typeof domains === 'string') {
		domains = [domains];
	}

	return domains.some((domain) => hostname === domain || hostname.endsWith(`.${domain}`));
}
