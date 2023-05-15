if ((document.documentElement.textContent || document.documentElement.innerText).indexOf('was not found on this server') >= 0)
{
	a = document.querySelectorAll("body > *")
	for (let i of a)
	{
		i.remove()
	}
	
	let tag = document.createElement("p");
	let text = document.createTextNode("Sorry this web page isn't indexed. :/");
	tag.appendChild(text);
	let element = document.querySelector("body");
	element.appendChild(tag);
}
else
{
	let a = document.querySelectorAll("[id*='google-cache-hdr']")

	for (let i of a)
	{
		i.remove()
	}
}