# 이 문제는 언더프라임의 정의가 어떤 수를 소인수분해한 소수 개수가 소수개이다라는 것으로부터 문제를 해결하는데 
# 에라토스테네스 채에서 처럼 먼저 소수를 찾는다. 1e6이니 100이하의 소수만 찾으면 된다.
# 에라토스테네스 채에서는 어떤 수 N를 소인수 분해할 때 소인수의 최대값은 무엇일까라는 질문에서 출발한다.
# 1. 457 * 3 은 3으로 나눠서 소인수 457이 남는다
# 2. 그렇지만 어떤 소수로 제곱한 수는 아니다. 
# 3. 약수 구하는 과정은 수가 N일 때, √N을 구하고 그것보다 작은 소수에서 약수를 찾는다. 
# 4. 약수로 N을 나 눠도 여전히 1아닌 457*3의 경우는 457이 남을 텐데 그것을 자체로 소수로 취급하면 되고 
# 5. 나누니  1이 된거면 소인수분해를 완료한 것으로 생각하면 된다. 
import sys
import math
sys.stdin = open('백준/test.txt')
a, b = map(int, input().split())
N = math.ceil(100000**0.5)

prime_container = list(map(lambda x: [x, 1], list(range(N+1))))
prime_container[0][1] = 0
prime_container[1][1] = 0

for prime in prime_container:
    num, is_prime = prime
    if is_prime:
        for i in range(num+num,N+1,num):
            prime_container[i][1] = 0
            
found_prime_container = []
for prime in prime_container:
    if prime[1]:
        found_prime_container.append(prime[0])

# print(found_prime_container)
cnt = 0    
for n in range(a, b+1):
    divide_cnt = 0
    for prime_n in found_prime_container:
        if n == 1:
            break
        
        if n % prime_n == 0:
            while n % prime_n == 0:
                n //= prime_n
                divide_cnt += 1
    if n != 1:
        divide_cnt += 1
    
    if divide_cnt in found_prime_container:
        cnt += 1
        
print(cnt)