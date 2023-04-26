import React from 'react';
import logo from '../../../src/assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div>

            <div className='text-center mb-2'>
                <img src={logo} alt="" />
                <p className='text-secendary'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>

            </div>
        </div>
    );
};

export default Header;