// function count(string) {
//     let count = {};
//     string.split('').forEach(function(symbol) {
//         if (count[symbol]) {
//             count[symbol]++
//         } else {
//             count[symbol] = 1;
//         }
//     });
//     return count;
// }
// console.log(count('Salamm adim Agadir'));

function partlyRev(text) {
    let reverse = '';
    text = text.split(' ');
    text.forEach(word => {
        if (word.length >= 5) {
            reverse = reverse + (word.split('').reverse().join('')) + " ";
        } else {
            reverse = reverse + word + " ";
        }
    });
    return reverse;

}
console.log(partlyRev('Seriously this is the last one'));