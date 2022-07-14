import React from 'react';
import doctors from '../../assets/images/doctor.png'
import appoinment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppoinment = () => {
    return (
        <section style={{
            background: `url(${appoinment})`
        }} className='flex justify-center items-center '>
            <div className='flex-1'>
        <img className='mt-[-140px] hidden lg:block' src={doctors} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-primary'>Appoinment </h3>
                <h2 className='text-3xl text-white'>Make An Appoinment Today</h2>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus inventore quidem voluptatibus ex est porro beatae eius rem delectus a laborum possimus tempore, repudiandae corrupti placeat, dicta nostrum assumenda, pariatur dignissimos aperiam alias ad fugit quasi. Voluptatum quasi eum amet.</p>
                <PrimaryButton>Get starts</PrimaryButton>

            </div>
        </section>
                       
    );
};

export default MakeAppoinment;