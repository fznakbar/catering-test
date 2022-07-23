import GoogleIcon from "../GoogleIcon";
import "./_NavBar.css";

const ArrowDown = (): JSX.Element => {
  return <GoogleIcon addOnsStyle='u-mr2' type='keyboard_arrow_down' />;
};

const NavBar = (): JSX.Element => {
  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: "smooth"});
  };

  return (
    <div className='navbar u-p2'>
      {/* DESKTOP VIEW */}
      <div className='grid u-right-align hide-mobile u-dark-blue-color'>
        <div className='left-bar'>
          <span onClick={scrollToTop}>Demos</span>
          <ArrowDown />
          <span>Pages</span>
          <ArrowDown />
          <span>Portfolio</span>
          <ArrowDown />
        </div>

        <div>
          <GoogleIcon addOnsStyle='u-mr2' type='shopping_cart' />
          <GoogleIcon addOnsStyle='u-mr2' type='search' />
          <input type='text' className='input-bar' />
        </div>
      </div>

      {/* MOBILE VIEW */}
      <div className='grid u-right-align hide-desktop u-dark-blue-color u-flex-center'>
        <div>
          <GoogleIcon addOnsStyle='u-mr2' type='shopping_cart' />
          <GoogleIcon addOnsStyle='u-mr2' type='search' />
          <GoogleIcon addOnsStyle='u-mr2' type='reorder' />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
