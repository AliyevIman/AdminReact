import axios from "axios"
import { BASE_URL } from "../../api/BaseConfig"
import { CATEGORY_LIST_FAIL, CATEGORY_LIST_REGQUEST, CATEGORY_LIST_SUCCESS } from "../Constants/CAtegoryCOnstans"

export const ListCategories = ()=>async(dispatch)=>{
try {
    dispatch({type:CATEGORY_LIST_REGQUEST})
    const {data } =await axios.get(`${BASE_URL}Category/getall`)
    dispatch({type:CATEGORY_LIST_SUCCESS,payload:data})
} catch (error) {
 dispatch({type:CATEGORY_LIST_FAIL,payload:error})   
}
}