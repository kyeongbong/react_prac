import "./App.css";
import MainHeader from "./component/MainHeader";
import Detail from "./component/Detail";
import { BrowserRouter, Routes, Route} from 'react-router-dom';

const App = () => {

  

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<MainHeader/>}/>
        <Route path='/Detail' element={<Detail/>}/> 
      </Routes>
    </BrowserRouter>
  )
}

export default App;
