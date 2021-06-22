import React from "react";
import "./Counter.css";



class Counter extends React.Component {
  state = {
    basicValue: this.props.value,
  }

  onChange = (modifier) => {
    this.setState({basicValue: this.state.basicValue + modifier})
  }

  render() {
    return (
      <div className = {this.props.wrapClass}>
        <button className = {this.props.cssClass} type="button" onClick={() => this.onChange(-(this.props.number))}>-{this.props.number}</button>
        <div>{this.state.basicValue}</div>
        <button className = {this.props.cssClass} type="button" onClick={() => this.onChange(this.props.number)}>+{this.props.number}</button>
      </div>
    )
  }
}


export default Counter