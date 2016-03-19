var $ = require('jquery');
var _ = require('underscore');
var Backbone= require('backbone');
var React= require('react');
var ReactDOM = require('react-dom');


var Checkout = Backbone.Model.extend({
  'idAttribute': "id"
});

var CheckoutCollection = Backbone.Collection.extend({
  model: Checkout
});


module.exports = CheckoutCollection;
