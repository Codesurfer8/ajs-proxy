import Charater from './Character';

export default class Daemon extends Charater {
  constructor(name, type = 'Daemon') {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}
