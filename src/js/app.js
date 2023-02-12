const obj = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};

export default function orderByProps(data, [key1, key2]) {
  const array = [];
  const array2 = [];
  for (const key in data) {
    if (key === key1 || key === key2) {
      array.push({ key, value: data[key] });
    }

    if (key !== key1 && key !== key2) {
      array2.push({ key, value: data[key] });
      array2.sort((a, b) => {
        if (a.key < b.key) {
          return -1;
        }
      });
    }
  }
  const keys = array.concat(array2);
  return keys;
}

const result = orderByProps(obj, ['name', 'level']);
