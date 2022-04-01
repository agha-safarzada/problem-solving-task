function count(string) {
    let count = {};
    string.split('').forEach(function(symbol) {
        count[symbol] ? count[symbol]++ : count[symbol] = 1;
    });
    return count;
}
console.log(count('Salamm'))