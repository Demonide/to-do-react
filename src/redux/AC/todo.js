import { GET_LIST } from "../types";

const getListActionCreator = (payload) => {
    return { type: GET_LIST, payload: payload }
}
  
  
export { getListActionCreator };