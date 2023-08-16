import './App.scss';
import Header from './components/Header'
import Tabs from './components/Tabs'
import RecipeLists from './components/RecipeList'
import { useState } from 'react';
import RecipeBanner from './components/RecipeBanner';

function App() {
  const [loader,setLoader] = useState(true)

  return (
    <div className="main">
      <Header />
      <Tabs setLoader={setLoader}/>
      <RecipeLists setLoader={setLoader}/>
      {loader && <div className='loader'>
        <div className='spinner'></div>
        </div>}
    </div>
  );
}

export default App;