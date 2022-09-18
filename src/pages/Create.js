import { useState } from 'react';

const Create = ( {data, nameAndStar} ) => {

    const [contents, setContents] = useState();
    const handleContents = e => {
        setContents(e.target.value);
    };

    const createCard = () => {
        // POST 요청
        // 클라이언트 측 리렌더링
    }

    return (
        <div className="Create">
            <h1>스타워즈에 5점을 주셨군요!</h1>
            <h3>자세한 리뷰를 입력해주세요.</h3>
            <textarea value={contents} onChange={handleContents} placeholder="정말 감동적인 작품이었다..."></textarea>
            <div>
                <button onClick={createCard}>카드 만들기</button>
            </div>
        </div>
    );
};

export default Create;