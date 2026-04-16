import React from 'react';
import Banner from '../../components/HomePage/Banner';
import Summary from '../../components/HomePage/Summary';
import Friends from '../../components/HomePage/Friends';


const HomePage = () => {
    return (
        <div>
            <Banner />
            <Summary />
            <Friends />
        </div>
    );
};

export default HomePage;