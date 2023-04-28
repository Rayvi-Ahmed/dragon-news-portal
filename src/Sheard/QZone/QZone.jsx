import React from 'react';
import image1 from '../../assets/qZone1.png'
import image2 from '../../assets/qZone2.png'
import image3 from '../../assets/qZone3.png'

const QZone = () => {
    return (
        <div className='bg-light'>
            <div className='py-4 my-3'>
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />

            </div>
        </div>
    );
};

export default QZone;