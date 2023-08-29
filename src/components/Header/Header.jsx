import Profile from '../../img/profile.png';
import '../Header/Header.css';

const Header = () => {
  return (
    <div className='header'>
      <h2>Cup Classified</h2>
      <img src={Profile} alt="" />
    </div>
  );
};

export default Header;