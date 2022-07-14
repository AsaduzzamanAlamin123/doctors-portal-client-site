import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';


import ServiceProvide from './ServiceProvide';

const Availableppoinment = ({date}) => {
    const [treatMent , setTreatMent] = useState(null)
    const [services , setServices] = useState([]);
    console.log(services);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
           <h2 className='text-xl text-center text-primary'> Available appoinment on  {format(date, 'PP')}..</h2>

           <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-5'>
            {
             services.map(service =><ServiceProvide key={service._id} service={service}
             setTreatMent={setTreatMent}
             ></ServiceProvide>) 

            }
            </div>
            {treatMent && <BookingModal date={date}  setTreatMent={setTreatMent} treatMent={treatMent}></BookingModal>}
           
            
        </div>
    );  
};

export default Availableppoinment;