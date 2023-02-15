import React from 'react';

import Header from '../../Components/Header/Header';
import Progress from '../../Components/Progress/Progress';
import Footer from '../../Components/Footer/Footer';

const SessionInProgress = () => {

  return (

    <div className="site-wrapper">
      <Header />

      <Progress />

      <Footer />
    </div>
  );
};

export default SessionInProgress;