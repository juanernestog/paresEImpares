const isEvenOrOdd = function (n = 50) {
  let numberIs = '';
  let schema = '';
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      numberIs = `Soy Impar!`;
    } else if (i % 2 === 0) {
      numberIs = `Soy Par!`;
    } else {
    }
    schema = `${schema}<p>${i} ${numberIs}</p>`;
  }
  return schema;
};

module.exports = isEvenOrOdd;
