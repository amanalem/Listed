// Boxes
let aBox = document.querySelector('#aBox')
let bBox = document.querySelector('#bBox')
let cBox = document.querySelector('#cBox')

// Box Buttons
let aButton = document.querySelector('#aShow')
let bButton = document.querySelector('#bShow')
let cButton = document.querySelector('#cShow')
let abcButton = document.querySelector('#abcShow')


// Button Behaviors
aButton.addEventListener('click', (e)=>{
    e.preventDefault();
    aBox.style.display = "inline";
    bBox.style.display = "none";
    cBox.style.display = "none";
})
bButton.addEventListener('click', (e)=>{
    e.preventDefault();
    aBox.style.display = "none";
    bBox.style.display = "inline";
    cBox.style.display = "none";
})
cButton.addEventListener('click', (e)=>{
    e.preventDefault();
    aBox.style.display = "none";
    bBox.style.display = "none";
    cBox.style.display = "inline";
})
abcButton.addEventListener('click', (e)=>{
    e.preventDefault();
    aBox.style.display = "inline";
    bBox.style.display = "inline";
    cBox.style.display = "inline";
})