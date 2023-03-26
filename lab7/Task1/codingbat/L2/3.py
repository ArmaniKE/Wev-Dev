def centered_average(nums):
    srt = sorted(nums)
    return sum(srt[1:-1]) // (len(nums) - 2)