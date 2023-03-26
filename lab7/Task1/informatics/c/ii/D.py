n = int(input())

i = 1
cnt = 0

while(i <= n):
    if(i==n):
        cnt += 1
    i *= 2
    

if(cnt):
    print("YES")
else:
    print("NO")