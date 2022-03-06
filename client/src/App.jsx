import Home from './components/home/home';
import './App.css';
import TourDetails from './components/tourDetails/TourDetails';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/header';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/city/:id' element={<TourDetails />}></Route>
      </Routes>
    </>
  );
}

export default App;




/* steps
1 import react or imrc
2 function have a return , class (cc)
3 export
npx create react app
npm start 
*/
