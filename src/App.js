import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import New from './pages/New';
import Create from './pages/Create';
import Header from './components/Header';
import MyCard from './pages/MyCard';

function App() {

    const getData = () => {
        // 서버 데이터 받아오자
    }

    const dummyData = [
            {
              id: 1,
              name: "스타워즈",
              date: "2022-09-18",
              star: 5,
              contents: "내전의 시대이다."
            },
            {
              id: 2,
              name: "왕좌의 게임",
              date: "2022-09-10",
              star: 5,
              contents: "끝나지 않을 겨울이 다가온다!"
            }
    ];

    const [data, setData] = useState(dummyData);

    const nameAndStar = data.filter(v => !v.contents);

    const setDummy = (name, star) => {
        setData([
            ...data,
            {
                name,
                star
            }
        ]);
    };

    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/new' element={<New setDummy={setDummy}/>} />
                    <Route path='/create' element={<Create data={data} nameAndStar={nameAndStar} />}/>
                    <Route path='/mycard' element={<MyCard data={data} />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
