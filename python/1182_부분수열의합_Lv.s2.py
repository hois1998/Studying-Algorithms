# 이 문제는 combination을 함수로 구현하는 것이다 
# 그렇게 판단한 이유는 수열의 크기가 최대 20이기 때문이다.
import sys

sys.stdin = open('백준/test.txt')
n, s = map(int, input().split())
arr = list(map(int, input().split()))
cnt = 0

def combination(n, candi, selected):
    global cnt
    for idx, e in enumerate(candi):
        new_candi = candi[idx+1:]
        new_selected = selected[:]
        new_selected.append(e)

        if n == 1:
            if sum(new_selected) == s:
                cnt += 1
        else:
            combination(n-1, new_candi, new_selected)
            
# arr = [1,2,3,4,5]
# s = 6
# combination(2, arr, [])
for i in range(1, n+1):
    combination(i, arr, [])
    
print(cnt)