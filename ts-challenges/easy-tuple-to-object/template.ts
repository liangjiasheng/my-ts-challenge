// 1、T 约束为一个只读的，元素类型为 string | number | symbol 的数组
// 2、之前使用 kyeof 遍历对象把其中的索引值，也就是对象中的 key 值提取出来，而元祖，也就是获取数组值的方式，在 ts 中是通过 T[number] 来实现
type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [P in T[number]]: P;
};
// as const -> 把数组内的每一项变成字面量（类比 const 声明的常亮）
// typeof -> 把 js 中声明的转成 ts 中可用的
// const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const;

// js 实现思路
// function TupleToObject(arr) {
// 1、判断传入的 arr 中元素是否在可允许类型中（string， number，symbol），否则抛出 error
// 2、新建对象 obj
// 3、遍历转换后的 arr
// 4、遍历出来的每一项同时作为 obj 的 key 和 value
//    const obj = {}
//   arr.forEach(item => {
//     obj[item] = item;
//    })
//   return obj;
// }
