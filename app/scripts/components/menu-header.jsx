var $ = require('jquery');
var _ = require('underscore');
var Backbone= require('backbone');
var React= require('react');
var ReactDOM = require('react-dom');

var MenuHeader = React.createClass({
  handleClick: function(){
    this.props.router.navigate('', {trigger: true});
  },
  render: function(){
    return (
      <div>
        <p id='home-btn'><a href=''>Home</a></p>
        <h2>Menu</h2>
      </div>
    );
  }
});

module.exports= MenuHeader;
