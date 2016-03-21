var $ = require('jquery');
var _ = require('underscore');
var Backbone= require('backbone');
var React= require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');



var Menu = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  handleClick: function(item){
    // console.log(item);
    this.props.checkoutCollection.add(item);
  },
  render: function(){

    return(
      <div className="menu-items">
        <Apps collection={this.props.appCollection} onClick={this.handleClick} />
        <Entrees collection={this.props.entreeCollection} onClick={this.handleClick} />
        <Desserts collection={this.props.dessertCollection} onClick={this.handleClick} />
      </div>
    );
  }
});


var Apps = React.createClass({
  handleClick: function(item, e){
    e.preventDefault();
    this.props.onClick(item.attributes);
  },
  render: function(){
    var menuItems = this.props.collection.map(function(item){
      var boundItemToClick = this.handleClick.bind(this, item);

      return (
        <div key={item.cid} className="panel panel-default item">
          <div className="panel-heading item-title">
            <h3 className="panel-title">{item.get('name')}</h3>
          </div>
          <div className="panel-body item-body">
            <p>{item.get('description')}</p>
            <button type="button" className="btn btn-success" onClick={boundItemToClick}>
              <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
            </button>
            <p id="price">{item.get('price')}</p>
          </div>
        </div>
      );
    }.bind(this));
      return(
        <div className="appitizers category">
          <h2>Appetizers</h2>
          {menuItems}
        </div>
      );
  }
});

var Entrees = React.createClass({
  handleClick: function(item, e){
    e.preventDefault();
    this.props.onClick(item.attributes);
  },
  render: function(){
    var menuItems = this.props.collection.map(function(item){
      var boundItemToClick = this.handleClick.bind(this, item);
      return(
        <div key={item.cid} className="panel panel-default item">
          <div className="panel-heading item-title">
            <h3 className="panel-title">{item.get('name')}</h3>
          </div>
          <div className="panel-body item-body">
            <p>{item.get('description')}</p>
            <button type="button" className="btn btn-success" onClick={boundItemToClick} >
              <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
            </button>
            <p id="price">{item.get('price')}</p>
          </div>
        </div>
      );
    }.bind(this));
    return (
      <div className="entrees category">
        <h2>Entrees</h2>
        {menuItems}
      </div>
    );
  }
});

var Desserts = React.createClass({
  handleClick: function(item, e){
    e.preventDefault();
    this.props.onClick(item.attributes);
  },
  render: function(){
    var menuItems = this.props.collection.map(function(item){
      var boundItemToClick = this.handleClick.bind(this, item);
      return(
        <div key={item.cid} className="panel panel-default item">
          <div className="panel-heading item-title">
            <h3 className="panel-title">{item.get('name')}</h3>
          </div>
          <div className="panel-body item-body">
            <p>{item.get('description')}</p>
            <button type="button" className="btn btn-success" onClick={boundItemToClick} >
              <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
            </button>
            <p id="price">{item.get('price')}</p>
          </div>
        </div>
      );
    }.bind(this));
    return(
      <div className="desserts category">
        <h2>Desserts</h2>
        {menuItems}
      </div>
    );
  }
});

module.exports = Menu;
