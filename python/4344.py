cnt = int(input())
for _ in range(cnt):
    t_case = list(map(int, input.split()))
    t_num, t_scores = t_case[0], t_case[1:]
    
    sum = 0
    for score in t_scores:
        sum += score
    
    avg = sum / t_num
    print(f"{avg:.3f}%")