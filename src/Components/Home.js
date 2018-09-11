import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin, faGooglePlus } from '@fortawesome/fontawesome-free-brands';
import '../Styles/Home.css';

class Home extends Component {

  render() {
    return (
      <div className='background'>
        <div className='img-data-container'>
          <img className='circle-img' src={'https://avatars1.githubusercontent.com/u/9709464?s=400&u=c2b61497d969fd435eeddb77560d7d3e5e1195f1&v=4'} alt='Tajammul Pasha'/>
        </div>
        <div>
          <h1 className='heading'>Hi..</h1>
        </div>
        <div className='icon-container'>
          <div><a href="http://www.google.com" target='_blank'><FontAwesomeIcon size='lg' icon={faLinkedin} /></a></div>
          <div><FontAwesomeIcon size='lg' icon={faGooglePlus}/></div>
          <div><FontAwesomeIcon size='lg' icon={faTwitter} /></div>
          <div><FontAwesomeIcon size='lg' icon={faGithub} /></div>
        </div>
      </div>
    );
  }
}

export default Home;

