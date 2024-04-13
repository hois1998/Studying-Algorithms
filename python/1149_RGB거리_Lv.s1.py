# 이 문제는 전형적인 다이나믹 프로그래밍 문제이다.
import sys
sys.stdin = open('백준/test.txt')

N = int(input())
price_container = [list(map(int, input().split())) for _ in range(N)]

last_cheap_price = price_container[0]
for curr_price in price_container[1:]:
    r = curr_price[0]+min(last_cheap_price[1], last_cheap_price[2])
    g = curr_price[1]+min(last_cheap_price[0], last_cheap_price[2])
    b = curr_price[2]+min(last_cheap_price[0], last_cheap_price[1])
    
    last_cheap_price = [r, g, b]
    
print(min(last_cheap_price))