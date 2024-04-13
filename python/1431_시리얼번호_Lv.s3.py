# 분류조건으로 
# 1. 길이가 짧은 것이 우선적으로 온다. 
# 2. 길이가 같으면 숫자인 문자들만 합한 것이 작은 것이 먼저온다. 
# 3. 
import sys

sys.stdin = open('백준/test.txt')
def summation_integer_chr(item):
    sum = 0
    for e in item:
        if 49 <= ord(e) <= 57:
            sum += int(e)
    return sum

def sort_cond(item):
  return (len(item), summation_integer_chr(item), item)

N = int(input())
arr= []
for _ in range(N):
    arr.append(input().strip())  
arr.sort(key=sort_cond)
result = '\n'.join(arr)
print(result)
