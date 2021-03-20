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

// class list
const h2 = document.querySelector('h2')

// set a class
h2.setAttribute('purple') // now this attibutes has a class purple
h2.setAttribute('border') // if do it again, lost the class above

// to add classes 
h2.classList.add('puple') // this both of cases will still the classes, like pushing into the element
h2.classList.add('border')

h2.classList.remove('border') // can remove too


// iterate over li to toggle class
const li = document.querySelectorAll('li');

for (let i of li) {
    i.classList.toggle('highlight');
}

// .creatElement()

function addElement () {
    // create a new div element
    const newDiv = document.createElement("div");
  
    // and give it some content
    const newContent = document.createTextNode("Hi there and greetings!");
    // or div.append("Hi there and greetings!")
  
    // add the text node to the newly created div
    newDiv.appendChild(newContent);
  
    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
  }

  for (let i = 0; i < 100; i++) {
    const newButton = document.createElement("button");
    newButton.innerText ='Hey!';
    const container = document.querySelector("#container");
    container.appendChild(newButton);
  }