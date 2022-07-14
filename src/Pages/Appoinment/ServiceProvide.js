import React from 'react';

const ServiceProvide = ({service , setTreatMent}) => {
    const {name , slots} = service;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title text-secondary">{name}!</h2>
          <p>
            {
                slots.length>0 ?
                <span>{slots[0]}</span> : <span className='text-red-500'>Plz Try Another Day</span>
            }
          </p>
          <p>{slots.length} {slots.length >1 ? "spaces" : 'space'} Available</p>
          <div class="card-actions justify-center">
           
            <label onClick={()=>setTreatMent(service)} disabled={slots.length === 0}  for="booking-modal-6" class="btn btn-secondary text-white">Book Appoinment</label>
          </div>
        </div>
      </div>
    );
};

export default ServiceProvide;