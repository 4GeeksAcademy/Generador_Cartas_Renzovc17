import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

//Constantes
const palos = ["♦","♥","♠","♣"]
const num = [1,2,3,4,5,6,7,8,9,10,"J","Q","K"]


//Funciones

const randomValue = arr => {
  let randomNumber = Math.floor(Math.random()*arr.length)
  let randomValue = arr[randomNumber]
  return randomValue
}
const paloSeleccionado = randomValue(palos);

const newPalo = document.createElement('div')
newPalo.id = 'newPalo'
newPalo.innerHTML= paloSeleccionado
document.querySelector('.card').appendChild(newPalo);

const newNum = document.createElement('div')
newNum.id = 'newNum'
newNum.innerHTML= randomValue(num)
document.querySelector('.card').appendChild(newNum);

const newPaloInvertido = document.createElement('div')
newPaloInvertido.id = 'newPaloInv'
newPaloInvertido.innerHTML= paloSeleccionado
document.querySelector('.card').appendChild(newPaloInvertido);

//console.log(randomValue(palos))
//console.log(randomValue(num))

//Eventos

