# Write a function that takes in a list of integers and returns the second largest number in the list. 
# This must be done without removing any items from lists (using pop, remove, etc) or using sort. 
# You can assume the list will always have 3 or more items. 

#Example 1
# Input = [5, 10, 2, 8, 3]
# Output = 8
# Explanation: the function should return 8 is the second largest number

#Example 2
#Input = [1, 2, 3, 4]
#Output = 3
#Explanation: 3 is the second largest number in the list

#Example 3 
#Input = [10, 1, 11]
#Ouput = 10
#Explanation: 10 is the second largest number in the list

# def second(nums):
#     highest = max(nums)
#     second = nums[0]
#     for i in nums:
#         if i > second and i < highest:
#             second = i
#     return second


    

# print(second([5, 10, 2, 8, 3]))


# # Another solution 

# def second_largest(nums):
#     if nums[0] > nums[1]:
#         largest = nums[0]
#         second_largest = nums[1]
#     else:
#         largest = nums[1]
#         second_largest = nums[0]

#     for num in nums[2:]:
#         if num > largest:
#             second_largest = largest
#             largest = num
#         elif num > second_largest and num != largest:
#             second_largest = num

#     return second_largest

# Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

# You must implement a solution with a linear runtime complexity and use only constant extra space.



# Example 1:

# Input: nums = [2,2,1]
# Output: 1
# Example 2:

# Input: nums = [4,1,2,1,2]
# Output: 4
# Example 3:

# Input: nums = [1]
# Output: 1

class Solution(object):
    def singleNumber(self, nums):
        for num in nums:
            nums.count(num)
            if nums.count(num) == 1:
                return num
solution = Solution()
print(solution.singleNumber(nums = [4,1,2,1,2]))