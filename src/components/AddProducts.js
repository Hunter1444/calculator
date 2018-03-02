import React from 'react';
import { connect } from 'react-redux';

class AddProducts extends React.Component{

  formSubmit(e){
    e.preventDefault()
    const {product, price} = this.refs;
    if(product.value && price.value > 0){
      this.props.addProduct({
        name: product.value,
        price: Number(price.value),
        discount: ''
      })

      this.clearInput([product, price])
    } else{
      alert('Введите корректные данные')
    }
  }

  clearInput(arr){
    arr.forEach(function(item){
      item.value = ''
    })
  }

  render(){
    return(
      <div className="add-products">
        <h2 className="title">Добавить продукт</h2>
        <form onSubmit={this.formSubmit.bind(this)} className="add-products__form">
          <label className="add-products__label">
            <span className="add-products__input-name">Продукт</span>
            <input ref="product" className="add-products__input" type="text"/>
          </label>
          <label className="add-products__label">
            <span className="add-products__input-name">Цена</span>
            <input ref="price" className="add-products__input add-products__input_price" type="number"/>
          </label>
          <input className="add-products__input btn_submit" value="Добавить" type="submit"/>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {
    addProduct: function(product){
      dispatch({type: 'ADD_PRODUCT', payload:product})
    }
  }
}

export default connect('', mapDispatchToProps)(AddProducts)
