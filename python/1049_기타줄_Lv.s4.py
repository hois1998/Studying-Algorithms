import sys

# 머리가 유연해야 한다. 
# 최솟값을 구해야 하는데 줄을 더 많이 사고 버려도 여전히 패키지를 필요한 줄 수 커버하는 것보다 많이 사도 된다면 당연히 패키지를 사는 것이 이득이다. 
# 한번 꼰 문제다. 생각해 볼 수 있어서 좋다

sys.stdin = open('백준/test.txt')
N, store_n = map(int, input().split())
package_price, each_price = 1000, 1000

for i in range(store_n):
    p, e = list(map(int, input().split()))
    if p < package_price:
        package_price = p
    if e < each_price:
        each_price = e

# print(package_price, each_price)
can_use_package_price = False
if package_price < each_price*6:
    can_use_package_price = True
    
if can_use_package_price:
    package_num = N // 6
    rest_num = N-package_num*6
    if package_price < rest_num*each_price:
        result = (package_num+1)*package_price
    else:
        result = package_num*package_price + rest_num*each_price
else:
    result = N*each_price
print(result)