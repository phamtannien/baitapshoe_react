import React, { Component } from 'react'
import Shoe from './Shoe'

export default class ShoeList extends Component {
    renderShoeList = ()=>{
     return   this.props.data.map((element, idx)=>{
            return(
                <div key={idx} className="col-3">
                    <Shoe getShoeDetail={this.props.getShoeDetail} element={element}/>
                </div>
            )
        })
    }
  render() {

    return (
        <div className="row ">{this.renderShoeList()}</div>
    )
  }
}
