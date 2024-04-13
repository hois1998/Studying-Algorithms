import sys
import math

sys.stdin = open('백준/test.txt')
X, Y = map(int, input().split())

new_var = math.trunc(100*Y/X)
print(new_var)
if new_var >= 99:
    print(-1)
    exit()
    
i = math.ceil((X-Y)/(1-(1+new_var)*0.01))-X-1
while 1:
    if 100*(Y+i) >= (1+new_var)*(X+i):
        print(i)
        break
    i += 1
    