import React, { Component } from 'react'

export default class Modal extends Component {
    
  render() {
    
    return (
        <div className="modal" id='myModal' tabIndex={-1} role="dialog">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" style={{color:"red"}}>{this.props.detail.name}</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">Price: {this.props.detail.price} $</span>
        </button>
      </div>
      <div className="modal-body d-flex">
        <div className='w-50' >
        <p>ID: {this.props.detail.id}</p>
        <p>alias: {this.props.detail.alias}</p>
        <p>Description: {this.props.detail.description}</p>
        <p>ShortDescription: {this.props.detail.shortDescription}</p>
        <p>Quantity: {this.props.detail.quantity}</p>
        </div>
        <div className='w-50'>
            <img className='w-100' src={this.props.detail.image} alt="..." />
        </div>
        
        
      </div>
      <div className="modal-footer">
        
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

    )
  }
}
