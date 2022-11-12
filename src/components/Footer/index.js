import React from 'react';
import '../Footer/style.css'
import Logo from '../../components/Logo'

const Footer = () => {  
  return (
      <div className = 'fullFooter'>
        <div className='footerLogo'>
            <Logo></Logo>
        </div>
        <div className='line'>
        </div>
        <div className = 'footer1'>
            <h1 className='footerLine'>Design: Faith Marsco</h1>
            <h1 className='footerLine'>|</h1>
            <h1 className='footerLine'>Development: Anthony Pacella</h1>
            <h1 className='footerLine'>|</h1>
            <h1 className='footerLine'>Photography: <a href='http://www.tracylynn.photo/' target='_blank'>TracyLynn Photo</a></h1>
        </div>
      </div>


  )
}

export default Footer;
