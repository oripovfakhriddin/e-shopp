import axios from 'axios';
import React, { Component } from 'react'
import { ENDPOINT } from '../constants/const';
import Product from '../components/product/product';



export class ProductPage extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
      product: null,  
    }
  }
  async getProduct() {
    let productId = window.location.pathname.split("/").at(-1);
    let res = await axios.get(`${ENDPOINT}products/${productId}`)
    this.setState({product: res.data})
  }

  componentDidMount(){
    this.getProduct();
  }
  
  render() {
    const { product } = this.state;
    return (
      <Product key={product?.id} product={ product }/>
    )
  }
}

export default ProductPage