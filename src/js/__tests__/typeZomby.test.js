import Zombie from '../zombie';

test('creating an instance', () => {
  const zombie = new Zombie('Doctor', 'Zombie');
  const expected = {
        name: 'Doctor',
        type: 'Zombie',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10
    }

    expect(zombie).toEqual(expected);
})

test('fidelity of character type input', () => {
    expect(() => {
        const zombie = new Zombie('Doctor', '');
    }).toThrow('Type not found')
});

test('number of characters in the name', () => {
  expect(() => {
    const zombie = new Zombie('D', 'Zombie');
  }).toThrow('Name character must be > 2 and < 10 symbol');
});