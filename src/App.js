import { useState } from 'react';
import './App.scss';
import Header from './components/Header';
import RecipeList from './components/RecipeList';
import Tabs from './components/Tabs';

function App() {
  const [loader,setLoader]=useState(false)


  return (
   <div className='main'>
    <Header/>
    <Tabs/>
    <RecipeList setLoader={setLoader}/>
    {loader && <div className='loader'>
      <div className='spinner'></div>
      </div>}
   </div>
  );
}

export default App;
