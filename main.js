const input = require('prompt-sync')();

const heroi = input("Digite o nome do herói: ");
const xp = parseInt(input("Digite a quantidade de XP do herói: "));

let rank;

if (xp > 10000){
  rank = "Radiante";
} else if (xp > 9000){
  rank = "Imortal";
} else if (xp > 8000){
  rank = "Ascendente";
} else if (xp > 7000){
  rank = "Platina";
} else if (xp > 5000){
  rank = "Ouro";
} else if (xp > 2000){
  rank = "Prata";
} else if (xp > 1000){
  rank = "Bronze";
} else {
  rank = "Ferro";
}

console.log(`O Herói de nome ${heroi} está no nível de ${rank}`);