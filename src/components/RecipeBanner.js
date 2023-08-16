import React from 'react'
import {GiCheckMark} from "react-icons/gi"
 

const RecipeBanner = ({tabData,setRecipeTab,recipeListTab,setRecipeListTab}) => {

  return (
    <div className='recipe_banner'>
        {recipeListTab==="yes" ? <div className='close' onClick={()=>(setRecipeTab(false),setRecipeListTab("no"))}>CLOSE</div> :" "}
    {tabData !== '' && tabData?.recipe &&  <>
        <div className="left-col">
            <span className='badge'>{tabData?.recipe?.cuisineType[0].toUpperCase()}</span>
            <h1>{tabData.recipe.label}</h1>
            <p><strong>Recipe by:</strong><small>{tabData.recipe.source}</small></p>
            <h3>Ingredients</h3>
            <div className='ingredients'>
                <ul>
                    {tabData.recipe.ingredientLines.map((list,index)=> 
                        (<li key={index}><GiCheckMark size="18px" color="#6fcb9f" />&nbsp;<span>{list}</span></li>)
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
  )
}

export default RecipeBanner