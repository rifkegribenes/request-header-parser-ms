// client-side js

document.addEventListener("DOMContentLoaded", () => {
  const Root_Url = window.location.href;
	const apiOutput = `{
    "ipaddress":"0.0.0.0",
    "language":"en-US",
    "software":"Macintosh; Intel Mac OS X 10_12_6"
  }`
	const apiLink = `<div class="card__url">${Root_Url}api/whoami</div><a target="_blank" href="${Root_Url}api/whoami" class="card__action">Try It</a>`;
	document.getElementById("api-link").innerHTML = apiLink;
	document.getElementById("api-output").innerHTML = apiOutput;
});

