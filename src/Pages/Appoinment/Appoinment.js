import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AppoinementBanner from './AppoinementBanner';
import Availableppoinment from './Availableppoinment';


const Appoinment = () => {
    const [date , setDate] = useState(new Date())
    return (
        <div>
            <AppoinementBanner date={date} setDate={setDate}></AppoinementBanner>
            <Availableppoinment date={date}></Availableppoinment>
            <Footer></Footer>
        </div>
    );
};

export default Appoinment;