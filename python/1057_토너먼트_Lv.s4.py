# 이 문제는 1198의 삼각형으로자르기의 부르트포스 알고리즘에 익숙해지기 위해 또 푸는 문제이다

import sys

sys.stdin = open('백준/test.txt')

N, p1, p2 = map(int, input().split())

round_cnt = 0
people_list = [0] * N
people_list[p1-1] = 1
people_list[p2-1] = 1
match_found = False

while 1:
    round_cnt += 1
    if len(people_list) % 2 == 1:
        people_list += [0]
        
    new_list = list()
    for idx in range(0, len(people_list), 2):
        v = people_list[idx]+people_list[idx+1]
        
        if v == 2:
            match_found = True
            break
        new_list.append(v)
    
    people_list = new_list
    if match_found:
        break
    
print(round_cnt)