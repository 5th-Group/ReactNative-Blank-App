import {createSlice} from '@reduxjs/toolkit';

const initState = {
  item: [],
  quantity: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initState,
  reducers: {
    addProduct: (state, action) => {
      const existingIndex = state.item.findIndex(
        item => item.id === action.payload.id,
      );

      if (existingIndex >= 0) {
        state.item[existingIndex] = {
          ...state.item[existingIndex],
          quantity:
            state.item[existingIndex].quantity + action.payload.quantity,
        };
      } else {
        state.item.push(action.payload);
      }
      state.quantity = state.item.length;
    },
    increaseQuantity: (state, action) => {
      const existingIndex = state.item.findIndex(
        item => item.id === action.payload.id,
      );

      state.item[existingIndex].quantity += 1;
    },
    decreaseQuantity: (state, action) => {
      const existingIndex = state.item.findIndex(
        item => item.id === action.payload.id,
      );

      if (state.item[existingIndex].quantity > 1) {
        state.item[existingIndex].quantity -= 1;
      }
    },
    getTotal: state => {
      const handleTotal = (accumulator, curItem) => {
        const totalPricePerItem = curItem.price * curItem.quantity;
        const totalPrice = accumulator + totalPricePerItem;
        return totalPrice;
      };
      let total = state.item.reduce(handleTotal, 0);
      total = parseFloat(total.toFixed(2));
      state.total = total;
      state.quantity = state.item.length;
    },
    removeItem: (state, action) => {
      const existingIndex = state.item.findIndex(
        item => item.id === action.payload.id,
      );
      if (state.item[existingIndex].id == action.payload.id) {
        const newItems = state.item.filter(
          item => item.id !== action.payload.id,
        );
        state.item = newItems;
      }
    },
  },
});

export const {
  addProduct,
  increaseQuantity,
  decreaseQuantity,
  getTotal,
  removeItem,
} = cartSlice.actions;
export default cartSlice.reducer;
