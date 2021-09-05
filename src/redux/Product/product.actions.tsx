import { ProductTypes, ItemType } from './product.types'

export const addProductItem = (item: ItemType) => ({
  type: ProductTypes.ADD_PRODUCT,
  payload: item
})

export const removeProductItem = (item: ItemType) => ({
  type: ProductTypes.REMOVE_PRODUCT,
  payload: item
})

export const updateProductItem = (item: ItemType) => ({
  type: ProductTypes.UPDATE_PRODUCT,
  payload: item
})

export const viewProductItem = (item: ItemType) => ({
  type: ProductTypes.VIEW_PRODUCT,
  payload: item
})
