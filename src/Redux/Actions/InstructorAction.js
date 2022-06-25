import axios from "axios"
import { BASE_URL } from "../../api/BaseConfig"
import { Instructor_LIST_FAIL, Instructor_LIST_SUCCESS, Instructor_POST_FAIL, Instructor_POST_REQUEST, Instructor_POST_SUCCESS } from "../Constants/InstrucotrsConstans"

export const ListInstructor = ()=>async(dispatch)=>{
try {
    // dispatch({type:Instructor_LIST_REQUEST})
    const {data} =await axios.get(`${BASE_URL}Instructor/GetAll`)
    dispatch({type:Instructor_LIST_SUCCESS,payload:data})

} 
  catch (error) {
    dispatch({type:Instructor_LIST_FAIL,payload:error})
  }
}

export const PostInstructor =(name,summary,description,photoUrl,price,discount,isFeatured,trailerUrl,categoryId,instructorId)=>async (dispatch)=>{
 try {
  dispatch({type:Instructor_POST_REQUEST})
  const {data} = await axios.post(`${BASE_URL}Course`,
  {name,summary,description,photoUrl,price,discount,isFeatured,trailerUrl,categoryId,instructorId})
  
  dispatch({
    type:Instructor_POST_SUCCESS,
    payload:JSON.stringify(data)
  })
    
 } catch (error) { 
  dispatch({
    type:Instructor_POST_FAIL,
    payload:error
  })
 }
}