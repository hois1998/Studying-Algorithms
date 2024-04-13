# 유기농 배추는 1로만 이뤄지는 블록의 수를 카운트하면 된다.
# 그러면 먼저 상하좌우에 있는 1이 있는지 확인한다. 발생하는 문제가 블록으로 만들어지는 것을 표시해줘야 한다. 
import sys
sys.setrecursionlimit(10**5)
sys.stdin = open('백준/test.txt', 'r')

# TEST_N = int(input())
# #글로벌하게 행렬 넘기기가 이뤄지나요?
# # 어떤 값같은 경우는 함수로 넘어가면 그 스코프에서 로컬하게 작용하지만 
# # 리스트의 경우에는 주소값이 넘어가는 원리이기 때문에 딥카피를 하지 않으면 
# # 그 주소가 넘어간다. 
# def bfs(x, y):
#     farm[x][y] = 0
#     x_add = [1, 0, -1, 0] # up, right, down, left
#     y_add = [0, 1, 0, -1]
#     # 이거 반복되는 구문이 존재하니까 조건문 네개를 하나로 통합할 수 있었다.
#     # if x+1 < row_len and mat[x+1][y] == 1 and check[x+1][y] == 0:
#     #     check[x+1][y] = 1
#     #     bfs(x+1, y, mat, check)
#     # if x-1 > 0 and mat[x-1][y] == 1 and check[x-1][y] == 0:
#     #     check[x-1][y] = 1
#     #     bfs(x-1, y, mat, check)
#     # if y+1 < col_len and mat[x][y+1] == 1 and check[x][y+1] == 0:
#     #     check[x][y+1] = 1
#     #     bfs(x, y+1, mat, check)
#     # if y-1 > 0 and mat[x][y-1] == 1 and check[x][y-1] == 0:
#     #     check[x][y-1] = 1
#     #     bfs(x, y-1, mat, check)
    
#     for idx in range(4):
#         new_x, new_y = x+x_add[idx], y+y_add[idx]
#         if 0<=new_x<N and 0<=new_y<M and farm[new_x][new_y]==1:
#             bfs(new_x, new_y)
             
            
#  # idea로 check_searched를 만들지 않더라도 그냥 mat의 1을 0으로 바꿈으로써
#  # 방문했음을 표현할 수 있다.           
# for test_n in range(TEST_N):
#     N, M, cabbage_num = list(map(int, input().split(' ')))
    
#     farm = [[0 for temp_aa in range(M)] for _ in range(N)]
#     # check_searched = [[0 for nn in range(M)] for _ in range(N)]
    
#     for aa in range(cabbage_num):
#         # map에 대해서 공부해야 겠다.
#         temp_x, temp_y = map(int, input().split(' '))
#         # print(temp_x, temp_y)
#         farm[temp_x][temp_y] = 1
    
#     # 돌면서 블럭수를 카운트한다
#     blk_num = 0
#     for x in range(N):
#         for y in range(M):
#             if farm[x][y]==1:
                
#                 bfs(x, y)
#                 blk_num += 1
                
#     print(blk_num)


# 231218 다시 코딩에 집중합니다
# 이 문제는 dfs나 bfs를 활용해서 문제를 해결하면 된다.
# 배추가 있으면 1, 없으면 0, 지렁이가 접근했으면 -1을 두어 하나의 배열에서 서칭을 진행한다

# cnt = int(input())

# def dfs(r, c):
#     global arr, rn, cn  

#     arr[r][c] = -1
#     dx = [-1, 0, 1, 0]
#     dy = [0, 1, 0, -1]
    
#     for i in range(4):
#         if -1 < r+dx[i] < rn and -1 < c+dy[i] < cn and arr[r+dx[i]][c+dy[i]] == 1:
#             dfs(r+dx[i], c+dy[i])
            
                
# for _ in range(cnt):
#     rn, cn, cabbage = map(int, input().split())
#     arr = [[0] * cn for _ in range(rn)]
#     # arr = [[0] * cn] * rn
#     for _ in range(cabbage):
#         r, c = map(int, input().split())
#         arr[r][c] = 1
    
#     count =  0
#     for r in range(rn):
#         for c in range(cn):
#             if arr[r][c] == 1:
#                 count += 1
#                 dfs(r, c)

#     print(count)


# 만약 이 문제를 recursion error없도록 bfs를 통해 해결한다면?
from collections import deque
queue = deque()

cnt = int(input())

for _ in range(cnt):
    rn, cn, cabbage = map(int, input().split())
    arr = [[0] * cn for _ in range(rn)]
    # arr = [[0] * cn] * rn
    for _ in range(cabbage):
        r, c = map(int, input().split())
        arr[r][c] = 1
    
    count =  0
    for r in range(rn):
        for c in range(cn):
            if arr[r][c] == 1:
                count += 1
                queue = deque()
                queue.append([r, c])
                
                while (len(queue)):
                    selected_r, selected_c = queue.pop()
                    arr[selected_r][selected_c] = -1
                    dx = [-1, 0, 1, 0]
                    dy = [0, 1, 0, -1]
                    
                    for i in range(4):
                        if -1 < selected_r+dx[i] < rn and -1 < selected_c+dy[i] < cn and arr[selected_r+dx[i]][selected_c+dy[i]] == 1:
                            queue.append([selected_r+dx[i], selected_c+dy[i]])

    print(count)