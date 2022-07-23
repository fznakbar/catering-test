import GoogleIcon from "../GoogleIcon";
import "./_Card.css";

export interface ICard {
  icon: string;
  title: string;
  description: string;
}

const Card = ({icon, title, description}: ICard): JSX.Element => {
  return (
    <div className='card'>
      <div className='u-m2'>
        <div className='u-pink-text'>
          <GoogleIcon type={icon} addOnsStyle='portfolio-icon' />
        </div>
        <p className='portfolio-title'>{title}</p>
        <p className='portfolio-description'>{description}</p>
      </div>
    </div>
  );
};

export default Card;
