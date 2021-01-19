var scuderia = [
  {
    'nome' : 'Bicicletta',
    'pesoKg' : 40
  },

  {
    'nome' : 'Bckletta',
    'pesoKg' : 30
  },

  {
    'nome' : 'Pino',
    'pesoKg' : 18
  },

  {
    'nome' : 'Dario',
    'pesoKg' : 20
  },

  {
    'nome' : 'Jeremy',
    'pesoKg' : 16
  },

  {
    'nome' : 'Salvo',
    'pesoKg' : 45
  }
]

console.log(scuderia);

// Come ho fatto al primo colpo ------------------------------------------------
// var massa = 9999;
//
// for (var i = 0; i < scuderia.length; i++) {
//   for (var key in scuderia[i]) {
//     if (key === 'pesoKg') {
//       if (scuderia[i][key] < massa) {
//         massa = scuderia[i][key]
//       }
//     }
//   }
// }
//
// console.log('ok');
//
// for (var i = 0; i < scuderia.length; i++) {
//   if (scuderia[i].pesoKg === massa) {
//     alert(scuderia[i].nome + ' è la bicicletta che pesa meno')
//   }
// }
//
// console.log('ok');
// -----------------------------------------------------------------------------

var biciLeggera = scuderia[0];

for (var i = 0; i < scuderia.length; i++) {
  if (scuderia[i].pesoKg < biciLeggera.pesoKg) {
    biciLeggera = scuderia[i]
  }
}

alert(biciLeggera.nome + ' è la bicicletta che pesa meno')

console.log(biciLeggera);



// -----------------------------------------------------------------------------
function numberRandomizer(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

var squadre = [
  {
    'nome' : 'Inter',
    'puntiFatti' : 0,
    'falliSubiti' : 0
  },

  {
    'nome' : 'Milan',
    'puntiFatti' : 0,
    'falliSubiti' : 0
  },

  {
    'nome' : 'Juventus',
    'puntiFatti' : 0,
    'falliSubiti' : 0
  },

  {
    'nome' : 'Vicenza',
    'puntiFatti' : 0,
    'falliSubiti' : 0
  }
];

for (var i = 0; i < squadre.length; i++) {
  squadre[i].puntiFatti = numberRandomizer(1, 99);

  squadre[i].falliSubiti = numberRandomizer(1, 99);
}

console.log(squadre)

var squadreSenzaFalli = [];

for (var i = 0; i < squadre.length; i++) {
  squadreSenzaFalli.push({
    'nome' : squadre[i].nome,
    'puntiFatti' : squadre[i].puntiFatti
  })
}

console.log(squadreSenzaFalli);
