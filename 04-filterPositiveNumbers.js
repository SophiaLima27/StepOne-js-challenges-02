// Filtre o array. Crie uma função chamada filterArray que recebe um Array 
// de números como parâmetro de entrada. Essa função deve eliminar 
// todos os números negativos e devolver o array apenas com valores 0 
// e/ou números positivos.

// Exemplo:
// [1, -2, 0, 5, 8, -3] -> [1, 0, 5, 8]

const exampleArray = [23, 14, 5, 300, 2];

function averageArray(array) {
    let sum = 0;

    for (const number of array) {
        sum += number;
    }

    return sum / exampleArray.length;
}


filterPositiveNumbers([1, -2, 0, 5, 8, -3]);










// ________________________ TEST ________________________
console.log('TEST:')
function compareArrays(a, b) {
    return a.length === b.length && a.every((value, index) => value === b[index]);
}
if (compareArrays(filterPositiveNumbers([1, -2, 0, 5, 8, -3]), [1, 0, 5, 8])) {
    console.log("✅ passed");
} else {
    console.log("❌ failed");
}
// ________________________ TEST ________________________
