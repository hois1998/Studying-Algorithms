import sys
import math
sys.stdin = open('백준/test.txt')

n = int(input())
q_candi = math.floor(n**0.5)

while 1:
    if q_candi**2 >= n:
        print(q_candi)
        break
    q_candi += 1