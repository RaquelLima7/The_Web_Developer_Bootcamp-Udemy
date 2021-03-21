const input = document.querySelector('input');
const h1 = document.querySelector('h1');

// input.addEventListener('change', function (e) {
//     console.log("CASKDJASKJHD")
// })

input.addEventListener('input', function (e) {
    h1.innerText = input.value;
})


// const input = document.querySelector('input');
// const h1 = document.querySelector('h1');

// input.addEventListener('input', () => {
//     h1.innerText = `Welcome, ${input.value}`;
//     if (input.value === "") {
//         h1.innerText = `Enter Your Username`;
//     }
// });