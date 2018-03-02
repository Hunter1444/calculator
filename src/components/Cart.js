import React from 'react';
import { connect } from 'react-redux';
import ApplyDiscount from './ApplyDiscount';

class Cart extends React.Component{
  render(){
    const rows = this.props.products.map(function(item, index){
      return(
        <tr key={index}>
          <td className="cart-table__cell cart-table__cell_product">{item.name}</td>
          <td className="cart-table__cell cart-table__cell_price">{item.price}</td>
          <td className="cart-table__cell cart-table__cell_discount">{item.discount}</td>
        </tr>
      )
    })
    return(
      <div className="Cart">
        <h2 className="title">Корзина</h2>
        <table className="cart-table">
          <tbody>
            <tr>
              <th className="cart-table__cell cart-table__cell_product">Продукт</th>
              <th className="cart-table__cell cart-table__cell_price">Цена</th>
              <th className="cart-table__cell cart-table__cell_discount">Цена со скидкой</th>
            </tr>
            {rows}
          </tbody>
        </table>
        <ApplyDiscount/>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    products:state
  }
}

export default connect(mapStateToProps)(Cart)
