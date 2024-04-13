# 숫자 정사각형
# 가장 큰 정사각형을 찾는 문제인데, 정사각형의 꼭짓점의 수가 모두 동일한 정사각형을 찾는다. 
# 가로 새로 행렬을 받고 가로 새로 중 짧은 것이 최대 정사각형의 변의 길이이다. 이 점을 활용해 루프를 돌린다. 

import sys
sys.stdin = open('./백준/test.txt', 'r')

row, col = list(map(int, input().split(' ')))
mat = []

#애초에 mat을 만들 때, 더 긴 것이 row로 가도록 mat을 만들 수도 있겠다.
for _ in range(row):
    mat.append(list(map(int, list(input()))))
    
max_size = 1

for x in range(0, row-1):
    for y in range(0, col-1):
        start_size = row-x if row-x < col-y else col-y
        ref_value = mat[x][y]
        
        for size in range(start_size, 1, -1):
            if mat[x+size-1][y] == ref_value and mat[x][y+size-1] == ref_value and mat[x+size-1][y+size-1] == ref_value:
                if size > max_size:
                    max_size = size
                    break
                
print(max_size**2)

