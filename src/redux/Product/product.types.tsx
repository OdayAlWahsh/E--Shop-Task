export const ProductTypes = {
  ADD_PRODUCT: 'ADD_PRODUCT',
  REMOVE_PRODUCT: 'REMOVE_PRODUCT',
  UPDATE_PRODUCT: 'UPDATE_PRODUCT',
  VIEW_PRODUCT: 'VIEW_PRODUCT',
}

export type ItemType = {
  id: string
  categoryId: string
  name: string
  imageUrl: string
  price: string
}

export type InitialStateType = {
  ProductItems: ItemType[]
}

export type ActionType = { type: string; payload: ItemType }
