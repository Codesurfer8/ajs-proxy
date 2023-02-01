import Swordsman from '../swordsman';

test('creating an instance', () => {
    const swordsman = new Swordsman('King', 'Swordsman');
    const expected = {
        name: 'King',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10
    }

    expect(swordsman).toEqual(expected);
})

test('fidelity of character type input', () => {
    expect(() => {
        const swordsman = new Swordsman('King', '')
    }).toThrow('Type not found')
})

test('number of characters in the name', () => {
    expect(() => {
        const swordsman = new Swordsman('K', 'Swordsman')
    }).toThrow('Name character must be > 2 and < 10 symbol')
})