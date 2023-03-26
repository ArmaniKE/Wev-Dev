def min_(l):
    l = sorted(l)
    print(l[0])

l = list(map(int, input().split()))
min_(l)