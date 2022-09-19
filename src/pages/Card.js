import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const Card = ( ) => {

    const { id } = useParams();
    const matchedData = useFetch(`http://localhost:3001/movie/${id}`);

    return (
            <div className="Card">
                <h3>{matchedData.name}에 {matchedData.star}점을 주셨군요!</h3>
                <p>{matchedData.contents}</p>
                <p>{matchedData.date}</p>
            </div>
    );
};

export default Card;