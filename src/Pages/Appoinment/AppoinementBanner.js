import React from 'react';
import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppoinementBanner = ({date , setDate}) => {
   
    return (
        <div class="hero  bg-white">
  <div  class="hero-content flex-col lg:flex-row-reverse mr-10">
    <img src={chair} class="max-w-sm rounded-lg shadow-2xl" alt='chair'/>
    <div>
    <DayPicker 
     mode="single"
     selected={date}
     onSelect={setDate}
    />
    
    
   
    </div>
  </div>
 
</div>
    );
};

export default AppoinementBanner;