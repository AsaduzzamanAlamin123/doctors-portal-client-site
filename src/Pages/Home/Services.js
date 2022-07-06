import React from 'react';
import floride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import Service from './Service';


const Services = () => {
    const services = [
        {
            _id:1,
            name:'Fluride Treatment',
            Description:'',
            img:floride




        },
        {
            _id:2,
            name:'Cavity Filling',
            Description:'',
            img:cavity




        },
        {
            _id:3,
            name:'Teeth Whitening',
            Description:'',
            img:whitening




        }
    ]
    return (
        <div className='my-28'>
        <div className='text-center'>
        <h1 className='text-primary font-bold uppercase'> Our Services </h1>
          <h2 className='text-2xl font-bold'>services We Provide</h2>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3'>
            {
                services.map(service =><Service 
                    key={service._id}
                    service ={service}
                ></Service>)
            }

        </div>
        </div>
    );
};

export default Services;