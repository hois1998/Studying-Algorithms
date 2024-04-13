# 결국에 bfs든 dfs든으로 해결할 수 있다.
# dfs를 썼다.
# 근데 점프 횟수를 최소화시켜야 하며 점프 정보를 갖고 있어야 한다.
import sys

sys.stdin = open('백준/test.txt')
N = int(input())
bridge_list = list(map(int, input().split()))
p1, p2 = map(int, input().split())
p1 -= 1
p2 -= 1
visited_list = [False] * N

def dfs(point, jump_cnt=1):
    global cnt
    visited_list[point] = jump_cnt
    multiple = bridge_list[point]
    
    for i in range(1, 10001):
        new_point = point+multiple*i
        if 0 <= new_point < N and not visited_list[new_point]:
            dfs(new_point, jump_cnt+1)
        else:
            break

dfs(p1)
print(visited_list)
if visited_list[p2]:
    print(visited_list[p2])
else:
    print(-1)  