import React, { useEffect, useState } from "react";
import CreateCategory from "./CreateCategory";
import CategoriesTable from "./CategoriesTable";
import { BASE_URL } from "../../api/BaseConfig";

const MainCategories = () => {
    const [category, setCategory] = useState([]);
    const [Createcategory, setCreateCategory] = useState([]);

 const getCategory=async ()=>{
  await fetch(`${BASE_URL}Category/getall`).then(c=>c.json()).then(c=>setCategory(c))
 }
const [Name, setName] = useState("")
const [photoUrl, setPhotoUrl] = useState("")
const CreateCategory= async (e)=>{
  console.log(e)
  await fetch(`${BASE_URL}Category/Add`,{
    method:"POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body:JSON.stringify({Name,photoUrl})
  })
}
useEffect(()=>{
  getCategory()
},[])


  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">Categories</h2>
      </div>

      <div className="card shadow-sm">
        <div className="card-body">
          <div className="row">
            {/* Create category */}
            <CreateCategory  />
            {/* Categories table */}
            <CategoriesTable category={category} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainCategories;
