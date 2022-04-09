import { createStore } from 'vuex'
import quizModule from '@/store/quizModule'
import setModule from '@/store/setModule'

export default createStore({
  state: {
		isDialogActive: false,
  },
  getters: {
  },
  mutations: {
		switchDialog(state, dialog) {
			state.isDialogActive = dialog;
		}
  },
  actions: {
  },
  modules: {
		quiz: quizModule,
		set: setModule
  }
})
