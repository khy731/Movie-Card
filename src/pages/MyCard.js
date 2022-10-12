import { useState } from "react";
import useFetch from "../hooks/useFetch";
import CardList from "../components/CardList";
import Modal from "../components/Modal";

const MyCard = ( ) => {

    const data = useFetch('http://localhost:3001/movie');

    const [isModal, setIsModal] = useState(false);
    const [selectedData, setSelectedData] = useState({});

    return(
        <div>
        {data.length < 1 ? <h1>Loading...</h1> :
            <div className="MyCard">
                {isModal && <Modal data={selectedData} setIsModal={setIsModal} />}
                <h2>총 {data.length}개의 카드가 있습니다.</h2>
                <div>
                    {data.map(v=> (
                        <button className="AllCard" key={v.id} onClick={() => {
                            setIsModal(true);
                            setSelectedData(v);
                        }}>
                            <CardList data={v} color={v.color}/>
                        </button>
                    ))}
            </div>
        </div>
        }
    </div>
    );
};

export default MyCard;