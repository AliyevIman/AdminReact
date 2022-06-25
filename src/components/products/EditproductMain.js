import React, { useState, useEffect } from "react";
import Toast from "./../LoadingError/Toast";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";
import { useDispatch, useSelector } from "react-redux";
import { CourseEdit } from "../../Redux/Actions/CourseAction";
import { ListInstructor } from "../../Redux/Actions/InstructorAction";
import { ListCategories } from "../../Redux/Actions/CategoryActions";

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000,
};

const EditProductMain = (props) => {
  const [coursename, setCourseName] = useState("")
  const [description, setDescription] = useState("")
  const [summary, setSummary] = useState("")
  const [price, setPrice] = useState(0)
  const [discount, setDiscount] = useState(null)
  const [IsFeatured, setIsFeatured] = useState(false)
  const [trailer, setTrailer] = useState("")
  const [photo, setPhoto] = useState("")
  const [selectedCategory,setSelectedCategory]=useState(null)
  const [selectedInstructor,setSelectedInstructor]=useState(null)

  const CourseEditSelector  = useSelector(state=>state.CourseEditInfo)  
  const {course,loading,error}= CourseEditSelector;
  const { productId } = props;
  const dispatch =useDispatch();
  useEffect(()=>{
    if(!course.courseName || course.courseId !==Number(productId)){ 
      dispatch(CourseEdit(productId))
      dispatch(ListCategories())
      dispatch(ListInstructor())
    }else{
      setCourseName(course.courseName)
      setDescription(course.description)
      setDiscount(course.discount)
      setIsFeatured(course.IsFeatured)
      setPhoto(course.photourl)
      setSelectedCategory(course.categoryId)
      setPrice(course.price)
      setSelectedInstructor(course.instructorId)
      setTrailer(course.videoUrl)
      setSummary(course.summary)

    }
  
  },[productId,dispatch,course])

  const {instructor}= useSelector(state=>state.instructorList);
  const {categories}=useSelector(state=>state.categoryList);

  return (
    <>
      <Toast />
      <section className="content-main" style={{ maxWidth: "1200px" }}>
        <form>
          <div className="content-header">
            <Link to="/products" className="btn btn-danger text-white">
              Go to products
            </Link>
            <h2 className="content-title">Update Product</h2>
            <div>
              <button type="submit" className="btn btn-primary">
                Publish now
              </button>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-xl-8 col-lg-8">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  {/* {errorUpdate && (
                    <Message variant="alert-danger">{errorUpdate}</Message>
                  )}
                  {loadingUpdate && <Loading />}
                  {loading ? (
                    <Loading />
                  ) : error ? (
                    <Message variant="alert-danger">{error}</Message>
                  ) : ( */}
                    <>
                    <div className="mb-4">
                    <label htmlFor="product_title" className="form-label">
                     Course Name
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="form-control"
                      id="product_title"
                      
                      value={coursename}
                      onChange={e=>setCourseName(e.target.value)}
                    />
                  </div>
                
                  <div className="mb-4">
                    <label htmlFor="product_title" className="form-label">
                   Summary
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="form-control"
                      id="product_title"
                      
                      value={summary}
                      onChange={e=>setSummary(e.target.value)}
                    />
                  </div>
             
                  <div className="mb-4">
                    <label htmlFor="product_price" className="form-label">
                      Price
                    </label>
                    <input
                      type="number"
                      placeholder="Type here"
                      className="form-control"
                      id="product_price"
                      
                      value={price}
                      onChange={e=>setPrice(e.target.value)}
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="product_title" className="form-label">
                   Discount
                    </label>
                    <input
                      type="number"
                      placeholder="Type here"
                      className="form-control"
                      id="product_price"
                      
                      value={discount}
                      onChange={e=>setDiscount(e.target.value)}
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="product_price" className="form-label">
                    IsFeatured
                    </label>
                    <input
                      type="checkbox"
                      id="product_price"
                      
                      value={IsFeatured}
                      onChange={e=>{setIsFeatured(e.target.checked?true:false)}}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Description</label>
                    <textarea
                      placeholder="Type here"
                      className="form-control"
                      rows="7"
                      
                      value={description}
                      onChange={e=>setDescription(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Images</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter Image URL"
                      
                      value={photo}
                      onChange={e=>setPhoto(e.target.value)}
                    />
                    <input className="form-control mt-3" type="file" />
                  </div>

                  <div className="mb-4">
                    <label className="form-label">Trailer</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter Image URL"
                      
                      value={trailer}
                      onChange={e=>setTrailer(e.target.value)}
                    />
                    <input className="form-control mt-3" type="file" />
                  </div>
                  <div className="mb-4">
                            <label htmlFor="product_instrucotrs" className="form-lable">instrucotrs</label>
                         <select defaultValue={course.instructorId} onChange={c=>setSelectedInstructor(c.target.value)} >
                          <option value="-" disabled >Select Instrucotr</option>
                            {
                                 instructor?.map((inse)=>(
                                  <option  value={inse.id} >{inse.fullName}</option>
                                ))
                            }
                        </select>
                  </div>
                  <div className="mb-4">
                            <label htmlFor="product_instrucotrs" className="form-lable">Categories</label>
                          <select  defaultValue={course.CategoryId} onChange={c=>setSelectedCategory(c.target.value)}>
                          <option disabled value="-" >Select Category</option>
                            {
                                categories?.map((ins)=>(
                                  <option value={ins.categoryId}  >{ins.categoryName}</option>
                                ))
                            }
                          </select>
                              
                  </div>
                    </>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default EditProductMain;
