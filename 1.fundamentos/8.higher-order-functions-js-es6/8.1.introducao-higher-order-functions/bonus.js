const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// ------------------------------------------------------------------------------ PARTE I

// Exercicio 1~ Crie uma função que retorna o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).
const dragonDamage = (object) => Math.round(Math.random() * (object.strength - 15) + 15);

// Exercicio 2~ Crie uma função que retorna o dano causado pelo warrior.
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).
const warriorDamage = (object) => Math.round(Math.random() * ((object.strength*object.weaponDmg) - object.strength) + object.strength);

// Exercicio 3~ Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.
const mageDamage = (object) => {
  if (object.mana < 15) {
    throw new Error('Não possui mana suficiente');
  }
  return {
    usedMana: 15,
    spellDamage: Math.round(Math.random() * ((object.intelligence * 2) - object.intelligence) + object.intelligence),
  }
};

// ------------------------------------------------------------------------------ PARTE II

// Exercicio 1~
// Crie a primeira HOF que compõe o objeto gameActions. Ela será a função que simula o turno do personagem warrior. Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon. Além disto ela também deve atualizar o valor da chave damage do warrior.

// Exercicio 2~
// Crie a segunda HOF que compõe o objeto gameActions . Ela será a função que simula o turno do personagem mage . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem mage e atualizará os healthPoints do monstro dragon . Além disto ela também deve atualizar o valor das chaves damage e mana do mage.


// Exercicio 3~
// Crie a terceira HOF que compõe o objeto gameActions . Ela será a função que simula o turno do monstro dragon . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo monstro dragon e atualizará os healthPoints dos personagens mage e warrior . Além disto ela também deve atualizar o valor da chave damage do monstro.

// Exercicio 4~
// Adicione ao objeto gameActions uma função que retorne o objeto battleMembers atualizado e faça um console.log para visualizar o resultado final do turno.

const gameActions = {
  playersStats: () => battleMembers,
  magePlays: (callback, attacker, attacked) => {
    const damageDealt = callback(attacker);
    attacker.damage = damageDealt.spellDamage;
    attacker.mana -= damageDealt.usedMana;
    attacked.healthPoints -= attacker.damage;
  },
  warriorPlays: (callback, attacker, attacked) => {
    const damageDealt = callback(attacker);
    attacker.damage = damageDealt;
    attacked.healthPoints -= damageDealt;
  },
  dragonPlays: (callback, attacker, attacked, attackedToo) => {
    const damageDealt = callback(attacker);
    attacker.damage = damageDealt;
    attacked.healthPoints -= damageDealt;
    attackedToo.healthPoints -= damageDealt;
  },
}

console.log(gameActions.playersStats());
gameActions.warriorPlays(warriorDamage, warrior, dragon);
console.log(gameActions.playersStats());
gameActions.dragonPlays(dragonDamage, dragon, warrior, mage);
console.log(gameActions.playersStats());
gameActions.magePlays(mageDamage, mage, dragon);
console.log(gameActions.playersStats());