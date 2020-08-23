/* webpack numbers library
*  v1.0.1
*  author: xutai
*/
import _ from 'lodash'
import numRef from './ref.json'
export {
    consoleApi,
    consoleAll
 } from './console.mjs'


export function numToWord(num) {
    return _.reduce(numRef, (accum, ref) => {
      return ref.num === num ? ref.word : accum;
    }, '');
  }

export function wordToNum(word) {
    return _.reduce(numRef, (accum, ref) => {
        return ref.word === word && word.toLowerCase() ? ref.num : accum;
    }, -1);
}


