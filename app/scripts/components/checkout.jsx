var $ = require('jquery');
var _ = require('underscore');
var Backbone= require('backbone');
var React= require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');



var CheckedOut = React.createClass({
  handleSendHome: function(){
    this.props.router.navigate('', {trigger: true});
  },
  render: function(){
    return (
      <div className='checkout'>
          <h1>Thank you for not cooking!</h1>
          <h3>Your order has been placed and will be up shortly</h3>
          <button onClick={this.handleSendHome}  type="button" className="btn btn-success">Home</button>
      </div>
    )
  }
});


module.exports= CheckedOut;
