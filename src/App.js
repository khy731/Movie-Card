import './App.css';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import New from './pages/New';
import Create from './pages/Create';
import Header from './components/Header';
import MyCard from './pages/MyCard';
function App() {

    const [data, setData] = useState({});

    const setNameStar = (name, star) => {
        setData({
                name,
                star
            });
    };

    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/new' element={<New setNameStar={setNameStar}/>} />
                    <Route path='/create' element={<Create {...data} />}/>
                    <Route path='/mycard' element={<MyCard />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
