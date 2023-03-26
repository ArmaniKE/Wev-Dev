n = int(input())
l = list(map(int, input().split()))

cnt = 0
for i in range(n-2):
    if l[i]  < l[i+1] > l[i+2]:
        cnt += 1

print(cnt)