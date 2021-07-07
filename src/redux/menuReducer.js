const initialState = {
    menu: [
        {   id: 1,
            title: 'burger',
            urlImg: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
            ingredient: ['tomato', 'apple', 'chess', 'bread']
        },
        {   id: 1,
            title: 'burger',
            urlImg: 'https://www.santamariaworld.com/optimized/maximum/globalassets/_recipes/bbq/kentucky_burger.jpg',
            ingredient: ['tomato', 'apple', 'chess', 'bread']
        }
    ]
};

export const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
};