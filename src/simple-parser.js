// https://leetcode.com/problems/decode-string/

var decodePart = (s, start) => {
    let result = '';
    while (/[A-Za-z]/.test(s[start]) && start < s.length) {
        result += s[start];
        start += 1;
    }
    if (result.length) {
        return [result, start];
    }
    if (!/\d/.test(s[start])) {
        throw new Error('Invalid string');
    }
    let num = '';
    while (/\d/.test(s[start])) {
        num += s[start];
        start += 1;
    }
    num = parseInt(num, 10);
    start += 1;
    let str = '';
    while (s[start] !== ']') {
        if (/\d/.test(s[start])) {
            let [tmp, end] = decodePart(s, start);
            start = end;
            str += tmp;
        } else {
            str += s[start];
            start += 1;
        }
    }
    for (let i = 0; i < num; i += 1) {
        result += str;
    }
    return [result, start + 1];
};

var decodeString = function(s) {
    let result = '';
    let start = 0;
    while (start < s.length) {
        let [str, end] = decodePart(s, start);
        start = end;
        result += str;
    }
    return result;
};

console.log(decodeString('2[abc]3[cd]ef'));

