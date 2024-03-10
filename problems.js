function doBeZero(nums) {
    let seen = new Set()
    for (let num of nums) {
        if (seen.has(-num)) {
            return true
        }
        seen.add(num)
    }
    return false
}

let nums = [1, 5, 18, -1]
console.log(doBeZero(nums))
// O(n)



function uniqueBoi(word) {
    let charSet = new Set()
    for (let char of word) {
        if (charSet.has(char)) {
            return false
        }
        charSet.add(char)
    }
    return true
}

console.log(uniqueBoi("Garrett"))
// O(n)



function panagwam(sentence) {
    sentence = sentence.toLowerCase()
    
    let letters = new Set()
    
    for (let char of sentence) {
        if (/[a-z]/.test(char)) {
            letters.add(char)
        }
    }

    return letters.size === 26
}

console.log(panagwam("qwertyuioplkjhgfdsazxcvbvbnm"))
// 0(n)



function find_longest_word(words) {
    let maxLength = 0

    for (let word of words) {
        if (word.length > maxLength) {
            maxLength = word.length
        }
    }

    return maxLength
}

const words = ["apple", "banana", "kiwi", "orange", "grapefruit"]
console.log(find_longest_word(words))
// O(n)