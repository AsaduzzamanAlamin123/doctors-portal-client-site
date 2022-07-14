import React from 'react';
import treatment from '../../assets/images/treatment.png'

const HeroService = () => {
    return (
        <div class="hero min-h-screen bg-base-100">
        <div class="hero-content flex-col lg:flex-row">
          <img className='rounded' src={treatment} />
          <div>
            <h1 class="text-5xl font-bold">exceptional dental care , on your trams!</h1>
            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti excepturi exercitationem quasi. In deleniti excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default HeroService;