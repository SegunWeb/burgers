import React from 'react';
import Header from "./Elements/Header";
import Layout from "./Layout";
import Home from "./Pages/Home";
import {Redirect, Route, Switch} from "react-router";


const App = () => {


   const route = (
       <Switch>
           <Route exact path={'/'} component={Home}/>
           <Redirect to={'/'}/>
       </Switch>
   )


  return (

      <div>
        <Header/>
        <Layout>
            {route}
        </Layout>
      </div>

  );
};

export default App;