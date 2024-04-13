const fs = require("fs");
const addr = process.platform === "win32" ? "./test.txt" : "/dev/stdin";
let input = fs.readFileSync(addr).toString().trim().split("\n");

input.shift();

let len = input.length;
let arr = [];
let result = "";    //이것 대신 배열을 만들고 나중에 join메소드를 이용해 출력을 더 편하게 할 수 있다. 

class Queue {
    constructor() {
        this.size = 0;
        this.rootNode = null;   //pop할 때 사용한다. 
        this.currentNode = null;
    }

    makeNode(val, prev, next) {
        return {
            val,
            prev,
            next
        };
    }

    push(val) {
        //새롭게 만들어질 current node의 next와 prev를 업데이트
        let prev = this.currentNode;
        let next = null;

        //current node만듬
        let newCurNode = this.makeNode(val, prev, next);

        if (prev !== null) {
            prev.next = newCurNode;
        } else {
            //최초의 루트노드 설정시키기
            this.rootNode = newCurNode;
        }

        //만든 current node를 실제 currentNode변수에 넣어
        this.currentNode = newCurNode;
        this.size++;
    }

    pop() {
        let size = this.size;

        if (size === 0)
            return -1;

        let rootVal = this.rootNode.val;

        if (size > 2) {
            //사이즈가 3이상일 때만 적용
            this.rootNode = this.rootNode.next;
        } else if (size === 2) {
            this.currentNode.prev = null;
            this.rootNode = this.rootNode.next;
 
        } else if (size === 1) {
            this.currentNode = null;
            this.rootNode = null;
        }

        this.size--;
        return rootVal;
    }

    getSize() {
        return this.size;
    }

    empty() {
        if  (this.size === 0) {
            return 1;
        } else {
            return 0;
        }
    }

    front() {
        if (this.size === 0) return -1;
        return this.rootNode.val;
    } 

    back() {
        if (this.size === 0) return -1;
        return this.currentNode.val;
    }    
};

let queue = new Queue();

for (let i=0; i<len; ++i) {
    [command, inputVal] = input[i].trim().split(" ");

    switch (command) {
        case "push":
            queue.push(+inputVal);
            break;
        case "pop":
            arr.push(queue.pop());
            break;
        case "size": 
            arr.push(queue.getSize());
            break;
        case "empty":
            arr.push(queue.empty());
            break;
        case "front":
            arr.push(queue.front());
            break;
        case "back":
            arr.push((queue.back()));
        default:
            break;
    }
}

console.log(arr.join("\n"));

// const fs = require("fs");
// const addr = process.platform === "wind32" ? "./test.txt" : "/dev/stdin";
// let input = fs.readFileSync(addr).toString().trim().split("\n");

// input.shift();

// let len = input.length;
// let arr = [];
// let result = "";    //이것 대신 배열을 만들고 나중에 join메소드를 이용해 출력을 더 편하게 할 수 있다. 

// for (let i=0; i<len; ++i) {
//     let temp = input[i];
//     let chr= temp.slice(0, 2);

//     switch (chr) {
//         case "pu":
//             let num = +temp.split(" ")[1]
//             arr.push(num);
//             // result += `${num}\n`;
//             break;
//         case "po":
//             if (arr.length === 0) {
//                 result += "-1\n";
//             } else {
//                 let num = arr.shift();
//                 result += `${num}\n`;
//             }
//             break;
//         case "si": 
//             let size = arr.length;
//             result += `${size}\n`;
//             break;
//         case "em": {
//             let size = arr.length;
//             if (size === 0) {
//                 result += "1\n";
//             } else {
//                 result += "0\n";
//             }
//             break;
//         }
//         case "fr": 
//             if (arr.length === 0) {
//                 result += "-1\n";
//             } else {
//                 result += `${arr[0]}\n`;
//             }
//             break;
//         case "ba":
//             if (arr.length === 0) {
//                 result += "-1\n";
//             } else {
//                 result += `${arr[arr.length-1]}\n`;
//             }
//             break;
//         default:
//             console.log("something wrong", temp);
//             break;
//     }
    
// }

// console.log(result);


