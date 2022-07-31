type MyExclude<T, U> = T extends U ? never : T;

// js 实现思路
// T: ['a', 'b', 'c']
// U: ['a']
// function MyExclude(T, U) {
// 	// 1、遍历 tuple
// 	// 2、判断遍历出来的元素是否在需要排除的值中
// 	// 3、剔除并返回
// 	return T.filter(item => {
// 		return !U.includes(item)
// 	})
// }
