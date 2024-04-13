import sys
# import numpy as np # baekjoon doesn't support modules which are not python built-in 

sys.stdin = open('백준/test.txt')
N = int(input())
arr = list(map(int, input().split()))
arr = [[i, idx] for idx, i  in enumerate(arr)]

arr = sorted(arr, key=lambda e: e[0])
arr = [i + [idx] for idx, i in enumerate(arr)]
arr = sorted(arr, key=lambda e: e[1])

result = ''
for i in arr:
    result += str(i[2])+' '
    
print(result)