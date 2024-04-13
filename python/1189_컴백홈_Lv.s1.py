# 이문제는 dfs로 풀 수 있다 그런데 도달하지 못하는 경우는 없는 쉬운 문제이다
# 이 문제는 내포하고 있는 점이 무조건 도달하지 못하는 경우가 0개인 것은 없다는 점이다
from collections import deque
import sys

sys.stdin = open('백준/test.txt')
R, C, K = map(int, input().split())
road = [list(input()) for _ in range(R)]

start_idx = [R-1, 0]
end_idx = [0, C-1]
k_cnt = 0


def dfs(idx, cnt=1, visited=[arr[:] for arr in road]):
    global k_cnt
    if idx == end_idx:
        if cnt == K:
            k_cnt += 1
        return
    
    visited[idx[0]][idx[1]] = 'T'
    
    direction_container = [0,1,2,3]
    dx = [-1, 0, 1, 0]
    dy = [0, 1, 0, -1]
    
    for direction in direction_container:
        n_r, n_c = idx[0]+dx[direction], idx[1]+dy[direction]
        
        if -1<n_r<R and -1<n_c<C and visited[n_r][n_c] == '.':
            n_visited = [arr[:] for arr in visited]
            dfs([n_r, n_c], cnt+1, n_visited)

dfs(start_idx)
print(k_cnt)