import { ProductTypes, ActionType, InitialStateType } from './product.types'
import { addItemToProduct, removeItemFromProduct, updateItemFromProduct } from './product.utils'

const INITIAL_STATE: InitialStateType = {
  ProductItems: [{ id: '4', categoryId: '1', name: 'Hp', imageUrl: 'product', price: '12' },
  { id: '4', categoryId: '2', name: 'Nike', imageUrl: 'product', price: '22' }]
}

const productReducer = (state = INITIAL_STATE, action: ActionType) => {

  switch (action.type) {
    case ProductTypes.ADD_PRODUCT:
      return {
        ...state,
        ProductItems: addItemToProduct(
          state.ProductItems,
          action.payload
        )
      }
    case ProductTypes.REMOVE_PRODUCT:
      return {
        ...state,
        ProductItems: removeItemFromProduct(
          state.ProductItems,
          action.payload
        )
      }
    case ProductTypes.UPDATE_PRODUCT:
      return {
        ...state,
        ProductItems: updateItemFromProduct(
          state.ProductItems,
          action.payload
        )
      }
    case ProductTypes.VIEW_PRODUCT:
      return {
        ...state
      }
    default:
      return state
  }
}

export default productReducer
