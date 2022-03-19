import {
	GET_ORDERS,
	GET_ORDERS_SUCCESS,
	GET_ORDERS_FAILURE,
} from '../actionTypes/orders';

export const getOrders = () => ({
	type: GET_ORDERS,
});

export const getOrdersSuccess = () => ({
	type: GET_ORDERS_SUCCESS,
});

export const getOrdersFailure = () => ({
	type: GET_ORDERS_FAILURE,
});
