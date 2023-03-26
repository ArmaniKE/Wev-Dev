def sum67(nums):
    bl = False
    sum = 0
    for num in nums:
        if num == 6:
            bl = True
        elif num == 7 and bl:
            bl = False
        elif not bl:
            sum += num
    return sum