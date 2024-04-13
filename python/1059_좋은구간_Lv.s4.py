import sys

sys.stdin = open('백준/test.txt', 'r')
s_size = int(input())
S = list(map(int, input().split()))
S.sort()
n = int(input())

upper, lower = 1000, 1
no_good_range = False
for idx, e in enumerate(S):
    if e == n:
        print(0)
        exit()
    if e > n:
        upper = e-1
        if idx != 0:
            lower = S[idx-1]+1
        break
        

# 전략으로 n을 끝점으로 가지면서 구간을 만들고
# 다른 하나는 n을 구간 끝점이 아니 상황에서 구간을 만들고
# 전체에서 중복을 하나 빼면 된다.
print((n-lower+1)*(upper-n+1)-1)
    
