import sys
sys.stdin = open('백준/test.txt', 'r')

[king, stone, total_move] = input().split(' ')
total_move = int(total_move)

# 킹과 스톤의 초기 좌표 설정해 주기
king = list(king)
king[0] = ord(king[0])-ord('A')
king[1] = int(king[1])-1
stone = list(stone)
stone[0] = ord(stone[0]) - ord('A')
stone[1] = int(stone[1])-1

move_coord_container = []
for _ in range(total_move):
    temp_move = input()
    x, y = 0, 0
    
    if temp_move == 'R':
        y += 1
    elif temp_move == 'L':
        y += -1
    elif temp_move == 'B':
        x += -1
    elif temp_move == 'T':
        x += 1
    elif temp_move == 'RT':
        x += 1
        y += 1
    elif temp_move == 'LT':
        x += 1
        y += -1
    elif temp_move == 'RB':
        x += -1
        y += 1
    elif temp_move == 'LB':
        x += -1
        y += -1
    else:
        print(f'wrong command: {temp_move}')
        
    move_coord_container.append([x, y])

for x, y in move_coord_container:
    king = [king[0]+y, king[1]+x]
    stone_changed = False
    
    if king[0] == stone[0] and king[1] == stone[1]:
        stone = [stone[0]+y, stone[1]+x]
        stone_changed = True
        
    if not (0 <= king[0] <= 7 and 0 <= king[1] <= 7 and 0 <= stone[0] <= 7 and 0 <= stone[1] <= 7):
        king = [king[0]-y, king[1]-x]
        if stone_changed:
            stone = [stone[0]-y, stone[1]-x]
            

result = ''
result += f"{chr(ord('A')+king[0])}{king[1]+1}\n"
result += f"{chr(ord('A')+stone[0])}{stone[1]+1}"
print(result)
    
    
    
# 조건으로 밖으로 움직이는 경우
# 돌이 있는 방향으로 움직이는 경우
