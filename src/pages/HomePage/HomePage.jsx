import React from 'react';
import Banner from '../../components/shared/HomePage/Banner';
import Summary from '../../components/shared/HomePage/Summary';
import Friends from '../../components/shared/HomePage/Friends';


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