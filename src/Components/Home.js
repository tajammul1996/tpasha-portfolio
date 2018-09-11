import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Typed from 'react-typed';
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
          <h1 className='heading'>Hi! My name is Tajammul.</h1>
        </div>
        <div>
          <h1 className='subheading'><Typed 
                    strings={['Software engineer', 'Problem solver', 'Technology evangelist']} 
                    typeSpeed={100} 
                    reset={true}
                /></h1>
        </div>
        <div className='icon-container'>
          <div><a href="https://www.linkedin.com/in/tajammul1996/" target='_blank' rel="noopener noreferrer"><FontAwesomeIcon size='lg' icon={faLinkedin} /></a></div>
          <div><a href="https://plus.google.com/u/0/109831505552323397507" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon size='lg' icon={faGooglePlus}/></a></div>
          <div><a href="https://twitter.com/tajammul1996" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon size='lg' icon={faTwitter} /></a></div>
          <div><a href="https://github.com/tajammul1996" target='_blank' rel="noopener noreferrer"><FontAwesomeIcon size='lg' icon={faGithub} /></a></div>
        </div>
      </div>
    );
  }
}

export default Home;

