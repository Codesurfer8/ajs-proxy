import Charater from './Character';

export default class Undead extends Charater {
  constructor(name, type = 'Undead') {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}
