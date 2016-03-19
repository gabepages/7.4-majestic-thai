var $ = require('jquery');
var _ = require('underscore');
var Backbone= require('backbone');
var React= require('react');
var ReactDOM = require('react-dom');

var HomeHeader = React.createClass({
  render: function(){
    return <h2>Mejestic Thai</h2>;
  }
});

module.exports= HomeHeader;
