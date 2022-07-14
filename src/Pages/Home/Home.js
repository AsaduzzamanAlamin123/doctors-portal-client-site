import React from 'react';
import Banner from './Banner';
import Footer from '../Shared/Footer';
import Info from './Info';
import MakeAppoinment from './MakeAppoinment';
import Services from './Services';
import Testomonial from './Testomonial';


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Info></Info>
           <Services></Services>
           <MakeAppoinment></MakeAppoinment>
           <Testomonial></Testomonial>
           <Footer></Footer>
        </div>
    );
};

export default Home;