import sys
from functools import reduce
sys.stdin = open('백준/test.txt')

N, L, W, H = map(int, input().split())
a = min(L, W, H)
count = [L//a, W//a, H//a]
size = [L, W, H]

def multiple(arr):
    result = 1
    for e in arr:
        result *= e
    return result

while multiple(count) < N:
    max_a = 0
    for idx, count_e in enumerate(count):
        if size[idx]/(count_e+1) > max_a:
            max_a = size[idx]/(count_e+1)
            max_idx = idx
        
    a = max_a
    count[max_idx] += 1
    
print(a) 
        