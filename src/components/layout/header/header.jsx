import React, { Component, Fragment } from 'react'

import "./header.scss";
import { NavLink } from 'react-router-dom';

export class Header extends Component {
  render() {
    return (
      <Fragment>
        <header>
          <div className="container header__container">
            <div className='site__img__box'>
              <a href="#home">
                Fakhriddin
              </a>
            </div>
            <nav>
              <ul className='nav__list'>
                <li className='nav__item category__name__item'>
                  <NavLink to="/"> Home </NavLink>
                </li>
                <li className='nav__item category__name__item'>
                  <NavLink to="/products/category/electronics"> Electronics </NavLink>
                </li>
                <li className='nav__item category__name__item'>
                  <NavLink to="/products/category/jewelery"> Jewelery </NavLink>
                </li>
                <li className='nav__item category__name__item'>
                  <NavLink to="/products/category/men's clothing"> Men's Clothing </NavLink>
                </li>
                <li className='nav__item category__name__item'>
                  <NavLink to="/products/category/women's clothing"> Women's Clothing </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </Fragment>
    )
  }
}

export default Header