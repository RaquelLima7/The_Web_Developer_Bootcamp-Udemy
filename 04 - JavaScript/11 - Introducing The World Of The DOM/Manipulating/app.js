const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'    // .innerText returns the text that is inside of element
// }
// .textContent // returns the same as .innerText but with spaces, showing every pieces inside of code just not only the text.
// .innerHTML // returns all text with marks, every code, pure html from the page
// document.querySelector('h1').innerHTML += '<sup>agsgha</sup>';  // will add inside code  

const firstLink = document.querySelector('a');
firstLink.href
firstLink.getAttribute('href') // when you use this it takes directly from the HTML. Takes the text between ""
firstLink.getAttribute('href', 'http://www.google.com.br') // the second argument will modify the href

document.querySelector("#egg").setAttribute("src", "https://www.flaticon.com/svg/static/icons/svg/3523/3523063.svg");
document.querySelector("#egg").alt = "chicken";

h1.style.border = '1'

for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
}

window.getComputedStyle(h1).color; // you can type which element you prefer to find out 

const container = document.querySelector('#container');
const image = document.querySelector('img');
container.style.textAlign = 'center';
image.style.width = '150px';
image.style.borderRadius = '50%';