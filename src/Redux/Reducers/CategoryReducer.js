import { CATEGORY_LIST_FAIL, CATEGORY_LIST_REGQUEST, CATEGORY_LIST_SUCCESS } from "../Constants/CAtegoryCOnstans";

  export const CategoryListReducer  =(state={categories:[]},action)=>{
     switch (action.type) {
     case CATEGORY_LIST_REGQUEST:
            return {loading:true}
     case CATEGORY_LIST_SUCCESS:
        return {loading:false,categories:action.payload}
     case CATEGORY_LIST_FAIL:
        return {loading:false,error:action.payload}
     default :
        return state;
     }
  }