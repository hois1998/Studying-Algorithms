import sys

sys.stdin = open('백준/test.txt')
arr = [x/100 for x in list(map(int, input().split()))]
p = [[0]*8 for _ in range(8)]
dp = [[0]*8 for _ in range(4)]
idx = 0
for i in range(8):
    for j in range(i+1, 8):
        p[i][j] = arr[idx]
        p[j][i] = 1-p[i][j]
        idx += 1
    dp[0][i] = 1
    
for i in range(1, 4):
    for j in range(8):
        for k in range(8):
            if (j >> i) == (k >> i) and (j >> (i-1)) != (k >> (i-1)):
                dp[i][j] += dp[i-1][j] * dp[i-1][k] * p[j][k]
                
print(dp[3])
    

