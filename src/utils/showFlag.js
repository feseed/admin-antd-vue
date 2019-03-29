import store from '@/store'
let businessKeyFlag = store.state.businessKey
const showFlag = (businessKey) => {
	if (businessKeyFlag.indexOf(businessKey) !== -1) {
		return true
	} else {
		return false
	}
}
export default showFlag
