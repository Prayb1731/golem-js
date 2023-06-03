# golem-js
class Golem {
  constructor(name, power) {
    this.name = name;
    this.power = power;
    this.health = 100;
  }

  attack(target) {
    const damage = Math.floor(Math.random() * this.power) + 1;
    target.health -= damage;
    console.log(`${this.name} нанес удар по ${target.name} и нанес ${damage} урона!`);
    if (target.health <= 0) {
      console.log(`${target.name} побежден!`);
    } else {
      console.log(`${target.name} имеет ${target.health} здоровья.`);
    }
  }
}

const golem1 = new Golem("Голем 1", 10);
const golem2 = new Golem("Голем 2", 12);

golem1.attack(golem2);
golem2.attack(golem1);
