// "use strict";
// // let anyVariable: any = 1
// // anyVariable = 'string'
// // anyVariable = true
// // // エラーにならない
// // let numberVariable: number = anyVariable;
// // let unkwon: unknown = -1;
// // // エラーになる
// // numberVariable = unkwon
// // // ■ まとめ
// // // anyは型チェックが入らない
// const object1 = {
//     num: 1
// };
// console.log(object1.num);
// console.log(object1.str); // => undefined
// // オプショナルチェーン
// // Rubyでいうぼっち演算子
// let obj = undefined;
// obj === null || obj === void 0 ? void 0 : obj.test; //=> undefinedとなる
// // オブジェクトを代入した変数は常に参照として振る舞う
// const obj1 = {
//     key1: 1,
//     key2: 'string'
// };
// obj1.key1 = 3;
// const obj2 = obj1;
// obj2.key2 = 'string2';
// console.log(obj1);
// //=> { key1: 3, key2: 'string2' }
// // 配列
// const aryNums = [0, 1, 2];
// const aryStrings = ['str1', 'str2'];
// const objeArgFunc = (arg) => {
//     if (arg.strVal === "str1") {
//         return true;
//     }
//     return false;
// };
// // ジェネリクス
// const genericFunc = (arg) => {
//     return arg;
// };
// // T型を引数や戻り値の型解釈に使える。
// genericFunc('string');
// // 推測してくれる
// genericFunc('string');
// genericFunc(123);
// const genericTypeFunc = {
//     value: 'string'
// };
// // 'key1' | 3
// const objFunction = (object, key) => {
//     return object[key];
// };
// objFunction({
//     key1: 'value1',
//     3: 'value3'
// }, 'key1');
// const object = {
//     key3: 1,
//     key4: 2
// };
// const attributeKey = {
//     anyString: 'string'
// };
// const object3 = {
//     key1: 1,
//     3: 3
// };

import fetch from 'node-fetch'

fetch('https://api.publicapis.org/entries').then(response => {
    console.log(response)
})
console.log('nextjs')

