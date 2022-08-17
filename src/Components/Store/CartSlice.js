import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";




const initialState = {
    cartProducts: [],
    cartTotalQuantity : 0 ,
    cartTotalAmount : 0 ,  
}





function addToCart(state = initialState, action) {

    

    console.log('slice', action.payload)

    const existingIndex = state.cartProducts.findIndex((item) =>
        item.id === action.payload.id)

    if (existingIndex >= 0) {
        state.cartProducts[existingIndex] = {
            ...state.cartProducts[existingIndex],
            cartQuantity: state.cartProducts[existingIndex].cartQuantity + 1,
        };
        // toast.info('Increase product quantity', {
        //     position:"bottom-left"
        // });

    }
    else {
        let tempProductItem = { ...action.payload, cartQuantity: 1 };

        state.cartProducts.push(tempProductItem)

        // toast.success('Product add to cart', {
        //     position:"bottom-left"
        // })
    }

}






const cartSlice = createSlice({
    name: 'Cart',
    initialState,
    reducers: {
        addToCart,

        decremantAction(state = initialState, action) {

            const existingIndex = state.cartProducts.findIndex((item) =>
                item.id === action.payload.id
            )

            if (state.cartProducts[existingIndex].cartQuantity > 1) {
                state.cartProducts[existingIndex].cartQuantity -= 1
            } else {
                if (state.cartProducts[existingIndex].cartQuantity == 1) {
                    const nextItemCarts = state.cartProducts.filter((item) => item.id !== action.payload.id)
                    state.cartProducts = nextItemCarts

                }
            }
            
        },

        removeAction(state = initialState, action) {
            const existingIndex = state.cartProducts.findIndex((item) =>
                item.id === action.payload.id
            )
            const nextItemCarts = state.cartProducts.filter((item) => item.id !== action.payload.id)
            state.cartProducts = nextItemCarts
            

        },

        getTotals(state, action) {
            let { total, quantity } = state.cartProducts.reduce(
              (cartTotal, cartItem) => {
                const { price, cartQuantity } = cartItem;
                const itemTotal = price * cartQuantity;
      
                cartTotal.total += itemTotal;
                cartTotal.quantity += cartQuantity;
      
                return cartTotal;
              },
              {
                total: 0,
                quantity: 0,
              }
            );
            total = parseFloat(total.toFixed(2));
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
          },
    }
})

export const { addToCart: addToCartAction, decremantAction , removeAction, getTotals } = cartSlice.actions

export default cartSlice.reducer;