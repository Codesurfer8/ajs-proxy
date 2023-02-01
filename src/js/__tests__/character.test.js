import Character from '../Character';

test('fidelity of character type input', () => {
  expect(() => {
    const character = new Character('Sergion', '');
  }).toThrow('Type not found');
});

test('number of characters in the name', () => {
  expect(() => {
    const character = new Character('S', 'Bowman');
  }).toThrow('Name character must be > 2 and < 10 symbol');
});


test('test of method - levelUp, when health = 0', () => {
  const ch = new Character('Bull', 'Bowman');
  ch.health = 0;
  expect(() => { ch.levelUp(); }).toThrow('it is impossible to raise the level of the deceased');
});