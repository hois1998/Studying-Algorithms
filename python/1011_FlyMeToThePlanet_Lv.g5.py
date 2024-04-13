# 일일이 거리에 따른 최소 이동횟수를 구하고 최종적으로 
# 규칙성을 발견하기

import sys
sys.stdin = open('백준/test.txt')

test_N = int(input())
input_list = []
for _ in range(test_N):
    start, end = map(int, input().split())
    input_list.append(end-start)
    
operating_cnt_container = []
total_distance = 0
adding_distance = 1

while total_distance < 2**31:
    container_len = len(operating_cnt_container)
    
    if container_len % 2 == 0:
        total_distance += adding_distance
        operating_cnt_container.append(total_distance)
    else:
        total_distance += adding_distance
        adding_distance += 1
        operating_cnt_container.append(total_distance)
        

# print(operating_cnt_container[:20])
# print(operating_cnt_container[-10:])
result = ""

for input in input_list:
    for cnt, tot_distance in enumerate(operating_cnt_container):
        if tot_distance >= input:
            # print(input, tot_distance)
            result += f"{cnt+1}\n"    
            break        
            
print(result)