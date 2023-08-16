import './App.scss';
import Header from './components/Header'
import Tabs from './components/Tabs'
import RecipeLists from './components/RecipeList'
import { useState } from 'react';
import RecipeBanner from './components/RecipeBanner';
import Footer from './components/Footer';

function App() {
  const [loader,setLoader] = useState(false)

  return (
    <div className="main">
      <Header />
      <Tabs setLoader={setLoader}/>
      <RecipeLists setLoader={setLoader}/>
      {loader && <div className='loader'>
        <div className='spinner'></div>
        </div>}
      <Footer/>
    </div>
  );
}

export default App;