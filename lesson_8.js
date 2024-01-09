//1
const students = [
    { name: 'Павел', age: 20 },
    { name: 'Иван', age: 20 },
    { name: 'Эдем', age: 20 },
    { name: 'Денис', age: 20 },
    { name: 'Виктория', age: 20 },
    { age: 40 },
]

function pickPropArray(students, property){
    let properties = [];
    for (let element of students){
        if (element.hasOwnProperty(property))
            properties.push(element[property])
    }
    return properties;
}

const result = pickPropArray(students, 'name')

console.log(result)

//2

function createCounter() {
    let count = 0;
    return function () {
        count++;
        console.log(count)
    }
}

const counter1 = createCounter()
counter1() // 1
counter1() // 2

const counter2 = createCounter()
counter2() // 1
counter2() // 2

//3

function spinWords(text){
    let txet = "";
    let words = text.split(" ")
    for (let word of words){
        if(word.length >= 5){
            txet += word.split("").reverse().join("") + " ";
        }
        else{
            txet += word + " "
        }
    }
    return txet.trim();
}

const result1 = spinWords( "Привет от Legacy" )
console.log(result1) // тевирП от ycageL

const result2 = spinWords( "This is a test" )
console.log(result2) // This is a test

//4
function SumCheck(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
}

let nums = [2,7,11,15];
let target = 9;
console.log(SumCheck(nums, target));

//5
function Prefix(strings) {
    res = "";
    for (let i = 0; i < strings[0].length; i++) {
        prefix = strings[0][i];
        for (let j = i + 1; j < strings[0].length; j++) {
            prefix += strings[0][j];
            check = true;
            for (let k = 0; k < strings.length; k++)
                if (!strings[k].includes(prefix)) {
                    check = false;
                    break
                }
            if (check && prefix.length > res.length) res = prefix;
        }
    }
    return res;
}

strs = ["цветок","поток","хлопок"]
console.log(Prefix(strs))

strs = ["собака","гоночная машина","машина"]
console.log(Prefix(strs))