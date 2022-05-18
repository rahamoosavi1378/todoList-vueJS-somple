export const StoreVar = {
    state() {
        return {
            listItems: [],
        }
    },
    mutations: {
        setFromLocalStorageToListItem(state) {
            state.listItems = JSON.parse(localStorage.getItem('listItem'))
        },
        addToListItems(state, val) {
            state.listItems.push(val)
            localStorage.setItem('listItem', JSON.stringify(state.listItems))
        },
        deleteItemOfList(state, id) {
            state.listItems.splice(id, 1)
            localStorage.setItem('listItem', JSON.stringify(state.listItems))
        },
    },
}