"use strict";
let anyVariable = 1;
anyVariable = 'string';
anyVariable = true;
// エラーにならない
let numberVariable = anyVariable;
let unkwon = -1;
// エラーになる
numberVariable = unkwon;
// ■ まとめ
// anyは型チェックが入らない
