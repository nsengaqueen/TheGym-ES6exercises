removeDuplicates = (product) => {
  let unique = new Set(product);
  return [...unique];
};

console.log(removeDuplicates([1, 2, 3, 4]));
