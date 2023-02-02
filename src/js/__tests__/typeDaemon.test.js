import Daemon from '../daemon';

test('creating an instance', () => {
  const daemon = new Daemon('Kratos', 'Daemon');
  const expected = {
    name: 'Kratos',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  expect(daemon).toEqual(expected);
});

test('fidelity of character type input', () => {
  expect(() => {
    const daemon = new Daemon('Kratos', '');
  }).toThrow('Type not found');
});

test('number of characters in the name', () => {
  expect(() => {
    const daemon = new Daemon('K', 'Daemon');
  }).toThrow('Name character must be > 2 and < 10 symbol');
});
