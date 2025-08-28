'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.health = 100;
    this.name = name;

    // Додати екземпляр до списукживих тварин
    Animal.alive.push(this);
  }

  // Видаляє тварину зі списку коли та помирає
  die() {
    Animal.alive = Animal.alive.filter((a) => a !== this);
  }
}

class Herbivore extends Animal {
  constructor(name, hidden = false) {
    super(name);

    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(target) {
    // Працює тільки якщо цшіль є травоїдною і не схованою
    if (!(target instanceof Herbivore)) {
      return;
    }

    if (target.hidden) {
      return;
    }

    target.health -= 50;

    if (target.health <= 0) {
      target.die();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
