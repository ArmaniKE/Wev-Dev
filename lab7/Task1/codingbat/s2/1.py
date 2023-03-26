def double_char(str):
  str2 = ''
  for i in range(len(str)):
    str2 += str[i] + str[i]
  return str2
