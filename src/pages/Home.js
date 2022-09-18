import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='Home'>
            <h1>오늘 본 작품,</h1>
            <div>
                <Link className='goto_create' to={'/new'}>카드 만들기</Link>
            </div>
            <h1>로 리뷰하세요!</h1>
        </div>
    );  
};

export default Home;
