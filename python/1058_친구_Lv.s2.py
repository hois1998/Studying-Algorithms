import sys
sys.stdin = open('백준/test.txt', 'r')

N = int(input())
mat = []

for _ in range(N):
    mat.append(list(map(lambda x: 1 if x == 'Y' else 0, list(input()))))
    
max_friend_num = 0

for idx in range(N):
    target_list = mat[idx]
    friend_cnt = 0
    
    for t_idx, e in enumerate(target_list):
        if e == 1:
            friend_cnt += 1
        else:
            if t_idx != idx:
                comp_list = mat[t_idx]
                
                for i in range(N):
                    if comp_list[i]+target_list[i] == 2:                    
                        friend_cnt += 1
                        break
                        
    if friend_cnt > max_friend_num:
        max_friend_num = friend_cnt
        
print(max_friend_num)