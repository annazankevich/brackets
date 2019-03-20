module.exports = function check(str, bracketsConfig) {
    // your solution
    let array = str.split('');
    let brackets = bracketsConfig;
    let i = 0;
    while (i < array.length) {
        let isBroke = false;
        for (let j = 0; j < brackets.length; j++) {
            if (array[i] === brackets[j][0] && array[i + 1] === brackets[j][1]) {
                array.splice(i, 2);
                if (array.length === 0) {
                    return true;
                }
                i = 0;
                isBroke = true;
                break;
            }
        }
        if (isBroke) {
            continue;
        }

        i++;
    }
    return false;
}
