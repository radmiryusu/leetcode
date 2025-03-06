 let keys = {
    '(':')',
    '{':'}',
    '[':']',
 }
function isValid(s) {
    if(s.length % 2 !== 0) return false;
    const stack = []
    for(let i = 0; i < s.length; i +=1){
        const symbol = s[i]

        if(symbol in keys)stack.push(symbol)
        else if(!stack.length || keys[stack[stack.length - 1]] !== symbol)return false;
		else stack.pop()
    }
    return !stack.length;
};