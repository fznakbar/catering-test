import BackgroundIngredients from "../../Assets/background-ingredients1.jpeg";
import {cardList} from "../../constant";
import Card, {ICard} from "../Card/Card";
import "./_BodyView.css";

const BodyView = (): JSX.Element => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  return (
    <>
      <div>
        <div className='image-container'>
          <img src={BackgroundIngredients} alt='img' className='image' />
          <div className='content'>
            <div className='marginal'>
              <p className='u-first-banner'>Catering should be an experience</p>
              <p className='u-second-banner'>
                We use only the finest and freshest ingredients
              </p>
              <p className='u-third-banner'>
                At Sway catering we know that food is an important part of life.
                If the meal is not perfect, your event cannot be perfect.
              </p>
              <button className='u-request-button'>
                {"Request a Quote >"}
              </button>
            </div>
          </div>

          <div className='header'>
            <div>
              <svg
                className='waves'
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                viewBox='0 24 150 28'
                preserveAspectRatio='none'
                shape-rendering='auto'
              >
                <defs>
                  <path
                    id='gentle-wave'
                    d='M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z'
                  />
                </defs>
                <g className='parallax'>
                  <use
                    xlinkHref='#gentle-wave'
                    x='48'
                    y='0'
                    fill='rgba(255,255,255,0.7'
                  />
                  <use
                    xlinkHref='#gentle-wave'
                    x='48'
                    y='3'
                    fill='rgba(255,255,255,0.5)'
                  />
                  <use
                    xlinkHref='#gentle-wave'
                    x='48'
                    y='5'
                    fill='rgba(255,255,255,0.3)'
                  />
                  <use xlinkHref='#gentle-wave' x='48' y='7' fill='#fff' />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className='u-center-align u-mb4 u-mt4'>
        <div className='marginal-2'>
          <p className='u-first-banner u-grey-color'>
            Catering service in New York
          </p>
          <p className='u-second-middle-banner u-dark-blue-color'>
            We specialize in corporate and private events
          </p>
          <p className='u-third-middle-banner u-grey-color'>
            With 20 years of experience, we promise you the freshest, local
            ingridents, hand-crafted cooking sprinkled with our unique whimsical
            elegance and exceptional service.
          </p>
        </div>
      </div>

      <hr className='breakline' />

      <div className='u-mt2 grid-wrapper'>
        <div className='one u-grey-background u-white-text'>
          <p className='my-portfolio-title'>My Portfolio</p>
        </div>

        <div className='two'>
          {cardList.map((el: ICard, key: number) => (
            <Card
              icon={el.icon}
              title={el.title}
              description={el.description}
              key={key}
            />
          ))}
        </div>

        <div className='three'>
          <div className='marginal-3'>
            <p className='portfolio-title'>Services</p>
            <p className='portfolio-subtitle'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              bibendum facilisis turpis eget tempor. Suspendisse potenti.
            </p>
            <p className='portfolio-service-description'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              bibendum facilisis turpis eget tempor. Etiam in pharetra neque, ac
              vehicula ex.
            </p>
            <p className='portfolio-service-description'>
              Proin at quam eget magna blandit consectetur nec tristique sapien.
              Sed blandit, quam eget tincidunt aliquam, metus ex cursus sem, vel
              vestibulum turpis urna eu purus.
            </p>
            <div>
              <button className='u-portfolio-button u-mr2'>
                {"Download CV"}
              </button>
              <button className='u-portfolio-button'>
                {"Check My Portfolio"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BodyView;
