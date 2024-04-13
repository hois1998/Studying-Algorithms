# import sys
# sys.stdin = open('백준/test.txt', 'r')

# # N, M 각각이 최대 50씩 둘 수 있고 그렇기 때문에 최대 (50-2)(50-2) = 2304개
# # 2304개를 하게 되면 결국에는 겁나 오래걸릴것 같은데

# # 1st 먼저 행렬 A, B 사이에 차이가 발생하는 부분을 적어 놓는다. 그 것들 주위에서만 변환이 발생하면 된다
# # 2nd 왜냐? 홀수 번 뒤집으면 무조건 차이가 생기는데 이 차이가 그곳에는 발생할 필요가 없다. 
# # 3rd 그리고 변환 수를 증가시키면서 최종적으로 변화 지점 n개 모두를 변환해도 답이 없으면 -1출력

# N, M = map(int, input().split())
# def compare_mat(mat1, mat2):
#     new_mat = [[False] * M]*N
#     trans_candi_mat = [[False] * M] * N
    
#     for r in range(N):
#         for c in range(M):
#             if mat1[r][c] != mat2[r][c]:
#                 new_mat[r][c] = True
                
#                 # 후보 만들기
#                 for t_r in range(r-2, r+1):
#                     for t_c in range(c-2, c+1):
#                         if 0<=t_r<N and 0<=t_c<M:
#                             trans_candi_mat[t_r][t_c] = True
                            
#     candi_coord_container = []
#     for n in range(N):
#         for m in range(M):
#             if trans_candi_mat[n][m]:
#                 candi_coord_container.append([n, m])
                
#     return new_mat, candi_coord_container


# def combination(candi, r, result=[]):
#     result_container = []
#     for idx, c in enumerate(candi):
#         new_result = result + [c]
        
#         if r!=1:
#             new_candi = candi[idx+1:]
#             result_container += combination(new_candi, r-1, new_result)
#         else:
#             result_container.append(new_result)
            
#     return result_container
        
# mat1 = [list(input()) for _ in range(N)]
# mat2 = [list(input()) for _ in range(N)]
# n_m, candi_container = compare_mat(mat1, mat2)

# # temp = [1,2,3,4,5]
# # print(combination(temp, 2))
# # 이제 해야 하는 것은 count하면서 candi 행렬에서 선택하는 것
# result = -1
# for i in range(len(candi_container)):
    
#     candi_list = combination(candi_container, i)
    
#     for candi in candi_list:
#         # deep copy
#         cp_n_m = [row[:] for row in n_m]
        
#         for c_r in range(candi[0], candi[0]+3):
#             for c_c in range(candi[1], candi[1]+3):
#                 if 0<=c_r<N and 0<=c_c<M:
#                     cp_n_m[c_r][c_c] = not cp_n_m[c_r][c_c]
#     # 비교 행렬의 엔트리가 모두 False인지 확인
#     for r in range(N):
#         for c in range(M):
#             if n_m[r][c]:

##################################################################
# 231220 다시 풀어 봅시다.
# 그 전에는 풀지 못했습니다. 왜? 버거웠습니다. 그렇지만 지금은 가능할거라 믿습니다. combination과 permutation을 잘 이해하고 있어야 합니다. 
# 이것은 combination을 사용하는 문제입니다.
# import sys
# sys.stdin = open('백준/test.txt')

# rn, cn = map(int, input().split())
# # 만약 플립시킬 수 없는 경우면 그냥 -1을 출력한다
# if rn < 3 or cn < 3:
#     print(-1)
#     exit()
    
# max_flip_n = (rn-2)*(cn-2)

# mat1 = [list(map(int, list(input()))) for _ in range(rn)]
# mat2 = [list(map(int, list(input()))) for _ in range(rn)]


# def combi(r, selected=[], candi=list(range(max_flip_n))):
#     result_container = []
    
#     for idx, i in enumerate(candi):
#         new_selected = selected + [i]
#         if len(new_selected) == r:
#             result_container.append(new_selected)
#         else:
#             new_candi = candi[idx+1:]
#             result_container += combi(r, new_selected, new_candi)
            
#     return result_container

# def deepcopy(mat):
#     new_mat = list()
    
#     for arr in mat:
#         new_mat.append(arr[:])
    
#     return new_mat

# # 명명하는 것을 어떻게 하면 잘 할까?
# for flip_num in range(1, max_flip_n+1):
#     selected_points = combi(flip_num)
#     for idx, points in enumerate(selected_points):
#        selected_points[idx] = list(map(lambda x: [x//(cn-2), x%(cn-2)], points))
    
#     found_num = False
#     for points in selected_points:
#         temp_mat = deepcopy(mat1)
#         # 임시로 만든 행렬을 포인트 조건에 따라 바꾸는다
#         for point in points:
#             for r in range(point[0], point[0]+3):
#                 for c in range(point[1], point[1]+3):
#                     temp_mat[r][c] = (temp_mat[r][c]-1)**2 # 0을 1로 1을 0으로 바꾼다
        
#         # 조건을 적용한 임시 행렬을 정답 행렬인 mat2랑 비교한다
#         element_sum = 0
#         for r in range(rn):
#             for c in range(cn):
#                 element_sum += abs(temp_mat[r][c]-mat2[r][c])
            
#             if element_sum > 0:
#                 break
        
#         if element_sum == 0:
#             print(flip_num)
#             exit()
    
# print(-1)

####################################################################################
# 231221(목)
# 메모리 초과로 문제로 성공 못했다
import sys
sys.stdin = open('백준/test.txt')

rn, cn = map(int, input().split())
mat1 = [list(map(int, list(input()))) for _ in range(rn)]
mat2 = [list(map(int, list(input()))) for _ in range(rn)]

if rn < 3 or cn < 3:
    if mat1==mat2:
        print(0)
    else:
        print(-1)
    exit()
    
cnt = 0

for r in range(rn-2):
    for c in range(cn-2):
        if mat1[r][c] != mat2[r][c]:
            cnt += 1
            for rr in range(r, r+3):
                for cc in range(c, c+3):
                    mat1[rr][cc] = -(mat1[rr][cc]+1)*(mat1[rr][cc]-1)

if mat1==mat2:
    print(cnt)
else:
    print(-1)
                    
            
                    

