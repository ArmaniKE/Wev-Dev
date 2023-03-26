n = int(input())
l = list(map(int, input().split()))

for i in l[::2]:
    print(i, end = ' ')