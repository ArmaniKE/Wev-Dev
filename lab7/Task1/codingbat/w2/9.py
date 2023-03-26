def string_match(a, b):
  sht = min(len(a), len(b))
  cnt = 0
  
  for i in range(sht-1):
    a2 = a[i:i+2]
    b2 = b[i:i+2]
    if a2 == b2:
      cnt = cnt + 1

  return cnt