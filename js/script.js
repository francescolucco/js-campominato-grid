// ** INIZIALIZZAZIONE CONSTANTI E VARIABILI **//
const btn = document.getElementById('fl_btn-header');
const container = document.getElementById('container');
let squareNumber = '';
let gameLevel = '';


// // 1. Quando preme su Play faccio leggere il valore della select e faccio registrare il numero di quadrati da stampare
document.getElementById('fl_btn-header').addEventListener('click', function(){
  
  container.innerHTML = '';
  const boxSquare = document.createElement('div');
  boxSquare.className = 'box-square';
  container.append(boxSquare);
  
  let valoreLetto = document.getElementById('select-livello').value;
  console.log(valoreLetto);
  
  
  if(valoreLetto == '1'){
    squareNumber = 100;
    gameLevel = 'crazy';
    for(let i = 1; i <= squareNumber; i++){
      squareGenerator (boxSquare, gameLevel);
    }
    const sq = document.getElementsByClassName('square');
    for(let i = 1; i <= sq.length; i++){
      let cella = sq[i-1];
      cella.innerHTML = `<span>${i}</span>`;
      console.log(sq[i]);
      cella.addEventListener('click', function(){
        cella.classList.add('clicked');
      })
    }
  }else if(valoreLetto == '2'){
    squareNumber = 81;
    gameLevel = 'easy';
    for(let i = 1; i <= squareNumber; i++){
      squareGenerator (boxSquare, gameLevel);
    }
    const sq = document.getElementsByClassName('square');
    for(let i = 1; i <= sq.length; i++){
      let cella = sq[i-1];
      cella.innerHTML = `<span>${i}</span>`;
      console.log(sq[i]);
      cella.addEventListener('click', function(){
        cella.classList.add('clicked');
      })
    }
  }
  else if(valoreLetto == '3'){
    squareNumber = 49;
    gameLevel = 'hard';
    for(let i = 1; i <= squareNumber; i++){
      squareGenerator (boxSquare, gameLevel);
    }
    const sq = document.getElementsByClassName('square');
    for(let i = 1; i <= sq.length; i++){
      let cella = sq[i-1];
      cella.innerHTML = `<span>${i}</span>`;
      console.log(sq[i]);
      cella.addEventListener('click', function(){
        cella.classList.add('clicked');
      })
    }
  }
  console.log(squareNumber);
  });


// generatore di square
function squareGenerator (target, level){
    const sq = document.createElement('div');
    // const nR = gererazioneUnivocaNumRandom(lista, num1, num2);
    // controllo se il numero è pari o dispari
    const classes = ['square', level];
    // sq.innerHTML = `<span>${nR}</span>`;
    sq.classList.add(...classes);
    target.append(sq);
    return sq;
  }
