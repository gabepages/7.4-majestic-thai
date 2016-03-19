var $ = require('jquery');
var _ = require('underscore');
var Backbone= require('backbone');
var React= require('react');
var ReactDOM = require('react-dom');

var Dessert = Backbone.Model.extend({
  'idAttribute': "id"
});

var DessertCollection = Backbone.Collection.extend({
  model: Dessert
});


module.exports = DessertCollection;
