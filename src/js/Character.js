export default class Charater {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Name character must be > 2 and < 10 symbol');
    }

    const dataTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (dataTypes.includes(name) === false) {
      throw new Error('Type not found');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }
}