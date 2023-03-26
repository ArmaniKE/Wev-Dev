n = int(input())

i = 0

while(i <= n):
    # print(2**i)
    if(2**i >= n):
        print(i)
        break
    i += 1