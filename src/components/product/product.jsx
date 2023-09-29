import React, { Component, Fragment } from 'react'

import "./product.scss";

export class Product extends Component {
  render() {
    
    const { product  } = this.props;

    return (
      <Fragment>
        <section>
          <div className="container">
            {/* <div className="product__box">
              <div className="product__img__box">
                <img src={product?.image} alt={product?.title} />
              </div>
              <div className="product__content__box">
                <h3>{product?.title}</h3>
                <p>{product?.description}</p>
                <p>{product?.rating}</p>
                <p>{product?.price}</p>
                <p>{product?.category}</p>
              </div>
            </div> */}
          </div>
        </section>
      </Fragment>
    )
  }
}

export default Product