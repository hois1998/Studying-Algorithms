import sys
import math
# from decimal import getcontext

sys.stdin = open('백준/test.txt')
coords = list(map(int, input().split()))
xs, ys = [], []

def pita(x1, x2, y1, y2):
    return ((x1-x2)**2+(y1-y2)**2)**0.5

for i in range(3):
    xs.append(coords.pop(0))
    ys.append(coords.pop(0))

# slope 3 개를 만들어서 서로 3C2로 세 번 비교하는 아이디어를 생각했지만 발문에서 이미 '세 개의 서로 다른 점'이 주어진다고 나와있다. 
# 따라서 임의로 두 개의 slope를 만들고 그것의 기울기가 동일한지만 비교하면 된다. 
slope1 = 1e5
slope2 = 1e5
if xs[0]-xs[1] != 0:
    slope1 = (ys[0]-ys[1])/(xs[0]-xs[1])
if xs[1]-xs[2] != 0:
    slope2 = (ys[1]-ys[2])/(xs[1]-xs[2])


# if (xs[0]-xs[1])*(ys[1]-ys[2]) == (xs[1]-xs[2])*(ys[0]-ys[1]):
#     # print(f"eqaul slope: {equal_slope_cnt}")
#     print(-1.)
if slope1 == slope2:
    print(-1.)
else:
    l1 = pita(xs[0], xs[1], ys[0], ys[1])
    l2 = pita(xs[1], xs[2], ys[1], ys[2])
    l3 = pita(xs[2], xs[0], ys[2], ys[0])
    l_container = [l1,l2,l3]
    max_l = 2*(l_container[1]+l_container[2])
    min_l = 2*(l_container[0]+l_container[1])
    print(2*(-min(l_container)+max(l_container)))
    # print(max_l-min_l)
