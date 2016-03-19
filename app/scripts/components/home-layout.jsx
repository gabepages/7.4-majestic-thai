var $ = require('jquery');
var _ = require('underscore');
var Backbone= require('backbone');
var React= require('react');
var ReactDOM = require('react-dom');

var HomePage = React.createClass({
  handleClick: function(){
    this.props.router.navigate('menu', {trigger: true});
  },
  render: function(){
    return(
      <div className="content">
        <div className="hours col-md-4">
          <h3>Hours</h3>
          <ul>
            <li>Mon-Thurs: 12-9pm</li>
            <li>Fri-Sat: 12-10pm</li>
            <li>Sun: 2-8pm</li>
          </ul>
        </div>
        <div className="menu col-md-4">
          <h2 onClick={this.handleClick}>Menu</h2>
        </div>
        <div className="location col-md-4">
          <h3>Location</h3>
          <a href="https://www.google.com/maps/place/Thai+Majestic+Restaurant+%26+Noodle+Bar/@-27.5613078,151.9511084,16z/data=!4m2!3m1!1s0x6b965c6a42f8172f:0x682a9a5210f9c5b9">215 Margaret St, Toowoomba QLD 4350, Australia</a>
        </div>
      </div>
    );
  }
});


module.exports = HomePage;
