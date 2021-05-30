import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className='container-fluid bg-dark text-white text-center py-3'>
      <Link to='/' className='h1 '>
        Quiz
      </Link>
    </div>
  );
};

export default Header;
