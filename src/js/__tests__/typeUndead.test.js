import Undead from '../undead';

test('creating an instance', () => {
    const undead = new Undead('Dead', 'Undead');
    const expected = {
        name: 'Dead',
        type: 'Undead',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25
    }

    expect(undead).toEqual(expected);
})

test('fidelity of character type input', () => {
    expect(() => {
        const undead = new Undead('Dead', '')
    }).toThrow('Type not found')
})

test('number of characters in the name', () => {
    expect(() => {
        const undead = new Undead('K', 'Undead')
    }).toThrow('Name character must be > 2 and < 10 symbol')
})