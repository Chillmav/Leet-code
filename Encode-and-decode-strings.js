/* Naive approach
class Solution {


    encode(strs) {
        let result = ''
        for (let str of strs) {
            result += str + '|'
        }
        return result
    }

    decode(str) {
        const list = [];
        let word = '';
        for (let char of str) {
            if (char !== '|') {
                word += char
            } else {
                list.push(word);
                word = ''
            }
        }
        return list
    }

}
*/

/* Good solution
class Solution {


    encode(strs) {
        let result = '';
        for (let str of strs) {
            result += str.length + '#' + str;
        }

        return result
    }

    decode(str) {
    let i = 0;
    const list = []
    while (i < str.length - 1) {

        let num = ''
        while (str[i] !== '#') {
            
            num += str[i]
            i++
        }
        i++
        num = Number(num);
        let word = '';
        let j = i;
        while (num + i  > j) {
            word += str[j]
            j++
        }
        list.push(word)
        i += word.length
        word = ''
        num = ''
    
   
    }
    return list
    }


}
    */