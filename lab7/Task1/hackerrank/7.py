n = int(input())
arr = map(int, input().split())

arr = sorted(set(arr))

print(arr[-2])