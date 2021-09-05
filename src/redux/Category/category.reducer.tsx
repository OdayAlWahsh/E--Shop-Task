import { CategoryTypes, ActionType, InitialStateType } from './category.types'
import { addItemToCart, removeItemFromCategory, updateItemFromCategory } from './category.utils'

const INITIAL_STATE: InitialStateType = {
  CategoryItems: [{ id: "1", name: 'Laptop', imageUrl: '' },
  { id: "2", name: 'Shoes', imageUrl: '' }]
}

const categoryReducer = (state = INITIAL_STATE, action: ActionType) => {

  switch (action.type) {
    case CategoryTypes.ADD_CATEGORY:
      return {
        ...state,
        CategoryItems: addItemToCart(
          state.CategoryItems,
          action.payload
        )
      }
    case CategoryTypes.REMOVE_CATEGORY:
      return {
        ...state,
        CategoryItems: removeItemFromCategory(
          state.CategoryItems,
          action.payload
        )
      }
    case CategoryTypes.UPDATE_CATEGORY:
      return {
        ...state,
        CategoryItems: updateItemFromCategory(
          state.CategoryItems,
          action.payload
        )
      }
    case CategoryTypes.VIEW_CATEGORY:
      return {
        ...state
      }
    default:
      return state
  }
}

export default categoryReducer
