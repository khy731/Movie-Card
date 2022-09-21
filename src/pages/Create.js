import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = ( {name, star} ) => {

    const [contents, setContents] = useState();

    const navigate = useNavigate();

    const handleContents = e => {
        setContents(e.target.value);
    };

    const createCard = () => {
        if (window.confirm('카드를 만드시겠습니까?')) {
            fetch('http://localhost:3001/movie', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    date: new Date().toLocaleString(),
                    star,
                    contents,
                }),
            })
            .then(res => {
                if (res.ok) {
                    alert('카드가 완성되었습니다!');
                    navigate('/MyCard');
                }
            })
        }
    };

    return (
        <div className="Create">
            <h2>자세한 리뷰를 입력해주세요.</h2>
            <textarea value={contents} onChange={handleContents} placeholder="정말 감동적인 작품이었다..."></textarea>
            <div>
                <button onClick={createCard}>카드 만들기</button>
            </div>
        </div>
    );
};

export default Create;