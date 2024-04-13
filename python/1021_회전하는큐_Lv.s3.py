# 회전하는 큐
# 전체 큐의 길이가 줄어든다. 그러면서 큐 전체에서 원하는 숫자들을 제거하는 최적의 이동횟수를 세서 출력한다.add()
import sys
sys.stdin = open('./백준/test.txt', 'r')
length, number_cnt = list(map(int, input().split(' ')))
number_list = list(map(int, input().split(' ')))

# print(length, number_count, number_list)
move_cnt = 0

arr = [i for i in range(1, length+1)]

for finding_num in number_list:
    for idx, num in enumerate(arr):
        if num == finding_num:
            if idx < len(arr) - idx:
                temp_cnt = idx
            else:
                temp_cnt = len(arr) - idx
            move_cnt += temp_cnt
            
            if idx == 0:
                arr = arr[idx+1:]
            elif idx == len(arr)-1:
                arr = arr[0:idx]
            else:
                arr = arr[idx+1:len(arr)] + arr[0:idx]
            # print(f"movement {temp_cnt}")
            break

print(move_cnt)