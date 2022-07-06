import React from 'react';

const InfoCard = ({img , cardTitels ,bgClass }) => {
    return (
        <div class={`card lg:card-side  shadow-xl  text-white ${bgClass}`}>
        <figure ><img className='pl-5' src={img} alt="Album"/></figure>
        <div class="card-body">
          <h2 class="card-title">{cardTitels}</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div class="card-actions justify-end">
            
          </div>
        </div>
      </div>
    );
};

export default InfoCard;