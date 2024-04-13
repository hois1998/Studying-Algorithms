import sys
import math

sys.stdin = open('백준/test.txt')

N = int(input())
mean_container = [float(input()) for _ in range(N)]

num = 1
ref_mean = mean_container[0]

while True:
    test_passed = False
    ref_mean = mean_container[0]
    
    if math.ceil(ref_mean*num) < (ref_mean+0.001)*num:
        test_passed = True
        for mean in mean_container[1:]:
            if math.trunc(math.ceil(mean*num)/num*1000)/1000 != mean:
                test_passed = False
                break
    
    # for mean in mean_container:
    #     N = int(mean*num) if mean*num==int(mean*num) else math.ceil(mean*num)
    #     if N == (mean+0.001)*num:
    #         if not (mean*num <= N):
    #             test_passed = False
    #             break
    #     else:
    #         if not (mean*num <= N < (mean+0.001)*num):
    #             test_passed = False
    #             break
    
    if test_passed:
        break
    num += 1

print(num)
 