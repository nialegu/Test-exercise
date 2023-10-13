function checkSyntax(s) {
    const stack = [];
    const mapping = {
        '{': '}',
        '(': ')',
        '[': ']',
        '<': '>'
    }

    for (let i = 0; i < s.length; i++) {
        if(![...Object.keys(mapping), ...Object.values(mapping)].includes(s[i])){
            continue;
        }
        if(!Object.keys(mapping).includes(s[i])){
            if(stack.pop() !== s[i]){
                return 1;
            }
            continue;
        }
        stack.push(mapping[s[i]]);
        }
    return stack.length
};

console.log(checkSyntax("---(++++)----")) //-> 0
console.log(checkSyntax("")) //-> 0
console.log(checkSyntax("before ( middle []) after "))// == 0
console.log(checkSyntax(") (")) //== 1
console.log(checkSyntax("} {")) // == 1
console.log(checkSyntax("<(   >)")) //== 1
console.log(checkSyntax("(  [  <>  ()  ]  <>  )")) //== 0
console.log(checkSyntax("   ( [)")) //== 1