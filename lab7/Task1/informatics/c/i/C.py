import math

a = int(input())
b = int(input())

for i in range(a, b+1):
    if math.sqrt(float(i)) * math.sqrt(float(i)) == float(i):
        print(i, end = ' ')