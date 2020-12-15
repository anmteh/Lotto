import React, { Component } from 'react';
import Ball from './Ball';
import './Lotto.css';

class Lotto extends Component {
  static defaultProps = {
    title: 'Lotto',
    numBalls: 6,
    maxNum: 40
  }
  constructor(props) {
    super(props);
    this.state = {nums: Array.from({length: this.props.numBalls})}
    this.handleClick = this.handleClick.bind(this)
  }

  generate() {
    this.setState(curState => ({
      nums: curState.nums.map(
        n => Math.floor(Math.random() * this.props.maxNum) + 1
        )
    }))
  }

  handleClick() {
    this.generate()
  }

  render() {
   return (
   <section className="Lotto">
      <h1>{this.props.title}</h1>
      <div className="balls">
        {this.state.nums.map(n => <Ball num={n} />)}
      </div>
      <button className="clicker" onClick={this.handleClick}>Drop the balllls</button>
    </section>
   )
  }
}

export default Lotto;
