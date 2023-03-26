def last2(str):
  if len(str) < 2:
    return 0
  
  lst = str[len(str)-2:]
  cnt = 0
  
  for i in range(len(str)-2):
    sub = str[i:i+2]
    if sub == lst:
      cnt = cnt + 1

  return cnt