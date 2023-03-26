def make_chocolate(small, big, goal):
    big_bars = goal // 5
    if big_bars <= big:
        goal -= big_bars * 5
    else:
        goal -= big * 5

    if goal <= small:
        return goal
    else:
        return -1
