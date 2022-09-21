import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="Header">
            <h2 className='leftChild'>
                <Link to={-1}>{'<'}</Link>
            </h2>
            <h2 className='centerChild'>
                <Link to={'/'}>Make A Card</Link>
            </h2>
            <h2 className='rightChild'>
                <Link to={'/mycard'}>my card</Link>
            </h2>
        </header>
    );
};

export default Header;