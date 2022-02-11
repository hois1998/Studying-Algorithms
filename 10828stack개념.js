const fs = require("fs");
let input = fs.readFileSync("./test.txt").toString().trim().split("\n");

input.shift();

let result = "";

class Stack {
    constructor() {
        this.arr = [];
    }

    find(str) {
        if (str === "pop") {
            this.pop();
        } else if (str === "size") {
            this.size();
        } else if (str === "top") {
            this.top()
        } else if (str === "empty") {
            this.empty();
        } else if (str.search("push")+1) {
            let num = +str.split(" ")[1];
            this.push(num);
        } else {
            console.log("something worong when parse string!");
        }

    }

    pop() {
        if (this.arr.length === 0) {
            result += "-1\n";
        } else {
            result += `${this.arr.pop()}\n`;
        }
    }

    size() {
        result += `${this.arr.length}\n`;
    }

    top() {
        let len = this.arr.length
        if (len === 0) {
            result += "-1\n";
        } else {
            result += `${this.arr[len-1]}\n`;
        }
    }

    empty() {
        let len = this.arr.length;

        if (len === 0) {
            result += "1\n";
        } else {
            result += "0\n";
        }
    }

    push(num) {
        this.arr.push(num);
    }
}

let ins = new Stack();

for (let e of input) {
    ins.find(e);
}

console.log(result);