import React, { Component } from 'react'

export default class BoxClass extends Component {
  render() {
    return (
        <div className={ "box " + this.props.result }>
            <h2>{ this.props.title }</h2>
            <img className="box-img" src={this.props.item && this.props.item.img}></img>
            <h3>{ this.props.result }</h3>
        </div>
    )
  }
}
