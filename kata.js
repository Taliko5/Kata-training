//Kata

//lv.7
//Given a number, write a function to output its reverse digits. 
// (e.g. given 123 the answer is 321)
// Examples
// 123 - > 321 -
//     456 - > -654
// 1000 - > 1

function reverseNumber(n) {
    let str = n.toString()
    let strChan = str.split("");
    let reverse = strChan.reverse();
    let joined = parseFloat(reverse.join(""));

    if (n < 0) return -joined
    return joined

}

reverseNumber(-123)
// better one

function reverseNumber(n) {
    let str = n.toString().split("").reverse();
    let joined = parseFloat(str.join(""));

    if (n < 0) return -joined
    return joined

}
reverseNumber(-123)

//best solution in Kata
reverseNumber = n => (n > 0 ? 1 : -1) * Math.abs(n).toString().split('').reverse().join('')



// Lv.7
//Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

// For example: ["3:1", "2:2", "0:1", ...]

// Write a
// function that takes such collection and counts the points of our team in the championship.Rules
// for counting points
// for each match:

//     if x > y - 3 points
// if x < y - 0 point
// if x = y - 1 point

function points(games) {
    const total = games.reduce(function (acc, v) {
        const store = v.split(':').map(function (el) {
            return Number(el)
        })
        //['1','0'] -> [11,1]

        if (store[0] > store[1]) {
            return acc + 3
        } else if (store[0] === store[1]) {
            return acc + 1;
        }
        return acc
    })
}

// 7kyu
//  The year of 2013 is the first year after the old 1987 with only distinct digits.

// Now your task is to solve the following problem: given a year number, find the minimum year number which is strictly larger than the given one and has only distinct digits.
// Input/Output

//     [input] integer year  1000 ≤ year ≤ 9000  [output] an integer

//find out if it is true oe not
function hasOnlyDistingtDigit(year) {
    // const digits = year + ' ';
    const unique = [];
    const digits = year.stoString().split('');
    digits.forEach((el, idx) => {
        if (digits.indexOf(digit) === -1) {
            uniques.push(digit);
        }

    });

    if (unique.length === digits.length) {
        return true;
    }
    return false

}
//find out if it is true oe not
function hasOnlyDistingtDigit(year) {
    const digits = year.stoString().split("");

    digits.every(function (digit) {
        if (digits.indexOf(digit) === digit.lastIndexOf(digit)) {
            return true
        }
        return false
    })

}

//find out if it is true oe not
function hasOnlyDistingtDigit(year) {
    const digits = year.stoString().split("");
    const unique = new Set(digit);
    if (digits.len)
}

//counting
function distinctDigitYear(year) {

    for (let i = year + 1;; i++) {
        //i<= 9012 withought writing limit
        // it stops untill the condition:
        // 9000 is 9012 is next distinct gidits 
        if (hasOnlyDistingtDigit(i)) {
            retrun i;
        }
    }
}

//kata 8

function warnTheSheep(queue) {
    const nr = queue.indexOf("wolf");
    const mehNr = queue.length - nr - 1;
    return nr === queue.length - 1 ? "Pls go away and stop eating my sheep" :
        "Oi! Sheep number " + mehNr + "! You are about to be eaten by a wolf!"

}

function warnTheSheep(queue) {
    const reverse = queue.slice().reverse();
    if (reverse[0] === 'wolf') return 'Pls go away and stop eating my sheep';
    const mehNr = reverse.indexOf("wolf")
}

const Sheep = queue => queue.indexOf('wolf') === queue.length - 1 ? "Pls go away and stop eating my sheep" :
    `Oi! Sheep number ${queue.length -1 wolfindexOf } ! You are about to be eaten by a wolf!`


    // kata 7 
    // In a factory a printer prints labels
    // for boxes.For one kind of boxes the printer has to use colors which,
    //     for the sake of simplicity, are named with letters from a to m.

    // The colors used by the printer are recorded in a control string.For example a "good"
    // control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

    //     Sometimes there are problems: lack of colors, technical malfunction and a "bad"
    // control string is produced e.g.aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

    