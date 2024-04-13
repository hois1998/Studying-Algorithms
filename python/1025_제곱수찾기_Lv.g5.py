# 이 문제는 행렬의 각위치에서 만들 수 있는 모든 인덱스 수열에 대한 결과 숫자를 조사해서 그 중에 가장 큰 제곱수를 찾는 문제로 접근했다. 
# 먼저 각 행열의 위치를 돌고 
# 각 행렬의 위치에서 행과 열의 인덱스를 증가시키면서 만들 수 있는 결과 숫자를 모두 뽑는다
import sys
import math
sys.stdin = open('백준/test.txt', 'r')

N, M = map(int, input().split())
mat = [list(input()) for _ in range(N)]

# print(mat)
result = -1

def is_sqnum(N):
    return int(N**0.5)**2 == N


for i in range(N):
    for j in range(M):
        temp_start = mat[i][j]
        temp_num = int(temp_start)
        if is_sqnum(temp_num) and result < temp_num:
            result = temp_num
            
        dx = list(range(-i, N-i))
        dy = list(range(M-j))
        
        for dx_e in dx:
            for dy_e in dy: 
                if dx_e==0 and dy_e==0:
                    continue               
                temp_i, temp_j = i+dx_e, j+dy_e
                temp_result = temp_start
                while -1<temp_i<N and -1<temp_j<M:
                    temp_result += mat[temp_i][temp_j]
                    temp_i += dx_e  
                    temp_j += dy_e
               
                    temp_int = int(temp_result)
                    reverse_temp_int = int(temp_result[::-1])
                    if is_sqnum(temp_int) and temp_int > result:
                        result = temp_int
                            
                    if is_sqnum(reverse_temp_int) and reverse_temp_int > result:
                        result = reverse_temp_int
                
print(result)
