import sys
sys.stdin = open('백준/test.txt', 'r')

# 처음에는 그냥 일일이 +1씩 증가시키면서 문제를 해결하려고 했다. 
# 당연히 실패

# decreasing_num_container = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

# num = 10

# def is_decreasing(num):
#     temp_list = list(map(int, list(str(num))))
#     chk = True
    
#     for idx in range(1, len(temp_list)):
#         if temp_list[idx-1]-temp_list[idx] <= 0:
#             chk = False
#             break
#     return chk


# while num <= 1e6:
#     if is_decreasing(num):
#         decreasing_num_container.append(num)
        
#     num += 1
    
# print(decreasing_num_container[-50:])
# print(len(decreasing_num_container))


# 동적 계획법으로 푸는 문제도 아니었다. 
# dn_container = [0,1,2,3,4,5,6,7,8,9]
# global search_idx 
# search = -1
# glb_idx = int(input())

# def dn_finder(cur_list=[], length=0, candi=[0,1,2,3,4,5,6,7,8,9]):
#     start_idx = 0
#     if len(cur_list) == 0 and length!=1:
#         start_idx = 1
        
#     for idx, e in enumerate(candi[start_idx:]):
#         new_list = cur_list + [e]
#         new_candi = candi[:idx+start_idx]
#         new_length = length-1
        
#         if new_length == 0:
#             # dn_container.append(int(''.join(map(str, new_list))))
#             global search_idx 
#             serach_idx += 1
#             if search_idx == glb_idx:
#                 print(int(''.join(map(str, new_list))))
#                 break
#         else:
#             dn_finder(new_list, new_length, new_candi)

# num_length = 2
# while len(dn_container) <= 1e3:
#     dn_finder([], num_length)
#     num_length += 1
    
# print(dn_container[9: 56])


# 그렇다면 개수를 찾는 문제로 풀 수 있겠다. 
# dn_length_container = [10]
# def count_combination(n, r):
#     repeat_n = r
#     numer, deno = 1, 1
    
#     for _ in range(repeat_n):
#         numer *= n
#         deno *= r
#         n -= 1
#         r -= 1
        
#     return int(numer/deno)


# for i in range(2, 11):
#     dn_length_container.append(count_combination(10, i))
    
# finding_length = -1

# for len_idx, length in enumerate(dn_length_container):
#     search_idx += length
#     if length >= glb_idx+1:
#         finding_length = len_idx
#         search_idx-=length
#         break

# dn_finder([], finding_length+1)
# if finding_length == -1:
#     print(-1)


############################################################################
# 231231(일)
# 이 문제는 트리를 증가시키는 방식으로 풀 수 있다.
N = int(input())
dict_container = {0: {0:0,1:1,2:1,3:1,4:1,5:1,6:1,7:1,8:1,9:1}, 1: {1:1, 2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9}}
cnt = sum(dict_container[0].values())+sum(dict_container[1].values())

while len(dict_container.keys()) <= 9:
    length = len(dict_container.keys())
    dict_container[length] = dict()
    
    for i in range(1, 10):
        dict_container[length][i] = 0
        for key in range(1, i):
            dict_container[length][i] += dict_container[length-1][key]
        
    cnt += dict_container[length][i]

print(dict_container)
summation = 0
for i in range(10):
    summation += sum(dict_container[i].values())
    
if N >= summation-1: 
    print(-1)
    exit()
    
cnt = 0
result = ''
for i in range(10):
    if N < cnt+sum(dict_container[i].values()):
        for j in list(range(i+1))[::-1]:
            for key in dict_container[j].keys(
                
            ):
                cnt += dict_container[j][key]
                if N <= cnt:
                    result += str(key)
                    cnt -= dict_container[j][key]
                    break
    else:
        cnt += sum(dict_container[i].values())
        break
    
print(result)

