import Bowman from '../bowman';

test('creating an instance', () => {
  const bowman = new Bowman('Jed', 'Bowman');
  const expected = {
    name: 'Jed',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(bowman).toEqual(expected);
});

test('creating an instance without type', () => {
  const bowman = new Bowman('Jed');
  const expected = {
    name: 'Jed',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(bowman).toEqual(expected);
});

test('fidelity of character type input', () => {
  expect(() => { const bowman = new Bowman('Jed', ''); }).toThrow('Type not found');
});

test('number of characters in the name', () => {
  expect(() => {
    const bowman = new Bowman('Y', 'Bowman');
  }).toThrow('Name character must be > 2 and < 10 symbol');
});

describe('testing class methods', () => {
  test('test of character level up', () => {
    const bowman = new Bowman('Bull', 'Bowman');
    bowman.levelUp();

    const chTest = {
      name: 'Bull',
      type: 'Bowman',
      health: 100,
      level: 2,
      attack: 30,
      defence: 30,
    };
    expect(chTest).toEqual(bowman);
  });

  test('test of character  damage, when health >= 0', () => {
    const bowman = new Bowman('Bull', 'Bowman');
    bowman.damage(10);
    const expected = {
      name: 'Bull',
      type: 'Bowman',
      health: 92.5,
      level: 1,
      attack: 25,
      defence: 25,
    };

    expect(bowman).toEqual(expected);
  });

  test('test of character  damage, when health < 0', () => {
    const bowman = new Bowman('Bull', 'Bowman');
    bowman.health = -10;

    expect(() => { bowman.damage(10); }).toThrow('character is dead');
  });
});
