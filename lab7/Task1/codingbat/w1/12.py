def front3(str):
  len_ = 3
  
  if len(str) < len_:
    len_ = len(str)
  
  copy = str[:len_]
  return copy + copy + copy 
