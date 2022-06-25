import {  Instructor_LIST_REQUEST, Instructor_LIST_FAIL, Instructor_LIST_SUCCESS, Instructor_POST_SUCCESS, Instructor_POST_REQUEST, Instructor_POST_FAIL } from "../Constants/InstrucotrsConstans";

  export const InstructorListReducer =(state={instructor:[]},action)=>{
     switch (action.type) {
     case Instructor_LIST_REQUEST:
            return {loading:true}
     case Instructor_LIST_SUCCESS:
        return {loading:false,instructor:action.payload}
     case Instructor_LIST_FAIL:
        return {loading:false,error:action.payload}
     default :
        return state;
    }
  }


  export const InstrucotrPostReducer=(state={courses:{}},action)=>{
    switch (action.type) {
      case Instructor_POST_REQUEST:
         return {loading:true}
      case Instructor_POST_SUCCESS:
        return {loading:false,courses:action.payload}
    case Instructor_POST_FAIL:
         return {loading:false, error:action.payload}
      default:
         return state;
    }
  }