import React from 'react';

const Review = ({review}) => {
    return (
        
        <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">Card title!</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde voluptatibus ipsam rerum ex. Et, tempore!</p>
          <div class="flex items-center">
          <div class="avatar">
  <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
    <img src={review.img} alt='kisu akta' />
  </div>
</div>
<div>
<h4 className='text-3xl'>{review.name}</h4>
<p>{review.location}</p>
</div>


            
 </div>
        </div>
      </div>
    );
};
    

export default Review;