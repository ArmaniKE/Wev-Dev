def make_bricks(small, big, goal):
    mx = min(big, goal // 5)
    re = goal - mx * 5
    return re <= small

