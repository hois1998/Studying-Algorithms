import sys

# 아이디어는 두 리스트를 각각 오름차순, 내림차순으로 정렬하고 각 인덱스의 원소끼리 곱하면 최소값을 얻는다.
sys.stdin = open('백준/test.txt')
N = int(input())
arr_a = list(map(int, input().split()))
arr_b = list(map(int, input().split()))
# print(arr_a, arr_b)

arr_a = sorted(arr_a, reverse=True)
arr_b = sorted(arr_b)

result = 0
for i in range(N):
    result += arr_a[i]*arr_b[i]
    
print(result)