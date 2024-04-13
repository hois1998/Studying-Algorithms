# 이 문제는 각 자릿수의 8을 최소화한 수의 8개수를 찾는 것이다. 
# 찾는 과정에서 최소 수에서 시작을 하는데 최소수인 L에 값을 더해서 정답을 찾는다.
# 찾는 방법으로 각 자리수의 존재하는 8을 제거하려면 필요한 합을 구하고 그 수만큼을 최댓값과의 차에서 제거하면서 간다.
import sys
sys.stdin = open('백준/test.txt', 'r')

L, R = map(int, input().split())
diff = R-L

l_digit = list(str(L))
for idx in range(len(l_digit)):
    if l_digit[len(l_digit)-1-idx] == '8':
       add_num = (9*10**idx)-(L%10**(idx+1))
       if diff >= add_num:
           diff -= add_num
           L += add_num
       else:
           break
cnt = 0
for i in list(str(L)):
    if i == '8':
        cnt += 1

print(cnt)


