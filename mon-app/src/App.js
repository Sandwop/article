import Avatar from './img/avatar-michelle.jpg';
import Share from './img/icon-share.svg';
import Facebook from './img/icon-facebook.svg';
import Twitter from './img/icon-twitter.svg';
import Pinterest from './img/icon-pinterest.svg';
import {useState} from 'react';

function App() {

  const [isActive, setIsActive] = useState(false);

  const handleClick = event => {
    setIsActive(current => !current);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="column colLeft">
        </div>
        <div className="column colRight">
          <h3>Shift the overall look and feel by adding these wonderful touches to furniture in your home</h3>
          <p>Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I've got some simple tips to help you make any room feel complete.</p>
          <div className="profile">
            <img src={Avatar} />
            <div className="profileName">
              <p className="name">Michelle Appleton</p>
              <p className="date">28 Jun 2020</p>
            </div>
          </div>
        </div>
        <div className={isActive ? 'active Rs' : 'Rs'}>
          <p>Share</p>
          <img src={Facebook} />
          <img src={Twitter} />
          <img src={Pinterest} />
        </div>
        <button className='share' onClick={handleClick}><img src={Share} /></button>
      </div>
    </div>
  );
}

export default App;
