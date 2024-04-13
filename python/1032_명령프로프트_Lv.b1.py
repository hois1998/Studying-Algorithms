import sys

sys.stdin = open('백준/test.txt', 'r')

N = int(input())
str1 = input()
str1_len = len(str1)
result_container = [True] * str1_len

for _ in range(N-1):
    temp_str = input()
    for idx, chr in enumerate(temp_str):
        if chr != str1[idx]:
            result_container[idx] = False
            
result = ""
for idx, bool in enumerate(result_container):
    if bool:
        result += str1[idx]
    else:
        result += '?'
        
print(result)
        
