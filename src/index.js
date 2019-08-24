import _ from 'lodash'
import numRef from './ref.json'

export function numToWord(num) {
    return _.reduce(numRef, (accum, ref) => {
        //console.log("accumulator:", accum);
        //console.log("ref:", ref);
        return ref.num === num ? ref.word : accum
    }, '')
}

//console.log(numToWord(3))

export function wordToNum(word) {
    return _.reduce(numRef, (accum, ref) => {
       // console.log("accumulator:", accum);
       // console.log("ref:", ref);
        return ref.word === word && word.toLowerCase() ? ref.num : accum;
    }, -1)
}


// WordToNum('Four')