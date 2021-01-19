const scuderia = [
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

let [biciclettaLeggera] = scuderia;

for (let i = 0; i < scuderia.length; i++) {
  if (scuderia[i].pesoKg < biciclettaLeggera.pesoKg) {
    biciclettaLeggera = scuderia[i]
  }
}

console.log(biciclettaLeggera);

alert(`La bicicletta che pesa meno è la ${biciclettaLeggera.nome} e pesa ${biciclettaLeggera.pesoKg} Kg`)
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
function numberRandomizer(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

const squadre = [
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

for (let i = 0; i < squadre.length; i++) {
  squadre[i].puntiFatti = numberRandomizer(1, 99);

  squadre[i].falliSubiti = numberRandomizer(1, 99);
}

console.log(squadre)

const squadreSenzaPunti = [];

for (let i = 0; i < squadre.length; i++) {
  let {nome, falliSubiti} = squadre[i]
  
  squadreSenzaPunti.push({
    nome,
    falliSubiti
  })
}

console.log(squadreSenzaPunti);
