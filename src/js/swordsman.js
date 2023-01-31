import Charater from './Character';

export default class Swordsman extends Charater {
  constructor(name, type = 'Swordsman') {
    super(name, type);
    this.attack = 40;
    this.defence = 10;
  }
}
