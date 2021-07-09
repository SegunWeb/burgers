import {ADD_BURGER, ORDER_BURGER, ORDER_DEL} from "./types";

export const addBurger = (item) => {return {type: ADD_BURGER, payload: item}};
export const orderBurger = (item) => {return {type: ORDER_BURGER, payload: item}};
export const orderDel = (item) => {return {type: ORDER_DEL, payload: item}};


