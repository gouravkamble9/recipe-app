const queryStrings={
    app_id:process.env.REACT_APP_APP_ID,
    app_key:process.env.REACT_APP_APP_KEY
}
//https://api.edamam.com/api/recipes/v2?type=public&q=pizza&app_id=2f086ac3&app_key=9252bb648e879e013e42b9941af6580c

export const fetchData =async (defaultQuery)=>{
    const {app_id,app_key}=queryStrings;
    try {
        const data=await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${defaultQuery}&app_id=${app_id}&app_key=${app_key}`)
        const response=await data.json()
        return response;
    } catch (error)    {
        console.log(error)
        return error
    }
}

export const fetchTabData=async (defaultQuery)=>{

}