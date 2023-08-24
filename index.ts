

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

const object1: { 
  num: number,
  str?: string
} = {
  num: 1
}

console.log(object1.num)
console.log(object1.str) // => undefined


// オプショナルチェーン
// Rubyでいうぼっち演算子
let obj: any = undefined;
obj?.test //=> undefinedとなる

// オブジェクトを代入した変数は常に参照として振る舞う

const obj1 = {
  key1: 1,
  key2: 'string'
}

obj1.key1 = 3

const obj2 = obj1

obj2.key2 = 'string2'

console.log(obj1)
//=> { key1: 3, key2: 'string2' }


