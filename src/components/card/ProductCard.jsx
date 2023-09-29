import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import "./productcard.scss";

export class ProductCard extends Component {
  render() {

    const { id, title, price, category,  image } = this.props; 

    return (
      <Fragment>
        <div className='product__card__box'>
          <Link to={`/${id}`}>
            <div className="img__box">
              <img src={image} alt={title} />
            </div>
            <h4>Name: {title}</h4>
            <p>Category:{category}</p>
            <span>Price{price}</span>
          </Link>
        </div>
      </Fragment>
    )
  }
}

export default ProductCard