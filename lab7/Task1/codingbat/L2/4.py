def sum13(nums):
    if not nums:
        return 0
    i = 0
    n = len(nums)
    cnt = 0
    while i < n:
        if nums[i] == 13:
            i += 2
        else:
            cnt += nums[i]
            i += 1
    return cnt
