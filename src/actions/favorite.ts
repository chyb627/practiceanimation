export const CLICKED_FAVORITE = 'CLICKED_FAVORITE';

export interface ClickedFavoriteAction {
  type: typeof CLICKED_FAVORITE;
  clicked: string;
}

export const clickedFavorite = (clickedItem: string): ClickedFavoriteAction => {
  return {
    type: CLICKED_FAVORITE,
    clicked: clickedItem,
  };
};
