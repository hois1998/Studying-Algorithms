import sys
from collections import deque

sys.stdin = open('백준/test.txt')
point_n, line_n, start_point = map(int, input().split())
start_point -=  1

line_container = [set() for _ in range(point_n)]
for _ in range(line_n):
    p1, p2 = map(int, input().split())
    
    line_container[p1-1].add(p2-1)
    line_container[p2-1].add(p1-1)
# print(line_container)
for idx, li in enumerate(line_container):
    line_container[idx] = sorted(list(li))
# print(line_container)

dfs_result = []
def dfs(stack, candi, result=[]):
    
    while stack:
        v = stack[0]
        candi = [x for x in candi if x != v]
        stack.popleft()
        result.append(v)

        for connected_point in line_container[v][::-1]:
            if connected_point in candi:
                if connected_point in stack:
                    stack.remove(connected_point)
                stack.appendleft(connected_point)
            
    return result
    
def bfs(start_point, candi, result=[]):
    q = deque([start_point])
    candi = [x for x in candi if x != start_point]
    
    while q:
        V = q.popleft()
        result.append(V)
        for i in line_container[V]:
            if i in candi:
                q.append(i)
                candi = [x for x in candi if x != i]
                
    return result

# 안되는 이유 분석하기
# 1. candi를 [0,1,2] 대신에 [0,0,0]로 하고 방문시 해당 인덱스를 1로 바꾸기
# def dfs(start_point, candi, result=[]):
#     candi[start_point] = 1
#     result.append(start_point)
        
#     for connected_point in line_container[start_point]:
#         if connected_point in candi:
#             return dfs(connected_point, candi.copy(), result.copy())

#     return result
result = ''
for i in dfs(deque([start_point]), list(range(0, point_n))):
    result += f"{str(i+1)} "
result += '\n'
for i in bfs(start_point, list(range(0, point_n))):
    result += f"{str(i+1)} "
    
print(result)
