import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const Footer=()=> {
  return (
    <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted'>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        Copyright 2024 © Active Pest Control Service
        <Link className='text-reset fw-bold' to='https://technoid-hut.vercel.app' style={{ marginLeft: '50px' }}>
          Developed By TechnoidHut
        </Link>
      </div>
    </MDBFooter>
  );
}
export default Footer;
