import DialogModes from '@/components/word/misc/DialogModes'

export default {
	namespaced: true,
	state: {
		words: [
			{id: 1, value: 'Headline 1', context: 'Greyhound divisely hello coldly fonwderfully'},
			{id: 2, value: 'Headline 2', context: 'Greyhound divisely hello coldly fonwderfully'},
			{id: 3, value: 'Headline 3', context: 'Greyhound divisely hello coldly fonwderfully'},
			{id: 4, value: 'Headline 4', context: 'Greyhound divisely hello coldly fonwderfully'},
			{id: 5, value: 'Headline 5', context: 'Greyhound divisely hello coldly fonwderfully'},
			{id: 6, value: 'Headline 6', context: 'Greyhound divisely hello coldly fonwderfully'},
			{id: 7, value: 'Headline 7', context: 'Greyhound divisely hello coldly fonwderfully'},
			{id: 8, value: 'Headline 8', context: 'Greyhound divisely hello coldly fonwderfully'},
			{id: 9, value: 'Headline 9', context: 'Greyhound divisely hello coldly fonwderfully'},
			{id: 10, value: 'Headline 10', context: 'Greyhound divisely hello coldly fonwderfully'},
			{id: 11, value: 'Headline 11', context: 'Greyhound divisely hello coldly fonwderfully'},
			{id: 12, value: 'Headline 12', context: 'Greyhound divisely hello coldly fonwderfully'},
			{id: 13, value: 'Headline 13', context: 'Greyhound divisely hello coldly fonwderfully'},
			{id: 14, value: 'Headline 14', context: 'Greyhound divisely hello coldly fonwderfully'},
			{id: 15, value: 'Headline 15', context: 'Greyhound divisely hello coldly fonwderfully'},
		],
		operableWord: {
			id: 0,
			value: '',
			context: ''
		},
		dialogMode: DialogModes.CREATE
	},
	mutations: {
		removeWord(state, id) {
			state.words = state.words.filter(item => item.id !== id)
		},
		addWord(state, word) {
			state.words.push(word)
		},
		updateWord(state, word) {
			const index = state.words.findIndex(item => item.id === word.id)
			
			state.words.splice(index, 1, word)
		},
		setDialogMode(state, mode) {
			state.dialogMode = mode;
		},
		setOperableWord(state, word) {
			state.operableWord = word
		}
	}
}