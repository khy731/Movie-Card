import { useState } from "react";

const Color = ( {id, color, setColor, colorPush, oneColor} ) => {

    console.log(id, oneColor);

    const handleClick = () => {
        setColor(color);
        colorPush(id);
    };

    return (
        <button className="Color" style={{backgroundColor:`${color}`, border:`${oneColor === id ? `solid 1px gray` : ''}`}} onClick={handleClick} />
    );
};

export default Color;