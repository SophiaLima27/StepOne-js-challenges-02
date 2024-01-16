// Ordenação. Faça uma função que ordene o array de forma crescente, 
// ou seja, do menor para o maior número.
// Esse desafio foi dado em um code challenge para entrevista de emprego! :)

const exampleArray = [-2, 0, 5, 9, 120, -60];

function smallestNumber(array) {
    let smallestNumber = o;
    for (let i=o; i<array.length; i++) {
        if (smallestNumber < array[i]) {
            smallestNumber = smallestNumber;
        } else {
            smallestNumber = array [i];
        }
    }
    return smallestNumber
}





// ________________________ TEST ________________________
console.log('TESTS:')
function compareArrays(a, b) {
    return a.length === b.length && a.every((value, index) => value === b[index]);
}
if(compareArrays(sort(exampleArray), exampleArray.sort())) {
    console.log("✅ passed");
} else {
    console.log("❌ failed");
}
// ________________________ TEST ________________________
