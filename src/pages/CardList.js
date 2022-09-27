const CardList = ( {data} ) => {

    return(
        <div className="CardList">
            <h3>{data.name}에 {data.star}점을 주셨군요!</h3>
            <p>{data.contents}</p>
            <p>{data.date}</p>
        </div>
    );
};

export default CardList;