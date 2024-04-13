import sys
import math
# from decimal import getcontext

coords = list(map(int, input().split()))
xs, ys = [], []

def pita(x1, x2, y1, y2):
    return math.sqrt((x1-x2)**2+(y1-y2)**2)

for i in range(3):
    xs.append(coords.pop(0))
    ys.append(coords.pop(0))

slope1 = 1e5
slope2 = 1e5 # 30%에서 에러 발생한다.
# slope_updated = False # slope_updated는 세 점이 y축에 평행한 축에 함께 위치해 있을 때, -1을 출력시키지 못한다
if xs[0]-xs[1] != 0:
    slope1 = (ys[0]-ys[1])/(xs[0]-xs[1]) # abs를 감싸게 되면 기울기 1과 -1이 서로 같은 기울기로 인식된다.
if xs[1]-xs[2] != 0:
    slope2 = (ys[1]-ys[2])/(xs[1]-xs[2])
# print(slope1, slope2)

no_square = False
if abs(slope1-slope2) < 1e-10:
    # print(f"slope1: {slope1}\nslope2: {slope2}")
    no_square = True

if no_square:
    print(-1.)
else:
    l1 = pita(xs[0], xs[1], ys[0], ys[1])
    l2 = pita(xs[1], xs[2], ys[1], ys[2])
    l3 = pita(xs[2], xs[0], ys[2], ys[0])
    
    l_container = [l1,l2,l3]
    l_container.sort()
    max_l = 2*(l_container[1]+l_container[2])
    min_l = 2*(l_container[0]+l_container[1])
    print(2*(-l_container[0]+l_container[2]))
    # print(max_l-min_l)
