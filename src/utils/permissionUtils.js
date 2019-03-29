import store from '@/store'
let permissions = store.state.dynamicPermissions
const isShow = (url) => {
	let bTrue = false
	permissions.forEach(item => {
		if (item.right_action.indexOf(url) > -1) {
			bTrue = true
		}
	})
	return bTrue
}
export default isShow
