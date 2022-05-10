/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const nums = [1,5,3,7,9,6,5,4]
const target = 10
// 第一种采用双重遍历的简单粗暴方式
const twoSum = (nums, target) => {
    const result = []
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i] + nums[j] === target){
                result.push(i)
                result.push(j)
            }
        }
    }
    return result
}
console.log(twoSum(nums,target)) // [2,3]

// 方法2 使用map进行反推
const twoSum2 = (nums, target)=>{
    const numsMap = new Map()
    for(let i=0;i<nums.length;i++){
        const x = target - nums[i]
        if(numsMap.has(x)){
            return [numsMap.get(x),i]
        }
        numsMap.set(nums[i],i)
    }
}
console.log(twoSum2(nums,target)) // [2,3]

// 方法3 采用二分法
const twoSum3 = (nums,target)=>{
    const result = []
    for(let i=0;i<nums.length;i++){
        let x = target - nums[i]
        for(let j=i+1, k=nums.length-1;j<=k;j++,k--){
            if(nums[j]===x){
                result.push(i)
                result.push(j)
            }
            if(nums[k]===x){
                result.push(i)
                result.push(k)
            }
        }
    }
    return Array.from(new Set(result)) // j=k的时候会重复计算一次，所以要去重处理
}
console.log(twoSum3(nums,target))

