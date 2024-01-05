export const createArray = <T>(
  length: number,
  callback: (i: number) => T
): T[] => {
  return [...new Array(length)].map((_, i) => callback(i));
};
// export const createArray<T>(length: number, callback: () => T) {
//     return [...new Array(length)].map(callback)
// }
