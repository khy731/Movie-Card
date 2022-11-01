const Dropdown = ( {movieNm} ) => {

    const movie = movieNm?.replace(/<b>/gi,"").replace(/<\/b>/gi,"");
    
    return (
        <div className='Dropdown'>
            {movie}
        </div>
    );
};

export default Dropdown;