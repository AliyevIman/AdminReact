import axios from "axios"
import { type } from "jquery"
import { BASE_URL } from "../../api/BaseConfig"
import { COURSE_DELETE_FAIL, COURSE_DELETE_REQUEST, COURSE_DELETE_SUCCESS, COURSE_EDIT_FAIL, COURSE_EDIT_REQUEST, COURSE_EDIT_SUCCESS, COURSE_LIST_FAIL, COURSE_LIST_SUCCESS } from "../Constants/CourseConstans"

export const CourseList = ()=>async(dispatch)=>{
    try {
        // dispatch({type:Instructor_LIST_REQUEST})
        const {data} =await axios.get(`${BASE_URL}Course`)
        dispatch({type:COURSE_LIST_SUCCESS,payload:data})
    } 
      catch (error) {
        dispatch({type:COURSE_LIST_FAIL,payload:error})
      }
    }

export const CourseDelete =(id)=>async(dispatch)=>{
  try {
    dispatch({type:COURSE_DELETE_REQUEST})
const {data} = await axios.delete(` ${BASE_URL}Course/${id}`)
dispatch({
  type:COURSE_DELETE_SUCCESS,
  payload:data
})
  } catch (error) {
    dispatch({type:COURSE_DELETE_FAIL,payload:error})
  }
}
export const CourseEdit = (id)=>async(dispatch)=>{
  try {
      dispatch({type:COURSE_EDIT_REQUEST})  
      const {data} =await axios.get(`${BASE_URL}Course/${id}`)
      dispatch({type:COURSE_EDIT_SUCCESS,payload:data})
  } 
  catch (error) {
      dispatch({type:COURSE_EDIT_FAIL,payload:error})
    }
  }
  
