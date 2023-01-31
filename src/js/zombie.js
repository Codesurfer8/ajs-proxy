import Charater from './Character';

export default class Zombie extends Charater {
  constructor(name, type = 'Zombie') {
    super(name, type);
    this.attack = 40;
    this.defence = 10;
  }
}
