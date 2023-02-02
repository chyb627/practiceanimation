import { CLICKED_FAVORITE, ClickedFavoriteAction } from '../actions/favorite';

interface InitialState {
  favoriteList: string[];
}

export const initialState: InitialState = {
  favoriteList: [],
};

export const favoriteListReducer = (state = initialState, action: ClickedFavoriteAction) => {
  if (action.type === CLICKED_FAVORITE) {
    const hasItem = state.favoriteList.filter((item) => item === action.clicked).length > 0;

    if (hasItem) {
      return {
        ...state,
        favoriteList: state.favoriteList.filter((item) => item !== action.clicked),
      };
    }

    return {
      ...state,
      favoriteList: state.favoriteList.concat([action.clicked]),
    };
  }

  return {
    ...state,
  };
};
