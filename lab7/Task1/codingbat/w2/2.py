def front_times(str, n):
  len = 3
  if len > len(str):
    len = len(str)
  front = str[:len]
  
  res = ""
  for i in range(n):
    res = res + front
  return res