let body = document.querySelector('body')
body.insertAdjacentHTML('afterbegin')
let mainHeading = document.querySelector('h1') 
let changeBTN = document.querySelector('button') 
mainHeading.style.color = 'green' 
function changeColor () {
    let red = Math.round(Math.random()*255)
    console.log(red)
    mainHeading.style.color = `rgb(${red}),34,128)`
}  