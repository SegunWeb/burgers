import React, {useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addBurger} from "../redux/actions";


const AdminMenu = () => {
    const name = useRef(null);
    const price = useRef(null);
    const status = useRef(null);
    const desc = useRef(null);
    const image = useRef(null);

    const dispatch = useDispatch();
    const myState = useSelector(state => state.menuReducer.menu)

    const addContent = e => {
        e.preventDefault();
        const el = {
            title: name.current.value,
            price: parseFloat(price.current.value),
            status: status.current.value,
            ingredient: desc.current.value,
            urlImg: image.current.value,
            id: myState.length + 1,
        };
        dispatch(addBurger(el));
        e.currentTarget.reset()

    };
    console.log(myState)





    return (
        <>
            <h2>Админ</h2>
            <form onSubmit={addContent}>

                <input style={{display: 'block'}}  ref={name}  type="text" placeholder={'enter data'} autoComplete={'0'} name={'name'} />
                <input style={{display: 'block'}} ref={price}  type="text" placeholder={'enter price'} autoComplete={'0'} name={'price'} />
                <select ref={status} name={'status'} >
                    <option value="avail">success</option>
                    <option value="unavail">removed from menu</option>
                </select>
                <textarea style={{display: 'block'}} ref={desc} placeholder={'enter desc'}  name={'desc'} />
                <input style={{display: 'block'}}  ref={image}   type="text" placeholder={'enter image'} autoComplete={'0'} name={'image'} />

                <button>Add in menu</button>
            </form>
        </>
    );
};

export default AdminMenu;