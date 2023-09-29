import React, { Component, Fragment } from 'react'
import axios from 'axios';

import { ENDPOINT } from "../constants/const.js" 
import ProductCard from '../components/card/ProductCard';

import "../style/homepage.scss"

export class HomePage extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      products: null,
      totalCount: 0,
      loading: false,
    }
  }

  async getProducts () {
    try {
      this.setState({loading: true})
      let { data } = await axios.get(`${ENDPOINT}products`);
      this.setState({products: data, totalCount: data.length, loading: false, })
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount(){
    this.getProducts();
  }


  render() {

    const { products, totalCount, loading } = this.state;
    

    return (
      <Fragment>
        <section id='home'>
          <div className="container">
            <h1 className='homepage__title'>All Products</h1>
            <div className='count__box'>
              <p>Total products: <span>{ totalCount }</span></p>
            </div>
            <div className="all__products__box">
            { loading ?  <h1>Loading...</h1> 
              :  products?.map((product, i) => <ProductCard key={i} { ...product } />) }
            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}

export default HomePage