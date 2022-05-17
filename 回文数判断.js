/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 初级写法
const isPalindrome = function(nums) {
    return String(nums) === String(nums).split('').reverse().join('')
}
const num = 123321
console.log(isPalindrome(num))

// 加上边界判断，
const isPalindrome2 = function(x) {
    // 负数和0结尾的数字不是回文数字
    if(x<0 || (x%10===0 && x!=0)) return false
    const nums = String(x)
    return nums === nums.split('').reverse().join('')
}
const num2 = -1233210
console.log(isPalindrome2(num2))


// 通过二分法，进行首位比较
const isPalindrome3 = function(x) {
    // -数和0结尾的数字不是回文数字
    if(x<0 || (x%10===0 && x!=0)) return false
    let reversedNumber = 0
    while(x > reversedNumber){
        reversedNumber = reversedNumber*10 + x % 10
        x = Math.floor(x/10)
    }
    return x===reversedNumber || x=== Math.floor(reversedNumber/10)
}
const num3 = 12344321
console.log('333',isPalindrome3(num3))

// 还有更好的办法呢