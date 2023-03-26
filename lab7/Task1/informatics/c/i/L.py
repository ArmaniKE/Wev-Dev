n = input()

a = 0

for i in range(len(n)):
    a += (int(n[i]) * 2**(len(n)-i-1))

print(a)