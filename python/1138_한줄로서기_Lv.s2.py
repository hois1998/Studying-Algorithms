import sys
sys.stdin = open('백준/test.txt', 'r')

N = int(input()) # N의 최대가 10까지만이나ㅣ까
input_members = list(map(int, input().split()))

refined_member = [] # [height 순서, 왼쪽에 키 큰 사람 수] 페어로 놓는다. 
result = []
for idx, higher_num in enumerate(input_members):
    refined_member.append([idx+1, higher_num])
    
while len(refined_member) != 0:
    for t_idx, [t_height, t_higher_num] in enumerate(refined_member):
        larger_cnt = 0
        for result_e in result:
            if result_e > t_height:
                larger_cnt += 1
                
        if t_higher_num == larger_cnt:
            result.append(t_height)
            refined_member = refined_member[:t_idx] + refined_member[t_idx+1:]
            break
        
print(" ".join(map(str, result)))