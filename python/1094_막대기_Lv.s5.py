import sys

sys.stdin = open('백준/test.txt', 'r')
s = int(input())
sticks = [1, 2, 4, 8, 16, 32, 64]
sticks.sort(reverse=True)

# print(sticks)
cnt = 0

while 1:
    for i in sticks:
        if i <= s:
            cnt += 1
            s -= i
            break
    if s == 0:
        break
    
print(cnt)
