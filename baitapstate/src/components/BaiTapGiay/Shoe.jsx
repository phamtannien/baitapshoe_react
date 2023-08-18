import React, { Component } from 'react'

export default class Shoe extends Component {
  render() {
    return (
        <div className="card">
        <img className="card-img-top" src={this.props.element.image} alt="..." />
        <div className="card-body">
            <h4 className="card-title">{this.props.element.name}</h4>
            <p className="card-text">{this.props.element.price} $</p>
            <button
            onClick={()=>this.props.getShoeDetail(this.props.element)}
            data-toggle ="modal" 
            data-target = "#myModal" 
            className="btn btn-dark">SHOW DETAIL</button>
        </div>
    </div>

    )
  }
}
