import sys

sys.stdin = open('백준/test.txt')

N = int(input())

for i in range(N):
    temp_input = list(map(int, input().split()))
    M = temp_input[0]//2+1
    temp_input = sorted(temp_input[1:])

    cnt = 0
    curr_num = -2e32
    found = False
    for e in temp_input:        
        if e == curr_num:
            cnt += 1
        else:
            cnt = 1
            curr_num = e
            
        if cnt >= M:
            found = True
            break

            
    if found:
        print(curr_num)
    else:
        print('SYJKGW')