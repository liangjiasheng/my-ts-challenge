// extends -> 约束 -> 对应 js 中的 in 关键字
//    可以对传入的 union（如 "title | "completed""） 进行遍历，依次判断其是否存在于 T（如 TODO ）
// keyof -> lookup -> forEach
//    可以把 T 中的属性遍历提取成 union -> "key1" | "key2" | "key3"...
// in -> 遍历 union 中的每一项，如提取处 key1，key2，key3 作为索引，类型值为 T[P]（如 TODO["title"] ）-> newObj[key]
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

// js 的实现思路
// 1、创建新对象 newObj
// 2、遍历 keysj
// 3、判断 key 是否属于 obj
// 4、把 obj[key] 的值赋给 newObj[key]上
// 5、返回新对象 newObj
// function MyPick(obj, keys) {
// 	const newObj = {}
// 	keys.forEach(key => {
// 		if (key in obj) {
// 			newObj[key] = obj[key]
// 		}

// 	});
// 	return newObj
// }
