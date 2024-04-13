# 어비스 오엘 우테에 속한 수
# 이면수: (2n+3m으로 표현되는 수 그러면서 4보다 큰 수 ) 그리고 (각 자리수의 합이 홀수)
# 임현수: (2 또는 4) 또는 (합성수이면서 소인수 분해하면 종류가 짝수개)
# 성경수: 이면수도 임현수도 아닌 수
# 이면수이면서 임현수

# 일단 에라토스테네스 채를 찾는다.
import sys
sys.stdin = open('백준/test.txt')

n = int(input())
result = [0, 0]

n_chr = list(map(int, list(str(n))))
# print(f"n_chr {n_chr}")
# print(f"sum {sum(n_chr)}")
nn = [0] * int(2700**0.5+1)
nn[0] = 1
nn[1] = 1
nn_length = len(nn)

prime = []
for idx, e in enumerate(nn):
    if e == 0: 
        prime.append(idx)
        i = 2
        while i*idx < nn_length:
            nn[i*idx] = 1
            i += 1
        
# 이면수인지 확인하자
if n >=6 and sum(n_chr)%2 == 1:
    result[0] = 1
    
# 임현수 확인
if n==2 or n==4:
    result[1] = 1
else:
    temp_n = n
    cnt_prime = 0
    target_prime = []
    for prime_e in prime:
        if temp_n%prime_e == 0:
            cnt_prime += 1
            target_prime.append(prime_e)
            while temp_n%prime_e == 0:
                temp_n /= prime_e
    if temp_n != 1:
        target_prime.append(int(temp_n))
        cnt_prime += 1
        
    if cnt_prime % 2 == 0 and cnt_prime>0:
        result[1] = 1
    
result_sum = 2*result[0]+result[1]

# print(f"target prime: {target_prime}")
# print(f"prime # count {cnt_prime}")
# print(result)

if result_sum == 0:
    print(3)
elif result_sum == 1:
    print(2)
elif result_sum == 2:
    print(1)
else:
    print(4)

# 발문을 제대로 이해하는 것이 중요한데 너무 기니까 차이가 난다. 
# 어떻게 빠르게 읽어야 할지 모르겠다. 