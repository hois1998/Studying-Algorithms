# import sys

# sys.stdin = open('백준/test.txt')

# N = int(input())
# sub_arr = list()

# # input 중에 중복되는 엔트리가 있으면 제거해줘야 한다.
# for i in range(N):
#     a, b = map(int, input().split())
#     sub_arr.append(b-a)

# # print(sub_arr)
# # sub_arr = list(map(lambda x: -x, sub_arr)) 처음부터 b-a로 순서를 바꿔서 넣는다
# arr_len = len(sub_arr)
# sub_arr = sorted(sub_arr)
# print(sub_arr)

# if N % 2 == 1:
#     print(1)
#     exit()

# print(sub_arr[N//2]-sub_arr[N//2-1]+1)
# range_candi_arr  = list(map(lambda e: -e, sub_arr))
# range_candi_arr.append(None)
# # print(sub_arr, candi_arr)
# min_val = 1e9
# cnt = 0
# for idx, i in enumerate(range_candi_arr):
#     if idx==0:
#         re = sum(sub_arr)-i*arr_len
#         if re < min_val:
#             cnt = 1
#             min_val = re
#         elif re == min_val:
#             cnt += 1
#     elif idx==arr_len:
#         re = sum(sub_arr)+range_candi_arr[idx-1]*arr_len
#         if re < min_val:
#             cnt = 1
#             min_val = re
#         elif re == min_val:
#             cnt += 1
#     else:
#         lower = range_candi_arr[idx-1]+1
#         upper = i
        
#         x_size = arr_len-2*idx
#         sum_re = 0
#         for r_idx, e in enumerate(range_candi_arr[:-1]):    
#             if e < i:
#                 sum_re += sub_arr[r_idx]
#             else:
#                 sum_re -= sub_arr[r_idx]
#         if x_size <= 0:
#             re = sum_re + x_size*upper
#         elif x_size > 0:
#             re = sum_re + x_size*lower
        
#         if re < min_val:
#             cnt = 1 if x_size != 0 else upper-lower+1
#             min_val = re
#         elif re == min_val:
#             cnt += 1 if x_size != 0 else upper-lower+1

# print(cnt)


# 231220 다시 풀러왔습니다
# 어렵다고 생각했는데 그 이유는 공식을 발견하면 쉬운데 그렇지 못하면 덕지덕지 추가 조건을 붙이는 문제이고 조건이 붙을수록 틀릴 확률도 증가하기 때문에 코드에 에러가 늘어나 통과를 못했습니다.
# 결국 답지를 봤던 기억이 있습니다.
import sys

sys.stdin = open('백준/test.txt')

N = int(input())
arr = list()
for _ in range(N):
    arr.append(list(map(int, input().split())))
arr = list(map(lambda x: x[1]-x[0], arr))
arr = sorted(arr)

if len(arr) % 2 == 0:
    print(arr[len(arr)//2]-arr[len(arr)//2-1]+1)
else: 
    print(1)