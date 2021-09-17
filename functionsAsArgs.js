const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

const combine2and3 = (f) => f(2, 3);

combine2and3(add);
combine2and3(subtract);

combine2and3((x, y) => x + y);
