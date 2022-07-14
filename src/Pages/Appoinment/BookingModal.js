import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({treatMent , date , setTreatMent}) => {
    const {_id , name , slots } = treatMent;
    const handleBooking = event =>{
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(slot , name , _id); 
        setTreatMent(null)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal-6" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <h3 class="font-bold text-lg text-secondary ">Booking for {name}</h3>
    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-4 justify-center items-center'>
    <input type="text" disabled value={format(date, 'PP')} class="input input-bordered input-error w-full max-w-xs" />
    <input type="text" placeholder="Type here" class="input input-bordered input-error w-full max-w-xs" />
    <select name='slot' class="select select-bordered w-full max-w-xs">
  {
    slots.map(slot=><option value={slot}>{slot}</option>)
  }
 
</select>
    
    <input type="text" name='name' placeholder='name'  class="input input-bordered input-error w-full max-w-xs" />
    <input type="text"name='email' placeholder="Enter Email" class="input input-bordered input-error w-full max-w-xs" />
    <input type="text" name='phone' placeholder="Phone Number" class="input input-bordered input-error w-full max-w-xs" />
   
    <input type="submit" value='submit' placeholder="Type here" class="btn btn-secondary w-full max-w-xs" />
    </form>
    <label for="booking-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <div class="modal-action">
      <label for="booing-modal-6" class="btn">Yay!</label>
    </div>
  </div>
</div>
        </div>
    );
};

export default BookingModal;