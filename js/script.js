// ** INIZIALIZZAZIONE CONSTANTI E VARIABILI **//
const btn = document.getElementById('fl_btn-header');
const boxSquare = document.querySelector('.box-square');
const msgStart = document.getElementById('msg-start');
const container = document.getElementById('container');
const listaRandom = [];
let squareNumber = '';
let gameLevel = '';


// // 1. Quando preme su Play faccio leggere il valore della select e faccio registrare il numero di quadrati da stampare
document.getElementById('fl_btn-header').addEventListener('click', function(){
  msgStart.className = 'hide';
  boxSquare.className = 'box-square';
  // boxSquare.remove();
  let valoreLetto = document.getElementById('select-livello').value;
  console.log(valoreLetto);

  if(valoreLetto == '1'){
    squareNumber = 100;
    gameLevel = 'crazy';
    for(let i = 1; i <= squareNumber; i++){
    squareGenerator (boxSquare, listaRandom, 1, squareNumber, gameLevel);
    }
  }
  else if(valoreLetto == '2'){
    squareNumber = 81;
    gameLevel = 'easy';
    for(let i = 1; i <= squareNumber; i++){
      squareGenerator (boxSquare, listaRandom, 1, squareNumber, gameLevel);
      }
  }
  else if(valoreLetto == '3'){
    squareNumber = 49;
    gameLevel = 'hard';
    for(let i = 1; i <= squareNumber; i++){
      squareGenerator (boxSquare, listaRandom, 1, squareNumber, gameLevel);
      }
  }
  console.log(squareNumber);





  });
  // -----------------------------------------------------



// document.getElementById('fl_btn-header').addEventListener('click', function(){
//   msgStart.className = 'hide';
//   boxSquare.classList.remove('hide');
//   let valoreLetto = document.getElementById('select-livello').value;
//   console.log(valoreLetto);
//   if(valoreLetto == '1'){
//     const sq = document.getElementsByClassName('square');
//     if(sq !== 0){
//       for( let i = 0; i < sq.length; i++){
//         sq[i].remove();
//       }
//     }
//     squareGenerator (100);
//     for( let i = 0; i < 100; i++){
//       sq[i].className = 'square crazy';
//     }
//   }else if(valoreLetto == '2'){
//     boxSquare.classList.remove('hide');
//     if(msgStart.className !== 'hide'){
//       const sq = document.getElementsByClassName('square');
//       for( let i = 0; i < sq.length; i++){
//         sq[i].className = 'square hide';
//       }
//       for( let i = 0; i < 81; i++){
//         sq[i].className = 'square easy';
//       }
//     }else{
//     msgStart.className = 'hide';
//     squareGenerator (81);
//     const sq = document.getElementsByClassName('square');
//     for( let i = 0; i < 100; i++){
//       sq[i].className = 'square easy';
//     }
//     }
//   }else if(valoreLetto == '3'){
//     msgStart.className = 'hide';
//     boxSquare.classList.remove('hide');
//     const sq = document.getElementsByClassName('square');
//     if(sq !== 0){
//       for( let i = 0; i < sq.length; i++){
//         sq[i].remove();
//       }
//     }
//     squareGenerator (49);
//     for( let i = 0; i < 49; i++){
//       sq[i].className = 'square hard';
//     }
//   }
// });





// **********FUNZIONI****************


// funzione per generare numero random
function numRandom (num1, num2){
  return Math.floor(Math.random() * (num2) - num1);
}

// funzione per sapere se un numero è pari o dispari
function pariODispari(num){
  if(num % 2) return 'odd';
  return 'even';
}

// funzione per verificare che il numero random non sia già stato estratto
function gererazioneUnivocaNumRandom(lista, num1, num2){
  let number = null; let valid = false;

  while(!valid){
    number = numRandom (num1, num2);
    if(!lista.includes(number)){
      valid = true;
      lista.push(number);
    }
  }
  return number;
}

// generatore di square
function squareGenerator (target, lista, num1, num2, level){
    const sq = document.createElement('div');
    const nR = gererazioneUnivocaNumRandom(lista, num1, num2);
    // controllo se il numero è pari o dispari
    const classes = ['square', pariODispari(nR), level];
    sq.innerHTML = `<span>${nR}</span>`;
    sq.classList.add(...classes);
    target.append(sq);
    return sq;
  }

