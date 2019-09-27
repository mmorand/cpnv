var maVar = 12;
var autreVar = 10;
var total;

var integerVar = 12;
var floatVar = 12.3;
var stringVar = 'toto';
var boolVar = true;
var arrayVar = [];
var objectVar = {};

//console.log(total);

//console.log('Hello !');
//console.log(maVar + autreVar);

total = maVar + autreVar;

//console.log(toto);

total = total + 1;
total++;

//console.log('calcul: ' + '11' + 1);
//console.log('abc' + 'def');

//alert(total);

function carre(a) {
  return a * a;
}

var toto = carre(3);
var aire = 0;


function calculAire(a) {
  aire = 2 * a;
}

//calculAire(8);

//console.log(aire)

var tableau = [
  {npa: 16, prenom: 'Jow'},
  {npa: 31, prenom: 'Bill'},
  {npa: 12, prenom: 'Marc'},
  {npa: 77, prenom: 'Henry'},
  {npa: 41, prenom: 'José'}
];

for (var index = 0; index < tableau.length; index++) {
  var humain = tableau[index];
  console.log(humain.prenom + ' a ' + humain.npa + 'ans');
}





