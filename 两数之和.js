/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

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
};
const nums = [1,5,3,7,9,6,5,4]
const target = 10
console.log(twoSum(nums,target)) // [2,3]

// 方法2 使用map进行反推
const twoSum2 = (nums, target)=>{
    const numsMap = new Map()
    for(let i=0;i<nums.length;i++){
        if(numsMap.has(target - nums[i])){
            return [numsMap.get(x),i]
        }
        numsMap.set(nums[i],i)
    }
}
const nums = [1,5,3,7,9,6,5,4]
const target = 10
console.log(twoSum2(nums,target)) // [2,3]



// 方法3 采用二分法



// 方法4 采用四分法

