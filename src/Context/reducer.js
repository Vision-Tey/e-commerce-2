export const initialState = {
    basket: [],
    user: null,
    admin: null,
    orders: [],
    wishlist: []
}

export const getBasketTotal = (basket) => {
    basket?.reduce((acc, item) => acc + item.price * item.quantity, 0);
}

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_ADMIN':
            return {
                ...state,
                admin: action.admin
            }
        case 'SUBMIT_ORDER':
            return {
                ...state,
                orders: action.orders
            }
        case 'ADD_TO_BASKET':
            //logic for adding item to the basket
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        case 'REMOVE_FROM_BASKET':
                //logic for removing item from the basket
                let newBasket = [...state.basket];
                 //find index of the item in the basket
                const index = state.basket.findIndex(basketItem => basketItem.id === action.id);
                if (index >= 0) {
                    //remove item from the basket
                    newBasket.splice(index, 1);
                } else {
                    console.warn(
                        `Cant remove product (id: ${action.id}) as its not in basket!`
                    );
                }
                return { ...state, basket: newBasket };
        case 'EMPTY_BASKET':
            return {
                ...state,
                basket: []
            }

        case 'ADD_TO_WISHLIST':
            return {
                ...state,
                wishlist: [...state.wishlist, action.wish]
            }
        case 'REMOVE_FROM_WISHLIST':
            //remove item from the wishlist
            let newWishlist = [...state.wishlist];
            const index2 = state.wishlist.findIndex(wishlistItem => wishlistItem.id === action.id);
            if(index2 >= 0){
                newWishlist.splice(index2, 1);
            } else {
                console.warn(
                    `Cant remove product (id: ${action.id}) as its not in wishlist!`
                );
            }
            return {
                ...state, wishlist: newWishlist
            }
        case 'EMPTY_WISHLIST':
            return {
                ...state,
                wishlist: []
            }

        default:
            return state
    }
}

export default reducer;