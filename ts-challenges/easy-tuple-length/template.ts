// 元祖
//   - 定长
//   - 索引所对应的每个位置都约束了类型
type Length<T extends readonly string[]> = T["length"];

// 测试用例
// readonly[("tesla", "model 3", "model X", "model Y")];

type strArr = string[];
// 显示：type str = number（原因是一个 string 类型的 数组，是不定长的，所以取到的值是一个 number 类型）
type str = strArr["length"];

type strTuple = [string, number];
// 显示：type strTu = 2（原因是 tuple 是定长的，所以取到的 length 是一个具体的值）
type strTu = strTuple["length"];
// js 实现思路
// function Length(arr) {
//   if (!Array.isArray(arr)) return throw new Error();
//   return arr.length;
// }
