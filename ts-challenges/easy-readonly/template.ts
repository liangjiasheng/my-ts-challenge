type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

// js 的实现思路
// function MyReadonly(raw) {
// 思路1
// 1、创建一个新对象
// 2、遍历对象 mapped -> in 关键字；lookup -> keyof 关键字
// 3、给每个 key 加上 readonly 关键字
// 4、把 raw[key] 的值赋给新对象
// 5、返回新对象
// 	const result = {};
// 	for (const key of raw) {
// 		result[`readonly ${key}`] = raw[key];
// 	}
// 	return result;

// 思路2
// 	return new Proxy(raw, {
// 		get(target, key) {
// 			return Reflect.get(target, key);
// 		},
// 		set(target, key, value) {
//                      console.warn(`key: ${key} cannot be modified`);
// 			return false;
// 		}
// 	})
// }
