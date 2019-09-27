var bonhomme = {
  age: 15,
  prenom: 'Michael',
  type: 'person',
  address: {
    rue: 'Simplon 18',
    npa: '1004',
    city: 'Sion'
  },
  isPerson: true,
  getAge: function () {
    console.log(this.age);
  },
  isMajeur: function (ageLimite) {
    var ageTest = ageLimite || 18;
    if (this.age >= ageTest) {
      console.log(this.prenom + ' est majeur')
    } else {
      console.log(this.prenom + ' est pas majeur')
    }
  },
  getAddress: function () {
    var adresseComplete = [
      this.address.rue,
      this.address.npa,
      this.address.city
    ];
    console.log(adresseComplete.join('-'));
  }
};

// -> Simplon 18 - 1004 Sion

var test = [
  'info',
  14,
  true,
  'marc'
];

var age = prompt('Quel âge avez-vous ?');
alert('vous avez ' + age + 'ans');




