import React, { Component } from 'react';

const counterList = (props) => (
  <div>
    <button onClick={props.saveResultClicked}>Save</button>
    <ul>
      {props.results.map((counter,index) => {
        return <li key={index}>{counter}</li>
      })}
    </ul>
  </div>
)

export default counterList
