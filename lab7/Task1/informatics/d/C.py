n = int(input())
l = list(map(int, input().split()))
sum = 0

for i in l:
    if i>0:
        sum += 1

print(sum)