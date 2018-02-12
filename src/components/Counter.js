import React, { Component } from 'react';

import CounterOutput from './CounterOutput'
import CounterControl from './CounterControl'
import CounterList from './CounterList'

import { connect } from 'react-redux'

class Counter extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <CounterOutput counter = {this.props.ctr} />
        <CounterControl title = "Increment +1" incrementCounter = {this.props.onIncrementCounter} />
        <CounterControl title = "Increment +5" incrementCounter = {this.props.onAddCounter} />
        <hr />
        <CounterList results = {this.props.results} saveResultClicked = {this.props.onSaveResult} />
      </div>
    )
  }
}

const mapStateToProps = state => {

    return {
      ctr : state.counter,
      results : state.results
    }
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter : () => dispatch({type :"INC_COUNTER"}),
    onAddCounter : () => dispatch({type :"ADD_COUNTER", value :5}),
    onSaveResult : () => dispatch({type : "SAVE_RESULT"})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
