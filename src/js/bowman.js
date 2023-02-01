import Charater from './Character';

export default class Bowman extends Charater {
  constructor(name, type = 'Bowman') {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}

const bowman = new Bowman('Ser', 'Bowman')
