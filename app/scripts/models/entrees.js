var $ = require('jquery');
var _ = require('underscore');
var Backbone= require('backbone');
var React= require('react');
var ReactDOM = require('react-dom');

var Entree = Backbone.Model.extend({
  'idAttribute': "id"
});

var EntreeCollection = Backbone.Collection.extend({
  model: Entree
});


module.exports = EntreeCollection;
