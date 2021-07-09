import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Orders from "./Orders";
import {orderDel} from "../redux/actions";


const ItemOrder = () => {

    const order = useSelector(state => state.menuReducer.order)
    const dispatch = useDispatch()

    return (
        <div>
            <h2>Заказ</h2>
            {
                order.map(i => {
                    const delItem = (id) => {
                        const newArr = order.filter(i => i.id !== id);
                        dispatch(orderDel(newArr))

                    };

                    return (
                        <Orders key={i.id} delItem={() => delItem(i.id)} {...i}/>
                    )
                })
            }
        </div>
    );
};

export default ItemOrder;