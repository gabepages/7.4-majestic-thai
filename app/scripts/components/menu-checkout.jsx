var $ = require('jquery');
var _ = require('underscore');
var Backbone= require('backbone');
var React= require('react');
var ReactDOM = require('react-dom');

var MenuCheckout = React.createClass({
  getInitialState: function(){
    return{
      cost: 0
    };
  },
  render: function(){
    var pickedItems = this.props.collection.map(function(item){
      return(
        <tr key={item.id}>
          <td>{item.get('name')}</td>
          <td>{item.get('price')}</td>
          <td>{item.get('quantity')}</td>
        </tr>
      );
    });
    return(
      <div className='menu-content'>
        <div className='menu col-md-9'>
          
        </div>
        <div className='total col-md-3'>
          <h2>Cart</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody className="items-list">
              {pickedItems}
            </tbody>
          </table>
          <h2 id='total'>Total</h2>
          <p>{this.state.cost}</p>
          <button id='checkout-btn' type="button" className="btn btn-success">Checkout!</button>
        </div>
      </div>
    );
  }
});

module.exports = MenuCheckout;
