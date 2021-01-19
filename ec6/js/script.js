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
