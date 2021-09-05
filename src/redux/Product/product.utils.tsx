import { ItemType } from './product.types'

export const addItemToProduct = (ProductItems: ItemType[], productItemToAdd: ItemType) => {
  const existingCartItem = ProductItems.find(
    (item) => item.name === productItemToAdd.name
  )

  if (existingCartItem) {
    return ProductItems
  }

  return [...ProductItems, { ...productItemToAdd }]
}

export const removeItemFromProduct = (ProductItems: ItemType[], productItemToRemove: ItemType) => {
  const existingProductItem = ProductItems.find(
    (item) => item.name === productItemToRemove.name
  )

  if (existingProductItem) {
    return ProductItems.filter(
      (item) => item.name !== productItemToRemove.name
    )
  }
}

export const updateItemFromProduct = (ProductItems: ItemType[], productItemToUpdate: ItemType) => {
  return ProductItems.map((item) =>
    item.id === productItemToUpdate.id
      ?
      { ...item, name: productItemToUpdate.name, categoryId: productItemToUpdate.categoryId, imageUrl: productItemToUpdate.imageUrl, price: productItemToUpdate.price }
      : item
  )

}
