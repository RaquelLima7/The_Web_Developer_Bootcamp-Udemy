// NOT AT ALL IMPORTANT TO REMEMBER ANY OF THIS CODE!
const req = new XMLHttpRequest();

req.onload = function () {
    console.log("ALL DONE WITH REQUEST!!!")
    const data = JSON.parse(this.responseText);  // responseText returns the text what you're looking
    console.log(data.ticker.price); // price is exactly what want inside of text, is a tag
}

req.onerror = function () {
    console.log("ERROR!!!")
    console.log(this);
}

req.open('GET', 'https://api.cryptonator.com/api/ticker/btc-usd')
req.send();