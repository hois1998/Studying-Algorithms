import sys
sys.stdin = open('백준/test.txt')

input_arr = list(input())
arr = [0] * 26 

for e in input_arr:
    arr[ord(e)-65] += 1

count_odd = 0
for e in arr:
    if e%2 == 1:
        count_odd += 1
        
if count_odd > 1:
    print("I'm Sorry Hansoo")
    exit()

front_str = ""
back_str = ""
middle_chr = ""

for idx, e in enumerate(arr):
    if e%2 == 1:
        middle_chr = chr(idx+65)
        e -= 1
        
    temp = chr(idx+65) * int(e/2)
    front_str += temp
    back_str = temp + back_str
    
front_str += middle_chr
result = front_str+back_str
print(result)