import Register from './Components/Register';
import React from 'react';
import Details from "./Components/Details";
import Home from './Components/Home';
import NoPage from './Components/NoPage';
import {Routes,Route,BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <>
      {/* <Hero />
      <SimpleSlider/>
      <Properties />
      <Details />
      <GetStarted />
      <Footer /> */}
<Router>
<Routes>
<Route exact  path='/' element={<Home/>}></Route>
<Route exact  path='details/:id' element={<Details/>}/>
<Route exact  path='/register/:title' element={<Register />}/>
<Route path="*" element={<NoPage />} />

</Routes>  
</Router>    
 </>
  );
}
export default App;
