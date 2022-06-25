import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../api/BaseConfig";
import { CourseDelete, CourseList } from "../../Redux/Actions/CourseAction";

const Product = () => {
  // const [course, setCourse] = useState([])
  // const getCourse = async()=>{  
  //   await fetch(`${BASE_URL}Course`).then(c=>c.json()).then(c=>setCourse(c))
  // }

  const {course} = useSelector(state=>state.courseList)
const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(CourseList())
   
  },[dispatch]);
  const delteHandler =(id)=>{
    let result  =window.confirm("Are you istiyirsen ?")
    if(result){
      dispatch(CourseDelete(id))
    }
  }
  return (
    <>
   {
    course?.map((c)=>(
       <div className="col-md-6 col-sm-6 col-lg-3 mb-5">
        <div className="card card-product-grid shadow-sm">
          <Link to="#" className="img-wrap">
            <img src={c.photoUrl} alt="Product" />
          </Link>
          <div className="info-wrap">
            <Link to="#" className="title text-truncate">
              {c.courseName}
            </Link>
            <div className="price mb-2">${c.price}</div>
            <div className="row">
              <Link to={"/product/" + c.courseId +"/edit"} className="btn btn-sm btn-outline-success p-2 pb-3 col-md-6">
              <i className="fas fa -pen"></i>
              </Link>
              <Link
                to="#"
                onClick={(()=>delteHandler(c.courseId))}
                className="btn btn-sm btn-outline-danger p-2 pb-3 col-md-6"
              >
                <i className="fas fa-trash-alt"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    ))
   }
    </>
  );
};
export default Product;
