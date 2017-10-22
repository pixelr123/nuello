export default function listsReducer(state = [], action) {
  if (action.type === 'FETCH_BOARD_SUCCESS') {
    const updatedLists = action.board.lists.map(list => {
      const { cards, ...listWithoutCards } = list;
      return listWithoutCards;
    });
    // const excludedLists = state.filter((list) => list.board_id !== action.board.id);
    const unchangedLists = state.filter((stateList) => {
      return !updatedLists.some((list) => stateList.id === list.id);
    });

    return [...unchangedLists, ...updatedLists];
  } else {
    return state;
  }
}
