export const CategoryTypes = {
  ADD_CATEGORY: 'ADD_CATEGORY',
  REMOVE_CATEGORY: 'REMOVE_CATEGORY',
  UPDATE_CATEGORY: 'UPDATE_CATEGORY',
  VIEW_CATEGORY: 'VIEW_CATEGORY',
}

export type ItemType = {
  id: string
  name: string
  imageUrl: string,
}

export type InitialStateType = {
  CategoryItems: ItemType[]
}

export type ActionType = { type: string; payload: ItemType }
