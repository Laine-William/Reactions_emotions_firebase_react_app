import React from 'react';

import Header from '../../Components/Header/Header';
import IndexSession from '../../Components/IndexSession/IndexSession';
import Footer from '../../Components/Footer/Footer';

const Index = () => {

  return (

    <div className="site-wrapper">
        <Header />

        <IndexSession />
        
        <Footer />
    </div>
  );
};

export default Index;
