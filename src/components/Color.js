const Color = ( {id, color, isSelected} ) => {

    console.log(isSelected);

    return (
        <div className={`Color${isSelected === id ? 'Selected' : ''}`} style={{backgroundColor:`${color}`}} />
    );
};

Color.defaultProps = {
    color: '#eeeee4',
};

export default Color;