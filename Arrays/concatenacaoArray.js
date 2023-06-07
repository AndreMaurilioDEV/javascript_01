// POR CONCAT
const a1 = [1,2,3];
const a2 = [4,5,6];
const a3 = a1.concat(a2, [7,8,9], 'André');
console.log(a3);

// POR SPREAD - ... pega os valores do array

const a4 = [...a1, 'André', ...a2 , ...[7,8,9]];
console.log(a4);