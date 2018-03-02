import React from 'react';
import AddProducts from '../components/AddProducts';
import Cart from '../components/Cart';

export default class Profile extends React.Component{
  render(){
    return(
      <div>
        <AddProducts/>
        <Cart/>
      </div>
    )
  }
}
