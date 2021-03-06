import axios from "axios";

//Action Types
const GET_HOUSES = "GET_HOUSES";
const ADD_HOUSES = "ADD_HOUSES";

//Action Creators
export function getHouses() {
  return {
    type: GET_HOUSES,
    payload: axios.get("./api/houses")
  };
}

export function addHouses(obj) {
  return {
    type: ADD_HOUSES,
    payload: axios.post("/api/houses", obj)
  };
}

//Initial State
const initialState = {
  houses: [],
  isLoading: false,
  error: ""
};

//Reducer

export default function housesReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_HOUSES_PENDING":
      return { ...state, isLoading: true };
    case "GET_HOUSES_FULFILLED":
      return { ...state, isLoading: false, products: action.payload.data };
    case "GET_HOUSES_REJECTED":
      return { ...state, isLoading: true, error: action.payload };

    case "ADD_HOUSES_PENDING":
      return { ...state, isLoading: true };
    case "ADD_HOUSES_FULFILLED":
      return {
        ...state,
        isLoading: false,
        products: [...state.houses, action.payload.data]
      };
    case "ADD_HOUSES_REJECTED":
      return { ...state, isLoading: true, error: action.payload };
    default:
      return state;
  }
}
