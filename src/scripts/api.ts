const getUrl = 'https://api.britney.rest/?format=text';

const btnGenerate = document.getElementById('btn-generate');
btnGenerate.onclick = function sendQuoteRequest() {
    const xhttps = new XMLHttpRequest();
    xhttps.onload = function onResponseLoaded() {
        const headlineQuote = document.createElement('h2');
        headlineQuote.innerText = this.responseText;
        headlineQuote.classList.add('text-center');
        const divApi = document.getElementById('div-quote');

        if (divApi.childElementCount >= 3) {
            divApi.innerHTML = '';
        }
        divApi.append(headlineQuote); // todo replace instead of add
    };

    xhttps.open('GET', getUrl);
    xhttps.send();
};
