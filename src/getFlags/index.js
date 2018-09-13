/**
 * @param {Array<Object>} arr - this is an array of objects
 * @return {Array} result of the sum value.
 * @example
 * const arr = [{flags: [1, 2, 3]}, {flags: [4, 5, 6]}];
 * getFlags(arr); // [1, 2, 3, 4, 5, 6]
 */
const getFlags = arr => {
  let arrr = [];
  for (i = 0; i < arr.length; i++) {
    let flagarr = arr[i].flags;
    for (g = 0; g < flagarr.length; g++) {
      arrr.push(flagarr[g])
    }
  }

  arr[0].flags;
  return arrr;
};

export default getFlags;
