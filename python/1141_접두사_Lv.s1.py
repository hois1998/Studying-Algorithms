import sys

sys.stdin = open('백준/test.txt')
N = int(input())
word_container = [[input(), i, []] for i in range(N)]

for word_info in word_container:
    selected_word = word_info[0]
    for x in word_container[0:word_info[1]]+word_container[word_info[1]+1:]:
        if len(x[0])>=len(selected_word) and x[0][0:len(selected_word)] == selected_word:
            word_container[word_info[1]][2].append(x[1])
            
# print(word_container) # [['hello', 0, []], ['hi', 1, []], ['h', 2, [0, 1]], ['run', 3, [5]], ['rerun', 4, []], ['running', 5, []]]
while sum(len(entry[2]) for entry in word_container) > 0:
    word_container = sorted(word_container, key=lambda x: len(x[2]), reverse=True)
    remove_idx = word_container[0][1]
    word_container.pop(0)
    
    for idx, word_info in enumerate(word_container):
        word_container[idx][2] = [x for x in word_container[idx][2] if x != remove_idx]
    
print(len(word_container))
    

        
        
    