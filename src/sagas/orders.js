// import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import {
	GET_ORDERS,
	GET_ORDERS_SUCCESS,
	GET_ORDERS_FAILURE,
} from '../actionTypes/orders';
import mockOrders from '../mocks/orders.mock';

// const API_URL = process.env.REACT_APP_API_URL;
// const API_KEY = process.env.REACT_APP_API_KEY;

export const getOrders = async () =>
	await new Promise((resolve, reject) => setTimeout(resolve(mockOrders)));

export function* getOrdersSaga(action) {
	// const { pageNumber, camera } = action;
	try {
		const body = yield call(getOrders);
		yield put({
			type: GET_ORDERS_SUCCESS,
			payload: body['data'].photos,
		});
	} catch (e) {
		yield put({
			type: GET_ORDERS_FAILURE,
			payload: e.message,
		});
	}
}

export const ordersSaga = takeEvery(GET_ORDERS, getOrdersSaga);
