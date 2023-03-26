def pow_(a: float, n: int) -> float:
    
    if n == 0:
        return 1
    elif n % 2 == 0:
        t = pow_(a, n//2)
        return t * t
    else:
        return a * pow_(a, n-1)

a, n = map(float, input().split())

print(pow_(a, int(n)))