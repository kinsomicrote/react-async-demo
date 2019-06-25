import React from 'react';
import './App.css';
import Async from 'react-async';

const loadJson = () =>
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())

function App() {
  return (
    <div className="container">
      <Async promiseFn={loadJson}>
          <Async.Loading>Loading...</Async.Loading>
          <Async.Fulfilled>
            {data => {
              return (
                <div>
                  <div>
                    <h2>React Async - Random Users</h2>
                  </div>
                  {data.map(user=> (
                    <div key={user.username} className="row">
                      <div className="col-md-12">
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )
            }}
          </Async.Fulfilled>
          <Async.Rejected>{error => `Something went wrong: ${error.message}`}</Async.Rejected>
      </Async>
    </div>
  );
}

export default App;
