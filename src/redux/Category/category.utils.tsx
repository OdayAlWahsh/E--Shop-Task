import { ItemType } from './category.types'

export const addItemToCart = (CategoryItems: ItemType[], categoryItemToAdd: ItemType) => {
  const existingCartItem = CategoryItems.find(
    (item) => item.name === categoryItemToAdd.name
  )

  if (existingCartItem) {
    return CategoryItems
  }

  return [...CategoryItems, { ...categoryItemToAdd }]
}

export const removeItemFromCategory = (CategoryItems: ItemType[], categoryItemToRemove: ItemType) => {
  const existingCartItem = CategoryItems.find(
    (item) => item.name === categoryItemToRemove.name
  )

  if (existingCartItem) {
    return CategoryItems.filter(
      (item) => item.name !== categoryItemToRemove.name
    )
  }
}

export const updateItemFromCategory = (CategoryItems: ItemType[], categoryItemToUpdate: ItemType) => {
  return CategoryItems.map((item) =>
    item.id === categoryItemToUpdate.id
      ? { ...item, name: categoryItemToUpdate.name, imageUrl: categoryItemToUpdate.imageUrl }
      : item
  )

}
