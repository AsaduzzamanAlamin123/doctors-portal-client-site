import React from 'react';
import quotes from '../../assets/icons/quote.svg'
import pepole1 from '../../assets/images/people1.png'
import pepole2 from '../../assets/images/people2.png'
import pepole3 from '../../assets/images/people2.png'
import Review from './Review';

const Testomonial = () => {
    const reviews = [ 
        {
          _id:1,
          name:'Winson Harry',
          review:'',
          img:pepole1 ,
          location:'california'
        },
        {
          _id:2,
          name:'Winson Harry',
          review:'',
          img:pepole2  ,
          location:'california'
        },
        {
          _id:3,
          name:'Winson Harry',
          review:'',
          img:pepole3  ,
          location:'california'
        }
    ]
    return (
        <section className='my-28'>
            <div className='flex  justify-between'>
                <div>
                <h4 className='text-xl text-primary font-bold'>Testomonials </h4>
                <h2 className='text-3xl '> What our Patient say</h2>
                </div>
                <div>
                <img src={quotes} className='w-48' alt="" />

                </div>

            </div>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-5'>

            {
                reviews.map(review => <Review key={review._id} review={review}></Review>)
            }
            </div>
        </section>
    );
};

export default Testomonial;