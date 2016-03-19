var $ = require('jquery');
var _ = require('underscore');
var Backbone= require('backbone');
var React= require('react');
var ReactDOM = require('react-dom');

var Appitizer = Backbone.Model.extend({
  'idAttribute': "id"
});

var AppCollection = Backbone.Collection.extend({
  model: Appitizer
});


module.exports = AppCollection;
