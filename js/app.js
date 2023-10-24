// CART-1 START
let decrementBtn = document.querySelector('.decrement')
let incrementBtn = document.querySelector('.increment')
let result = document.querySelector('.result')

function incrementing (){
    result.value= Number (result.value) +1;
}
incrementBtn.addEventListener('click', incrementing)

decrementBtn.addEventListener('click', () => {
    if(result.value>1){
        result.value= Number(result.value) -1;
    }
})
// CART-1 ENDS

// CART-2 START
let slider = document.querySelector('.slider')
let output = document.querySelector('.output')
slider.addEventListener('input', () => {
    output.innerHTML= slider.value
})
// CART-2 ENDS

// CART-3 START
let userPass = document.querySelector('.userPass')
let passBtn = document.querySelector('.passBtn')
passBtn.addEventListener('click', () => {
    if(userPass.type =='password'){
        userPass.type= 'text';
        passBtn.innerHTML = '<i class="bi bi-eye"></i>';

    } else{
        userPass.type= 'password';
        passBtn.innerHTML= '<i class="bi bi-eye-slash"></i>';
    }
})
// CART-3 ENDS

// RANDOM BUTTON START
let randomBtn = document.querySelector(".randomBtn");
let colorize = document.querySelector("#card-section");

randomBtn.addEventListener("click", () => {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);

  colorize.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});
// RANDOM BUTTON ENDS
