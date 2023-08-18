import React, { Component } from 'react'
import Modal from './Modal'
import ShoeList from './ShoeList'
import data from "../../data/data.json"

export default class ShoeStore extends Component {
    state ={
        shoeDetail: data[0],
    }
    getShoeDetail = (shoe)=>{
        this.setState({
            shoeDetail: shoe,
        })
    }
    render() {
        
        return (
            <div className='container'>
                <header><h1 style={{ textAlign: 'center' }}>SHOE STORE</h1></header>
               <ShoeList getShoeDetail={this.getShoeDetail} data={data}/>
                <Modal detail={this.state.shoeDetail}/>
            </div>
        )
    }
}
