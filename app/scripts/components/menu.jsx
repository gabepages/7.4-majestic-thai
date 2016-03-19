var $ = require('jquery');
var _ = require('underscore');
var Backbone= require('backbone');
var React= require('react');
var ReactDOM = require('react-dom');

var Menu = React.createClass({
  handleClick: function(e){
    e.preventDefault();
    console.log(e);
    console.log(this.props.checkoutCollection);
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
  render: function(){
    var menuItems = this.props.collection.map(function(item){
      return (
        <div key={item.cid} className="panel panel-default item">
          <div className="panel-heading item-title">
            <h3 className="panel-title">{item.get('name')}</h3>
          </div>
          <div className="panel-body item-body">
            <p>{item.get('description')}</p>
            <button type="button" className="btn btn-success" onClick={this.handleClick}>
              <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
            </button>
            <p id="price">{item.get('price')}</p>
          </div>
        </div>
      );
    }.bind(this));
      return(
        <div className="appitizers category">
          <h2>Appitizers</h2>
          {menuItems}
        </div>
      );
  }
});

var Entrees = React.createClass({
  render: function(){
    var menuItems = this.props.collection.map(function(item){
      return(
        <div key={item.cid} className="panel panel-default item">
          <div className="panel-heading item-title">
            <h3 className="panel-title">{item.get('name')}</h3>
          </div>
          <div className="panel-body item-body">
            <p>{item.get('description')}</p>
            <button type="button" className="btn btn-success" onClick={this.props.onClick} >
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
  render: function(){
    var menuItems = this.props.collection.map(function(item){
      return(
        <div key={item.cid} className="panel panel-default item">
          <div className="panel-heading item-title">
            <h3 className="panel-title">{item.get('name')}</h3>
          </div>
          <div className="panel-body item-body">
            <p>{item.get('description')}</p>
            <button type="button" className="btn btn-success" onClick={this.props.onClick} >
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
