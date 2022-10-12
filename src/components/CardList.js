import { useState, useRef, useEffect } from "react";

const CardList = ( {data, color} ) => {
    
    const [content, setContent] = useState(data.contents);
    const contentLimit = useRef(100);
    const newContent = () => {
        const shortContent = content.slice(0, contentLimit.current);
        
        if (content.length < contentLimit) return;
        setContent(shortContent + '...');
    }

    useEffect(() => {
        newContent();
    }, []);

    return(
        <div className="CardList" style={{backgroundColor:`${color}`}}>
            <h3>{data.name}에 {data.star}점을 주셨군요!</h3>
            <p>{content}</p>
            <p>{data.date}</p>
        </div>
    );
};

export default CardList;