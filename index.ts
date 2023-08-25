

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

// 配列

const aryNums: number[] = [0, 1, 2]
const aryStrings: string[] = ['str1', 'str2']

// 普通type使わね？
const objeArgFunc = (arg: {
  strVal: 'string'
}): boolean => {
  if(arg.strVal == 'string1'){
    return true;
  }

  return false
}

// ジェネリクス
const genericFunc = <T>(arg: T): T => {
  return arg
}

// T型を引数や戻り値の型解釈に使える。
genericFunc<string>('string') 
// 推測してくれる
genericFunc('string') 
genericFunc(123) 

// 型もジェネリックにできる
type Generic<T>{
  value: T
}

const genericTypeFunc: Generic<string> = {
  value: 'string'
}

type NewType = {
  number: number,
  string: string
}

type PartialNewType = Partial<NewType>
//
// {
//   number?: number || undefined;
//   string?: string || undefined;
// }
//
type RequireNewType = Required<NewType>
// {
  //   number: number;
  //   string: string;
  // }
type PickNewType = Pick<NewType, 'number'>
// {
//   number: number
// }
type OmitNewType = Omit<NewType, 'number'>
// {
//   string: string
// }

type UnionType = 'a' | 'b' | 'c'

type ExcludeUnionType = Exclude<UnionType, 'a' | 'b'>
// 'c'
type ExtractUnionType = Extract<UnionType, 'a' | 'b'>
// 'a' | 'b'
