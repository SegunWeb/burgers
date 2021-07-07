import React from 'react';
import Item from "./Item";
import {useSelector} from "react-redux";

const Items = () => {

    const itemMenu = useSelector(state => state.menuReducer.menu)

    return (
        <div>
            <h2>Меню</h2>
            {itemMenu.map((i, k) => <Item key={k} {...i}/>)}
        </div>
    );
};

export default Items;