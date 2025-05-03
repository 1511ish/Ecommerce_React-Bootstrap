// CartContext.js
import React, { createContext, useReducer } from 'react';

export const CartContext = createContext();

const initialState = {
    items: [],
    totalAmount: 0,
};

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            const index = state.items.findIndex(item => item.title === action.item.title);
            let updatedItems1;

            if (index !== -1) {
                const updatedItem = {
                    ...state.items[index],
                    quantity: state.items[index].quantity + 1,
                };
                updatedItems1 = [...state.items];
                updatedItems1[index] = updatedItem;
            } else {
                updatedItems1 = [...state.items, { ...action.item, quantity: 1 }];
            }

            return {
                items: updatedItems1,
                totalAmount: state.totalAmount + action.item.price,
            };

        case 'REMOVE':
            const removeIndex = state.items.findIndex(item => item.title === action.title);
            const existingItem = state.items[removeIndex];

            let updatedItems2;

            if (existingItem.quantity === 1) {
                updatedItems2 = state.items.filter(item => item.title !== action.title);
            } else {
                const updatedItem = {
                    ...existingItem,
                    quantity: existingItem.quantity - 1,
                };
                updatedItems2 = [...state.items];
                updatedItems2[removeIndex] = updatedItem;
            }

            return {
                items: updatedItems2,
                totalAmount: state.totalAmount - existingItem.price,
            };

    }
};

export const CartProvider = ({ children }) => {
    const [cartState, dispatch] = useReducer(cartReducer, initialState);

    const addItem = item => dispatch({ type: 'ADD', item });
    const removeItem = title => dispatch({ type: 'REMOVE', title });

    return (
        <CartContext.Provider value={{ ...cartState, addItem, removeItem }}>
            {children}
        </CartContext.Provider>
    );
};
