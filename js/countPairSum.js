'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}




/*
 * Complete the 'countPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY arr
 *  2. LONG_INTEGER k
 */

function countPairs(arr, k) {
    let pairs = [];
    // Write your code here

    for(let i=0;i<arr.length;i++){
        if(arr.includes(k-arr[i])){
            let min = Math.min(arr[i], k-arr[i])
            let max = Math.max(arr[i], k-arr[i])
            pairs.push(min.toString()+","+max.toString());
        }
    }
    
    let finalPair = new Set(pairs);
    
    return finalPair.size;

}




function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    let arr = [];

    for (let i = 0; i < arrCount; i++) {
        const arrItem = parseInt(readLine().trim(), 10);
        arr.push(arrItem);
    }

    const k = parseInt(readLine().trim(), 10);

    const result = countPairs(arr, k);

    ws.write(result + '\n');

    ws.end();
}
