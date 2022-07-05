type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

// js 的实现思路
// function MyReadonly(raw) {
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
