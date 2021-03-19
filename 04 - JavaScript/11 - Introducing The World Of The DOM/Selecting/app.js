const allImages = document.getElementsByTagName('img');

for (let img of allImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
}


const squareImages = document.getElementsByClassName('square');

for (let img of squareImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
}


// .querySelector  - just return the first element

// Select by type
// document.querySelector('a[title="Java"]') // it will return the link tag that title is Java

const links = document.querySelectorAll('p a');

for (let link of links) {
    console.log(link.href)
}