import { useRef, useState } from "react";
import Color from "./Color";

const ColorPalette = ( {setColor} ) => {
    const [isSelected, setIsSelected] = useState('');

    const id = useRef(0);

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
                    id.current++;
                    return (<button key={id.current} onClick={() => {
                        setColor(v);
                        setIsSelected(i);
                        if (isSelected === i) {
                            setColor('#eeeee4');
                            setIsSelected('');   
                        }
                    }}>
                        <Color id={i} color={v} isSelected={isSelected} />
                    </button>);
                })}
            </div>
        </div>
    );
};

export default ColorPalette;