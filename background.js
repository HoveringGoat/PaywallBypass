async function openPage() {
	var currentPage = await browser.tabs.query({currentWindow: true, active: true})
		.then((tabs) => {return tabs[0].url});
  browser.tabs.create({
	url: "http://webcache.googleusercontent.com/search?q=cache:"+currentPage,
  });
}

browser.action.onClicked.addListener(openPage);
