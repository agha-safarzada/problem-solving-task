function count(string) {
    let count = {};
    string.split('').forEach(function(symbol) {
        if (count[symbol]) {
            count[symbol]++
        } else {
            count[symbol] = 1;
        }
    });
    return count;
}
console.log(count('Salamm'))