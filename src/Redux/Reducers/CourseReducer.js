import { COURSE_DELETE_FAIL, COURSE_DELETE_REQUEST, COURSE_DELETE_SUCCESS, COURSE_EDIT_FAIL, COURSE_EDIT_REQUEST, COURSE_EDIT_SUCCESS, COURSE_LIST_FAIL, COURSE_LIST_REQUEST, COURSE_LIST_SUCCESS } from "../Constants/CourseConstans";

export const CourseListReducer =(state={course:[]},action)=>{
    switch (action.type) {
    // case COURSE_LIST_REQUEST:
    //        return {loading:true}
    case COURSE_LIST_SUCCESS:
       return {loading:false,course:action.payload}
    case COURSE_LIST_FAIL:
       return {loading:false,error:action.payload}
    default :
       return state;
   }
 }
export const CourseDeletReducer  = (state ={course:{}},action)=>{
  switch (action.type) {
   case COURSE_DELETE_REQUEST:
      return {loading:true}
  case COURSE_DELETE_SUCCESS:
   return {loading:false ,course:action.payload}
   case COURSE_DELETE_FAIL:
      return {loading:false ,course:action.payload}
   default:
      return state;
  }
}
export const CourseEditReducer =(state={course:{}},action)=>{
   switch (action.type) {
   case COURSE_EDIT_REQUEST:
          return {...state,loading:true}
   case COURSE_EDIT_SUCCESS:
      return {loading:false,course:action.payload}
   case COURSE_EDIT_FAIL:
      return {loading:false,error:action.payload}
   default :
      return state;
  }
}