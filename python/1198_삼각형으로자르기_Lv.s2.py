# N개의 좌표를 받고 그 중 세개 를 선택해서 넓이를 구하는 브루트포스
import sys

sys.stdin = open('백준/test.txt')
N = int(input())
coords = list()

for _ in range(N):
    coords.append(list(map(int, input().split())))
    
def combination(r, candi, ans=[]):
    new_ans = list()
    for idx, c in enumerate(candi):
        temp_ans = ans+[c]
        if r==1:
            new_ans.append(temp_ans)
        else:
            new_candi = candi[idx+1:]
            new_ans += combination(r-1, new_candi, temp_ans)
            
    return new_ans

def pythagoras(x, y):
    return ((x[0]-y[0])**2+(x[1]-y[1])**2)**0.5

def calc_area(x, y, z):
    l1 = pythagoras(x, y)
    l2 = pythagoras(y, z)
    l3 = pythagoras(z, x)
    s = (l1+l2+l3)/2
    
    return (s*(s-l1)*(s-l2)*(s-l3))**0.5

idx_candi_container = combination(3, list(range(0, N)))

max_area = 0
for idx_candi in idx_candi_container:
    x, y, z = coords[idx_candi[0]], coords[idx_candi[1]], coords[idx_candi[2]]
    temp_area = calc_area(x,y,z)
    if temp_area > max_area:
        max_area = temp_area

print(max_area)
