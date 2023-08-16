import React from "react";
import { BsSearch } from "react-icons/bs";
import { useEffect } from "react";
import { useState } from "react";
import { fetchData } from "../service";
import RecipeBanner from "./RecipeBanner";

const RecipeList = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [query, setQuery] = useState("maggi");
  const [data, setData] = useState("");
  const [recipetab,setRecipeTab] = useState(false)
  const [selectedRecipe,setSelectedREcipe]=useState("")
  const [recipeListTab,setRecipeListTab]=useState("")

  const searchrecipe=(searchQuery)=>{
    fetchData(searchQuery).then((response)=>{
        setData(response)
        props.setLoader(false)
       
    })
  }

  const handleClick=(item)=>{
      setSelectedREcipe(item)
      setRecipeTab(true)
  }

  useEffect(() => {
    fetchData(query).then((response) => {
      setData(response);
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
          onClick={()=>(searchrecipe(searchTerm))}
          />
          <button>
            <BsSearch />
          </button>
        </div>
      </div>
      <div className="flexbox">
        {data &&
          data?.hits?.map((item, index) => ( 
            <div key={index} className="flexItem">
              <div className="img-wrapper">
                <img src={item.recipe.image} alt={item.recipe.label} onClick={()=>(handleClick(item),setRecipeListTab("yes"))} />
              </div>
              <p>{item.recipe.label}</p>
            </div>
          ))}
      </div>

      {recipetab && <div className='loader'>
              <RecipeBanner tabData={selectedRecipe} setRecipeTab={setRecipeTab} recipeListTab={recipeListTab} setRecipeListTab={setRecipeListTab}/>
          </div>}
    </div>
  );
};

export default RecipeList;
