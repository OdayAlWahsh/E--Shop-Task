import { combineReducers } from "redux";
import categoryReducer from './Category/category.reducer'
import productReducer from './Product/product.reducer'

const rootReducer = combineReducers({
  category: categoryReducer,
  product: productReducer,
});

export default rootReducer;