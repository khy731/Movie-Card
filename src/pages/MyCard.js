import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import CardList from "./CardList";

const MyCard = ( ) => {

    // 서버 띄워서 렌더링 하기
    const data = useFetch('http://localhost:3001/movie');

    return(
        <div className="MyCard">
            <h2>총 {data.length}개의 카드가 있습니다.</h2>
            <div>
                {data.map(v=> (
                    <Link className="AllCard" key={v.id} to={`/card/${v.id}`}>
                        <CardList data={v} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default MyCard;