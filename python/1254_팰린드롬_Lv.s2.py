# 팰린드롬 만들고 그 최소 길이를 찾는다.
# 아이디어는 flip된 리스트를 갖고 비교하는 위치를 줄여가면서 최소 팰린드롬 길이를 찾는다.

import sys

sys.stdin = open('백준/test.txt')
input_str = input()
flipped_str = input_str[::-1]

length = len(input_str)
for i in range(0, length):
    is_panlindrome = True
    for j in range(i, length):
        if input_str[j] != flipped_str[j-i]:
            is_panlindrome = False
            break
        
    if is_panlindrome:
        print(length+i)
        exit()

