import { useRef, useState } from "react";
import Color from "./Color";

const ColorPalette = ( {setColor} ) => {
    const [selectedColor, setSelectedColor] = useState([]);

    const colorPush = (id) => {
        setSelectedColor([...selectedColor, id]);
    };

    const oneColor =  selectedColor.slice(-1)[0];

    const allColors = [
        '#EAECEE',
        '#FCF3CF',
        '#FFEBEE',
        '#FAE1ED',
        '#E9F7EF',
        '#EDE7F6',
        '#F9E4B5',
        '#CAF9B5'
    ];

    return (
        <div className="ColorPalette">
            <h2>컬러 팔레트</h2>
            <div className="AllColor">
                {allColors.map((v,i) => {
                    return (<Color key={i} id={i} color={v} setColor={setColor} colorPush={colorPush} oneColor={oneColor} />);
                })}
            </div>
        </div>
    );
};

export default ColorPalette;