import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Card = ( ) => {

    const { id } = useParams();

    const [matchedData, setMatchedData] = useState([]);

    const getData = async() => {
        const res = await fetch(`http://localhost:3001/movie/${id}`)
                    .then(res => res.json());
        setMatchedData(res);
    };

    useEffect(() => {
        getData();
    }, []);

    const [isEdit, setIsEdit] = useState(false);
    const [localContents, setLocalContents] = useState(matchedData.contents);
    const navigate = useNavigate();


    const toggleIsEdit = () => {
        setIsEdit(!isEdit);
        setLocalContents(matchedData.contents);
    }
    const handleTextarea = e => {
        setLocalContents(e.target.value);
    };

    const editCard = () => {
        fetch(`http://localhost:3001/movie/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                contents: localContents,
                date: new Date().toLocaleString(),
            }),
        })
        .then(res => {
            if(res.ok) {
                toggleIsEdit();
                setMatchedData({
                    ...matchedData,
                    contents: localContents,
                });
            }
        })
    };

    const removeCard = () => {
        if (window.confirm("삭제하시겠습니까?")) {
            fetch(`http://localhost:3001/movie/${id}`, {
                method: "DELETE",
            })
            .then(res => {
                if(res.ok) {
                    alert("삭제 완료!");
                    navigate("/mycard");
                }
            })
        }
    }

    return (
            <div className="Card">
                <h3>{matchedData.name}에 {matchedData.star}점을 주셨군요!</h3>
                <div>
                    { isEdit ? 
                        <textarea value={localContents} onChange={handleTextarea}></textarea>
                        :
                        <p>{matchedData.contents}</p>    
                    }
                </div>
                <p>{matchedData.date}</p>
                <div>
                    { isEdit ?
                    <div>
                        <button onClick={toggleIsEdit}>수정 취소</button>
                        <button onClick={editCard}>수정 완료</button>
                    </div>
                        :
                    <div>
                        <button onClick={toggleIsEdit}>수정하기</button>
                        <button onClick={removeCard}>삭제하기</button>
                    </div> 
                    }
                </div>
            </div>
    );
};

export default Card;