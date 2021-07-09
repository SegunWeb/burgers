import React from 'react';
import Item from "./Item";
import {useDispatch, useSelector} from "react-redux";
import {orderBurger} from "../redux/actions";

const Items = () => {

    const itemMenu = useSelector(state => state.menuReducer.menu)
    const itemOrder = useSelector(state => state.menuReducer.order)

    const dispatch = useDispatch()


    return (
        <div>
            <h2>Меню</h2>
            {
                itemMenu.map((i, k) => {
                    const order = (ids) => {
                        const {title, id, ingredient, price, urlImg} = itemMenu[ids - 1]
                        const newOders = {title, id, ingredient, price, urlImg};

                        dispatch(orderBurger(newOders))
                        console.log(itemOrder)
                    };

                    return <Item orderClick={() => order(i.id)} key={k} {...i}/>
                })
            }
        </div>
    );
};

export default Items;