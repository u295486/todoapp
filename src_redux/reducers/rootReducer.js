const initState = {
  entryName: '',
  items: ['test input 1', 'lorem ipsum 2', 'sdfsad fd df gsdf', 'xxx'],
}

const rootReducer = (state = initState, action) => {
  if (action.type === 'CHANGE_VALUE') {
    return { ...state, entryName: action.entryName }
  }

  if (action.type === 'SUBMIT_VALUE') {
    const { entryName, items } = state
    if (entryName !== '') {
      return {
        ...state,
        entryName: '',
        items: [...items, entryName],
      }
    }
  }

  if (action.type === 'DELETE_VALUE') {
    const filteredItems = [...state.items]
    filteredItems.splice(action.id, 1)

    return {
      ...state,
      items: filteredItems,
    }
  }
  return state
}

export default rootReducer
