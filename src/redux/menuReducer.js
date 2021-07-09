import {ADD_BURGER, ORDER_BURGER, ORDER_DEL} from "./types";

const initialState = {
    menu: [
        {   id: 1,
            title: 'burger',
            urlImg: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
            ingredient: 'tomato, apple, chess, bread',
            status: '',
            price: 100
        },
        {   id: 2,
            title: 'burger 2',
            urlImg: 'https://www.santamariaworld.com/optimized/maximum/globalassets/_recipes/bbq/kentucky_burger.jpg',
            ingredient: 'tomato, apple, chess, bread',
            status: '',
            price: 100
        }
    ],

    order: []
};

export const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BURGER: {
            return {
                ...state,
                menu: [...state.menu, action.payload]
            }
        }
        case ORDER_BURGER: {
            return {
                ...state,
                order: [...state.order, action.payload]
            }
        }
        case ORDER_DEL: {
            return {
                ...state,
                order: action.payload
            }
        }

        default:
            return state
    }
};