export default {
	state: {
		count: 100,
	},

	mutations: {
		updateTodo (state) {
			state.count++
		},
	},
}
