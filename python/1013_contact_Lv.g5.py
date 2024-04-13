import sys
sys.stdin = open('백준/test.txt', 'r')


# regular expression에 대해 배워야 한다.

test_N = int(input())
input_list = []
for _ in range(test_N):
    input_list.append(input())
    
for input in input_list:
    while len(input) != 0:
        input_len = len(input)
        temp_idx = 0
        if input[temp_idx] == '1':
            temp_idx += 1
            if not (temp_idx < input_len and input[temp_idx] == '0'):
                break
            temp_idx += 1
            if not (temp_idx < input_len and input[temp_idx] == '0'):
                break
            temp_idx += 1
            while temp_idx < input_len and input[temp_idx] == '0':
                temp_idx += 1
            pass_one = False
            while temp_idx < input_len and input[temp_idx] == '1':
                pass_one = True
                temp_idx += 1
                if temp_idx+1 < input_len and input[temp_idx] == '0' and input[temp_idx+1] == '1':
                    temp_idx += 2
                    break
            
                if temp_idx+2 < input_len and input[temp_idx] == '1' and input[temp_idx+1] == '0' and input[temp_idx+2] == '0':
                    break
                
            if not pass_one:
                break
            else:
                input = input[temp_idx:]
        else:
            temp_idx += 1
            if not (temp_idx < input_len and input[1] == '1'):
                break
            
            input = input[2:]
            
    if len(input) == 0:
        print('YES')
    else:
        print('NO')