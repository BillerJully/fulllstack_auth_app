
import './App.css';
import LoginAuth from './Components/LoginAuth/LoginAuth.jsx'
import Login from './Components/LoginAuth/Login.jsx'
import Auth from './Components/LoginAuth/Auth.jsx'
import MyPage from './Components/MyPage/MyPage.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/create' element={ <Auth/>}/>
        <Route path='/' element={<MyPage/>}/>
      </Routes>
    </div>
  );
}


export default App;
