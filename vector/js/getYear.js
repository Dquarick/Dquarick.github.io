var yearVal = new Date().getFullYear();
var yearEl = document.getElementById('year');
var yearTxt = document.createTextNode(yearVal);
yearEl.appendChild(yearTxt);
