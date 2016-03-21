var $ = require('jquery');
var _ = require('underscore');
var Backbone= require('backbone');
var React= require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');


var MenuCheckout = React.createClass({
  mixins: [Backbone.React.Component.mixin],

  getInitialState: function(){
    return{
      cost: 0
    };
  },
  handleCheckout: function(e){
    e.preventDefault();
    this.props.router.navigate('checkout', {trigger: true});
  },
  handleDeleteClick: function(item, e){
    this.props.collection.remove(item);
    console.log(this.props.collection);
  },
  render: function(){
    var price = this.props.collection.pluck('price');
    var pickedItems = this.props.collection.map(function(item){
      var boundItemToClick = this.handleDeleteClick.bind(this, item);

      return(
        <tr key={item.cid} >
          <td className='special-name'>{item.get('name')}</td>
          <td>{item.get('price').toFixed(2)}</td>
          <td>
            <button id='delete-btn' onClick={boundItemToClick} type="button" className="btn btn-danger">
              <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
            </button>
          </td>

        </tr>
      );
    }.bind(this));
    var total = _.reduce(price, function(a, b){
      return a + b;
    },0).toFixed(2);
    return(

      <div className='menu-content'>
        <div className='menu col-xs-12 col-md-9'></div>
        <div className='total col-xs-12 col-md-3'>
          <h2>Cart</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody className="items-list" >
              {pickedItems}
            </tbody>
          </table>
          <h2 id='total'>Total</h2>
          <p>$ {total}</p>
          <button onClick={this.handleCheckout} id='checkout-btn' type="button" className="btn btn-success">Checkout!</button>
        </div>
      </div>
    );
  }

});




module.exports = MenuCheckout;
