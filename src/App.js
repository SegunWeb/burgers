import React from 'react';
import Header from "./Elements/Header";
import Layout from "./Layout";
import Home from "./Pages/Home";


const App = () => {
  return (

      <div>
        <Header/>
        <Layout>
            <Home />
        </Layout>
      </div>

  );
};

export default App;