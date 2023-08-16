import React from 'react'
import {GiCheckMark} from "react-icons/gi"
import {GoDotFill} from 'react-icons/go'
import {IoMdClose} from 'react-icons/io'


const RecipeBanner = ({tabData,setRecipeTab,recipeListTab,setRecipeListTab}) => {


  return (
    <>
    <div className='recipe_banner'>
        
    {tabData !== '' && tabData?.recipe &&  <>
        <div className="left-col">
            <span className='badge'>{tabData?.recipe?.cuisineType[0].toUpperCase()}</span>
            <h1><a href={tabData.recipe.url} target="_blank" rel="noopener noreferrer">
      {tabData.recipe.label}
    </a> </h1>
            <p><strong>Recipe by:</strong><small>{tabData.recipe.source}</small></p>
            <h3>Ingredients</h3>
            <div className='ingredients'>
                <ul>
                    {tabData.recipe.ingredientLines.map((list,index)=> 
                        (<li key={index}><GoDotFill size="18px" color="#6fcb9f" />&nbsp;<span>{list}</span></li>)
                    )}
                    
                </ul>
            </div>
        </div>
        <div className="right-col">
            <div className="image-wrapper">
            <img src={tabData.recipe.image} alt={tabData.recipe.label} />
            </div>
        </div>
    </>}
</div>
{recipeListTab==="yes" ? <div className='close' onClick={()=>(setRecipeTab(false),setRecipeListTab("no"))}>
        <IoMdClose/>
        </div> :" "}
</>
  )
}

export default RecipeBanner