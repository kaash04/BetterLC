const button = document.createElement("div");
button.className = "floating-button";
const img = document.createElement("img");
(img.src = chrome.runtime.getURL("icon.png")), (img.className = "button-image");
const tooltip = document.createElement("div");
(tooltip.className = "tooltip"),
  button.appendChild(img),
  button.appendChild(tooltip),
  document.body.appendChild(button);
const currentUrl = window.location.href,
  baseUrl = currentUrl.match(/https:\/\/leetcode\.com\/problems\/[^\/]+\//)[0];
fetch(chrome.runtime.getURL("data.json"))
  .then((t) => t.json())
  .then((t) => {
    const e = t.find((t) => t.url === baseUrl),
      o = e ? e.companies : ["Data Unavailable"];
    o.forEach((t) => {
      const e = document.createElement("div");
      (e.className = "company"), (e.textContent = t), tooltip.appendChild(e);
    });
  })
  .catch((t) => console.error("Error fetching JSON:", t));
