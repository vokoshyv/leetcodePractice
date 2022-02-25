/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = (n) => {
  const visited = new Set();

  const transform = (current) => {
    if (current === 1) {
      return true;
    }
    if (visited.has(current)) {
      return false;
    }

    visited.add(current);

    const str = current.toString();
    let next = 0;

    for (let i = 0; i < str.length; i++) {
      next += (parseInt(str[i]) * parseInt(str[i]));
    }

    return transform(next);
  };

  return transform(n);
};

console.log(isHappy(84));
