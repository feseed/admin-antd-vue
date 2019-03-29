// 根据本身 id、父级 id，一维数组 ==>> 多维嵌套数组
export function arr2Tree (arr) {
	// 每项的 id
	let idKey = 'id'
	// 每项的父级 id
	let parentIdKey = 'pId'
	let temp = {}
	let tree = {}
	// 数组 ==>> 键值对
	arr.forEach(item => {
		item.children = null
		let _key = `key_${item[idKey]}`
		temp[_key] = item
	})

	let tempKeys = Object.keys(temp)
	tempKeys.forEach(key => {
		// 获取当前项
		let item = temp[key]
		// 当前项父级 ID
		let _itemPId = item[parentIdKey]
		// 获取父级项
		let parentItemByPid = temp[`key_${_itemPId}`]
		if (parentItemByPid) {
			if (!parentItemByPid.children) {
				parentItemByPid.children = []
			}
			parentItemByPid.children.push(item)
		} else {
			let _key = `key_${item[idKey]}`
			tree[_key] = item
		}
	})
	// 对象转数组并返回
	return Object.keys(tree).map(key => tree[key])
}
