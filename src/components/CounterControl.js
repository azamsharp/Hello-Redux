import React, { Component } from 'react';

const counterControl = (props) => (

    <div>
      <button onClick={props.incrementCounter}>{props.title}</button>
    </div>
)

export default counterControl
