import React from "react";
import { BsSearch } from "react-icons/bs";
import { useEffect } from "react";
import { useState } from "react";
import { fetchData } from "../service";

const RecipeList = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [query, setQuery] = useState("maggi");
  const [data, setData] = useState("");

  const searchrecipe=(searchQuery)=>{
    fetchData(searchQuery).then((response)=>{
        setData(response)
        props.setLoader(false)
    })
  }

  useEffect(() => {
    fetchData(query).then((response) => {
      setData(response);
      console.log(response);
      props.setLoader(false)
    });
  }, []);

  return (
    <div className="container">
      <div className="heading-line">
        <strong>Search Recipes</strong>
        <div className="input-wrapper">
          <input
          value={searchTerm}
          onChange={(e)=>setSearchTerm(e.target.value)} 
          type="text" 
          placeholder="Search" 
          onClick={()=>(searchrecipe(searchTerm),searchTerm==="" ? "":props.setLoader(true))}
          />
          <button>
            <BsSearch />
          </button>
        </div>
      </div>
      <div className="flexbox">
        {data &&
          data.hits.map((item, index) => ( 
            <div key={index} className="flexItem">
              <div className="img-wrapper">
                <img src={item.recipe.image} alt={item.recipe.label} />
              </div>
              <p>{item.recipe.label}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RecipeList;
