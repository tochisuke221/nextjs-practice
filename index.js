"use strict";
// let anyVariable: any = 1
// anyVariable = 'string'
// anyVariable = true
// // エラーにならない
// let numberVariable: number = anyVariable;
// let unkwon: unknown = -1;
// // エラーになる
// numberVariable = unkwon
// // ■ まとめ
// // anyは型チェックが入らない
const object1 = {
    num: 1
};
console.log(object1.num);
console.log(object1.str);
