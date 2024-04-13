import sys
sys.stdin = open('test.txt', 'r')

num_list = list(map(int, input().split(' ')))

num_list = list(sorted(num_list))

start_num = num_list[2]
while 1:
    cnt = 0
    for num in num_list:
        if start_num % num == 0:
            cnt += 1
            
    if cnt >= 3:
        break
    else:
        start_num += 1
        
print(start_num)

    