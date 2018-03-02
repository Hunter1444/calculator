import React from 'react';
import { connect } from 'react-redux';

class ApplyDiscount extends React.Component{

  applyDiscount(e){
    e.preventDefault();
    const {discount} = this.refs;
    if(discount.value >= 0){
      this.countUp(Number(discount.value));
      this.props.applyDiscount([...this.props.products])
      discount.value = '';
    } else {
      alert('Введите корректные данные')
    }
  }

  countUp(discountCount){
    const {products} = this.props;
    const allPrice = this._getPriceQuantity(products);
    
    if(allPrice < discountCount){
      discountCount = allPrice
    }

    const allCount = this._discountCalc(products, allPrice, discountCount)
    this._checkRest(products, allCount, discountCount)
  }

  _getPriceQuantity(products){
    return Object.keys(products).reduce(function(prev, key){
      return Number(prev + products[key].price);
    }, 0)
  }

  _discountCalc(products, allPrice, discountCount){
    let allCount = 0;
    products.forEach(function(item){
      const percent = (item.price / allPrice) * 100;
      let subtrahend = discountCount * percent / 100;
      subtrahend = Math.round(subtrahend)
      allCount = allCount + subtrahend
      item.discount = item.price - Math.floor(subtrahend);
    })
    return Math.round(allCount);
  }

  _checkRest(products, allCount, discountCount){
    if(discountCount !== allCount || allCount === 0){
      const remain = discountCount - allCount;
      const sortArr = products.slice(0,)
      sortArr.sort(function(a, b){
        return b.price - a.price
      })

      if(discountCount > allCount){
        sortArr[0].discount = sortArr[0].discount - 1;
      } else if(discountCount < allCount){
        sortArr[0].discount = sortArr[0].discount + 1;
      }
    }
  }

  render(){
    return(
      <form onSubmit={this.applyDiscount.bind(this)} className="cart-discount">
        <span>Применить скидку</span>
        <input ref="discount" className="cart-discount__count" type="number"/>
        <span>рублей</span>
        <input className="cart-discount__submit btn_submit" value="Применить" type="submit"/>
      </form>
    )
  }
}

function mapStateToProps(state){
  return {
    products:state
  }
}

function mapDispatchToProps(dispatch){
  return {
    applyDiscount: function(discount){
      dispatch({type: 'APPLY_DISCOUNT', payload:discount})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ApplyDiscount)
