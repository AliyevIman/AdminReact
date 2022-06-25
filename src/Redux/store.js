import { configureStore,combineReducers } from '@reduxjs/toolkit'
import { LoginReducers, RegisterReducers } from './Reducers/UserReducers';
import thunk from 'redux-thunk';
import { CategoryListReducer } from './Reducers/CategoryReducer';
import { InstrucotrPostReducer, InstructorListReducer } from './Reducers/InstrucorReducer';
import { CourseDeletReducer, CourseEditReducer, CourseListReducer } from './Reducers/CourseReducer';
import { CourseDelete } from './Actions/CourseAction';


const userFromLocalStorage=localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")): null

const reducer=combineReducers({
    loginUser:LoginReducers,
    registerUser:RegisterReducers,
    categoryList: CategoryListReducer,
    instructorList: InstructorListReducer,
    instructorPost:InstrucotrPostReducer,
    courseList:CourseListReducer,
    courseDelte :CourseDeletReducer,
    CourseEditInfo: CourseEditReducer
})  
const initialState={
    loginUser:{ 
        userInfo:userFromLocalStorage
    }
}
const store=configureStore({reducer,initialState,middleware:[thunk]});

export default store;

