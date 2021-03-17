console.log("HELLO!!!...")
setTimeout(() => {
    console.log("...are you still there?") // will print 3 seconds later
}, 3000)

console.log("GOODBYE!!") // this will print in te same time that console.log with hello


const id = setInterval(() => {  // have to set igual an id to pass it when want to stop
    console.log(Math.random())   // will repeat this function in each 2 seconds
}, 2000);

clearInterval(id); // to stop de setInterval