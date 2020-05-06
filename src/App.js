import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Fox from './Components/Fox';



function App() {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1>Royal Foxes</h1>
      </div>
      <div className="row">
        <Fox 
          name="Fantastic Mr. Fox"
          rank={1}
          furColor="Auburn"
        />
        <Fox 
          name="Michael J"
          rank={2}
          furColor="Silver"
        />
        <Fox 
          name="Fox Mc Cloud"
          rank={3}
          furColor="Brownish"
        />
        <Fox 
          name="Sandy"
          rank={4}
          furColor="Blonde"
        />
        <Fox 
          name="Karama Kiyubii"
          rank={0}
          furColor="Orange"
        />
      </div>
    </div>
  );
}

export default App;
