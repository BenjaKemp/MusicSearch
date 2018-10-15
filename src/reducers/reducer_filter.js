

const filtersReducerDefaultState = {
sortBy: null,
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SORT_BY':
      return {
        ...state,
        sortBy: action.sorter
      };

    default:
      return state;
  }
};
