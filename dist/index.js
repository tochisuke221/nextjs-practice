'use strict';

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
console.log(object1.str); // => undefined
// オブジェクトを代入した変数は常に参照として振る舞う
const obj1 = {
    key1: 1,
    key2: 'string'
};
obj1.key1 = 3;
const obj2 = obj1;
obj2.key2 = 'string2';
console.log(obj1);
// 'key1' | 3
const objFunction = (object, key) => {
    return object[key];
};
objFunction({
    key1: 'value1',
    3: 'value3'
}, 'key1');
