import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../../services/api";
let initialState = {
  products: [],
  selectedProduct: {},
  errors: "",
};
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    populateProducts(state, action) {
      state.products = action.payload;
    },
    selectProduct(state, action) {
      state.selectedProduct = action.payload;
    },
    unselectProduct(state) {
      state.selectedProduct = null;
    },
    deleteProductReducer: (state, action) => {
      const payload = action.payload;
      const index = state.products.findIndex((item) => item.id === payload);
      if (index !== -1) {
        state.products.splice(index, 1);
      }
    },
    updateProductReducer: (state, action) => {
      const payload = action.payload;
      const index = state.products.findIndex((item) => item.id === payload.id);
      if (index !== -1) {
        state.products[index] = payload;
      }
    },
    addProductReducer: (state, action) => {
      const payload = action.payload;
      state.products.push(payload);
    },
    setErrors(state, action) {
      state.errors = action.payload;
    },
  },
});
export const fetchProducts = () => async (dispatch) => {
  getProducts()
    .then((response) => {
      dispatch(populateProducts(response.data));
      dispatch(setErrors(null));
    })

    .catch((error) => dispatch(setErrors(error)));
};
export const selectProducts = (state) => {
  return [state.products.products, state.products.errors];
};
export const selectSelectedProduct = (state) => {
  return state.products.selectedProduct;
};
export const {
  populateProducts,
  selectProduct,
  unselectProduct,
  setErrors,
  deleteProductReducer,
  updateProductReducer,
  addProductReducer,
} = productsSlice.actions;
export default productsSlice.reducer;
