n = int(input())
l = list(map(int, input().split()))

cnt = 0
for i in range(n-1):
    if l[i] >=0 and l[i+1] >=0:
        cnt += 1
    elif l[i] < 0 and l[i+1] < 0:
        cnt +=1

if(cnt):
    print("YES")
else:
    print("NO")