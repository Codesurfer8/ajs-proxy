import Magician from '../magician';

test('creating an instance', () => {

    const magician = new Magician('Red', 'Magician');
    const expected = {
        name: 'Red',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40
    };
    
    expect(magician).toEqual(expected)
    
    })
    
    test('fidelity of character type input', () => {
       
    
        expect(() => {
            const magician = new Magician('Red', '');
        }).toThrow('Type not found')
    })
    
    test('number of characters in the name', () => {
        
        expect(() => {
            const magician = new Magician('Y', 'Bowman');
        }).toThrow('Name character must be > 2 and < 10 symbol')
    })