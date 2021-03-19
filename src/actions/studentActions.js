import axios from "axios";

import {
    ALL_STUDENTS_REQUEST,
    ALL_STUDENTS_SUCCESS,
    ALL_STUDENTS_FAIL,
    CLEAR_ERRORS,
  } from "../constants/studentConstants";


  export const getStudents = () => async (dispatch) => {
    try {

        dispatch({ type: ALL_STUDENTS_REQUEST })

       // let link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[lte]=${price[1]}&price[gte]=${price[0]}&ratings[gte]=${rating}`

        // if (category) {
        //     link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[lte]=${price[1]}&price[gte]=${price[0]}&category=${category}&ratings[gte]=${rating}`
        // }

        const { data } = await axios.get('/api/v1/students')

        dispatch({
            type: ALL_STUDENTS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_STUDENTS_FAIL,
            payload: error.response.data.message
        })
    }
}
  export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}