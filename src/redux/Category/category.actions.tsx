import { CategoryTypes, ItemType } from './category.types'

export const addCategoryItem = (item: ItemType) => ({
  type: CategoryTypes.ADD_CATEGORY,
  payload: item
})

export const removeCategoryItem = (item: ItemType) => ({
  type: CategoryTypes.REMOVE_CATEGORY,
  payload: item
})

export const updateCategoryItem = (item: ItemType) => ({
  type: CategoryTypes.UPDATE_CATEGORY,
  payload: item
})

export const viewCategoryItem = (item: ItemType) => ({
  type: CategoryTypes.VIEW_CATEGORY,
  payload: item
})
