import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


import Header from './Header';
import Landing from './pages/Landing';
import About from './pages/About';
import Shop from './shop/Shop';
import Chatbot from './chatbot/Chatbot';

const App = () => (
    <div>
       <BrowserRouter>
           <div className="container">
               <Header />
               <Route exact path="/" component={Landing} />
               <Route exact path="/about" component={About} />
               <Route exact path="/shop" component={Shop} />
               <Chatbot />
           </div>
       </BrowserRouter>
    </div>
)

export default App;
