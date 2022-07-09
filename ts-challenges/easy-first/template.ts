// 方案一：通过 extends 判断 T 是否为空数组
//   是 - 返回 never
//   否 - 返回数组中的第一个元素
// type First<T extends any[]> = T extends [] ? never : T[0];

// 方案二：获取 T 的 length 属性
// type First<T extends any[]> = T["length"] extends 0 ? never : T[0];

// 方案三：通过 extends 判断 T 第一个元素是否在 union 中
//   case: [1, 2, 3] - T[0] 一次和遍历出的 uinion 匹配
//     T[0] - 1
//     T[number] - 1 | 2 | 3
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never;

// 方案四：通过 infer 推断出 First
type First<T extends any[]> = T extends [infer First, ...infer Rest]
  ? First
  : never;

// js 实现思路
// function First(arr) {
// 方案一：
// 1、判断 arr 是空数组的话，返回 never
// 2、返回 arr 中第一个元素
// if (Array.isArray(arr) && !arr.length) return never;

// return arr[0];
// 方案二：
// return Aarray.isArray(arr) && !arr.length ? never : arr[0]

// 方案三：
// Aarray.isArray(arr) && arr.includes(arr[0]) ? arr[0] : never;

// 方案四
// const [first, ...rest] = arr;
// return first || never
// }
