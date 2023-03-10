import orderByProps from '../app';

test('testing the sorting function', () => {
  const data = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };

  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];

  expect(orderByProps(data, ['name', 'level'])).toEqual(expected);
});

test('testing the sorting function', () => {
  const data2 = {
    id: 100,
  };

  const data = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };

  Object.setPrototypeOf(data, data2);
  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];

  expect(orderByProps(data, ['name', 'level'])).toEqual(expected);
});
