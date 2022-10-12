const Preview = ( {name, star, contents, color} ) => {

    return (
        <div className="Preview">
            <h2>카드 미리보기</h2>
            <div className="Card" style={{backgroundColor:`${color}`}}>
                <h3>{name}에 {star}점을 주셨군요!</h3>
                <p>{contents}</p>
            </div>
        </div>
    );
};

export default Preview;