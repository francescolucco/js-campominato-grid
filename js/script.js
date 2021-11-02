// 1. L'utente indica un livello di difficoltà
const levelCrazy = document.getElementById('crazy');
const levelEasy = document.getElementById('easy');
const levelHard = document.getElementById('hard');
const levelGame = '';

levelCrazy.addEventListener('click', function(){
  const levelGame = 100;
  console.log(levelGame);
});
levelEasy.addEventListener('click', function(){
  const levelGame = 81;
  console.log(levelGame);
});
levelHard.addEventListener('click', function(){
  const levelGame = 49;
  console.log(levelGame);
});




// 2. Quando preme su Play faccio creare da java una serie di quadrati all'interno del box

const btn = document.getElementById('fl_btn-header');
const boxSquare = document.getElementById('box-square');


