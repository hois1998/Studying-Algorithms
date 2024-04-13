import sys
import math
sys.stdin = open('백준/test.txt', 'r')

# 수열의 합 공식을 이용하면된다
# 수열의 합은 n(2a+n-1)/2이다
# 다만 조건이 있는데 합이 만들어지지 않는다면 -1을 리턴
# -1을 리턴하는 경우는 100개의 나열

N, L = map(int, input().split())

def find_start_num(sum_val, cnt):
    return (sum_val - cnt*(cnt-1)/2)/cnt


f_start_num, f_count = -1, -1

for l in range(L, 101):
    temp = find_start_num(N, l)
    # print(temp)
    if temp.is_integer() and temp >= 0.0:
        f_start_num = int(temp)
        f_count = l
        break
    
    if temp > N:
        break
    
result_print = "" 
if f_start_num != -1:
    for _ in range(f_count):
        result_print += str(f_start_num)+" "
        f_start_num += 1
    print(result_print)
else:
    print(-1)