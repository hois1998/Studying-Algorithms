import sys
sys.stdin = open("백준/test.txt")

N, K = map(int, input().split())
line_container = [int(input()) for _ in range(N)]

# 나는 max_val을 2e31-1로 설정했는데 N <= K니까 max(line_container)로 해도 된다.
min_val, max_val = 0, max(line_container)

while (max_val-min_val) > 0:
    mid = (min_val+max_val) // 2
    line_cnt = 0
    for l in line_container:
        line_cnt += l//mid
        
    if line_cnt >= K:
        min_val = mid
    else:
        max_val = mid-1
        
# line_cnt = 0
# for l in line_container:
#     line_cnt += 1//max_val
# if line_cnt == K:
#     print(max_val)
# else:
#     print(min_val)
print(max_val)