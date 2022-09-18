import CardList from "./CardList";

const MyCard = ( {data} ) => {

    console.log(data);
    // 서버 띄워서 렌더링 하기

    return(
        <div className="MyCard">
            <h2>총 {data.length}개의 카드가 있습니다.</h2>
            <div>
                {data.map(v=> (
                    <CardList id = {v.id} data={v}/>
                ))}
            </div>
        </div>
    );
};

export default MyCard;