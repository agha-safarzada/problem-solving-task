// function keepLetters(string) {
//     let onlyLetters = /[a-zA-z]/;
//     console.log(onlyLetters.test(string));
// }





function keepLetters(text) {

    changed = text.replace(/[^a-zA-Z0-9 ]/g, '');

    let str = '';

    for (let i = 0; i < changed.length; i++) {
        if (isNaN(changed[i])) {
            str += changed[i];
        }
    }

    console.log(str);

}
keepLetters('Give me $20');