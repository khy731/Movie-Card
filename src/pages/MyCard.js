import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import CardList from "./CardList";
import Modal from "./Modal";

const MyCard = ( ) => {

    // 서버 띄워서 렌더링 하기
    const data = useFetch('http://localhost:3001/movie');

    // 모달 상태 관리
    const [isModal, setIsModal] = useState(false);

    const showModal = () => {
        setIsModal(true);
    };
    
    const closeModal = () => {
        setIsModal(false);
    }

    return(
        <div>
        {data.length < 1 ? <h1>Loading...</h1> :
            <div className="MyCard">
                { isModal && <Modal closeModal={closeModal} /> }
                <h2>총 {data.length}개의 카드가 있습니다.</h2>
                <div>
                    {data.map(v=> (
                        <button className="AllCard" key={v.id} onClick={showModal}>
                            <CardList data={v} />
                        </button>
                    ))}
            </div>
        </div>
        }
    </div>
    );
};

export default MyCard;