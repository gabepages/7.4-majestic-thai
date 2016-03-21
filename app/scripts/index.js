var $ = require('jquery');
var _ = require('underscore');
var Backbone= require('backbone');
var React= require('react');
var ReactDOM = require('react-dom');


//models and collections
var AppCollection = require('./models/apps.js');
var EntreeCollection = require('./models/entrees.js');
var DessertCollection = require('./models/desserts.js');
var CheckoutCollection = require('./models/checkout.js');
//instantiating new collections
var apps = new AppCollection([
  {
    name: 'Spring Rolls',
    price: 6,
    description: "These yummy cylinders will have you on the floor begging for more (Vegi)",
    quantity: 0
  },
  {
    name: 'Egg Rolls',
    price: 6.5,
    description: "These meat filled yummy cylinders will also have you on the floor begging for more",
    quantity: 0
  },
  {
    name: 'Edamame',
    price: 5,
    description: "Green pods that contain magical little bean. they will make your mom want to marry a guy named ed so you can constintly yell 'ED and MOMMY!' (Vegi)",
    quantity: 0
  }
]);
var entrees = new EntreeCollection([
  {
    name: 'Chicken Pad Thai',
    price: 12,
    description: "Worm like noodles that taste nothing like worms and more like heaven. Be warned, it has enough spice to it, to give you the farts for weeks but dont let deter you from picking this tasty meal",
    quantity: 0
  },
  {
    name: 'Fried Rice (Choice of Meat)',
    price: 10,
    description: "Choose from chicken, beef, shrimp, tofu, or vegetables. then be ready to eat a mountain of fried rice mixed with onions, carrots and eggs (Vegi)",
    quantity: 0
  },
  {
    name: 'Thai Soup w/ side of Dumplings',
    price: 8.5,
    description: "A scrumptious twist on your mamas chicken noodle soup, and you get dumplings. Dont be a dingus and get the soup and dumplings! (Vegi)",
    quantity: 0
  }
]);
var desserts = new DessertCollection([
  {
    name: 'Green Tea Ice Cream',
    price: 4,
    description: "Imagine the best green tea youve ever had and multiply it by 100 and then add a hint of sugar and add some ice and guess what you dont have our green tea ice cream becuase ours will be way better because we add our secret recipe and make it in our secret ice cream room.",
    quantity: 0
  },
  {
    name: 'Sticky Rice',
    price: 5,
    description: "The Stickiest gosh dang rice you will ever have! Guaranteed",
    quantity: 0
  }
]);
var checkout = new CheckoutCollection();


//components
var HomeHeader = require('./components/home-header.jsx');
var HomePage = require('./components/home-layout.jsx');
var MenuHeader = require('./components/menu-header.jsx');
var MenuCheckout = require('./components/menu-checkout.jsx');
var Menu = require('./components/menu.jsx');
var CheckedOut = require('./components/checkout.jsx');




var Router = Backbone.Router.extend({
  routes: {
    "": "index",
    "menu": "menu",
    'checkout': 'checkout'
  },
  index: function (){
    this.current = "";
    ReactDOM.render(
      <HomeHeader router={this}/>,
      $('.header')[0]
    );
    ReactDOM.render(
      <HomePage router={this}/>,
      $('.container')[0]
    );
  },

  menu: function(){
    console.log('hello');
    this.current= 'menu';
    ReactDOM.render(
      <MenuHeader router={this}/>,
      $('.header')[0]
    );
    ReactDOM.render(
      <MenuCheckout collection={checkout}  router={this}/>,
      $('.container')[0]
    );
    ReactDOM.render(
      <Menu
        appCollection={apps}
        entreeCollection={entrees}
        dessertCollection={desserts}
        checkoutCollection={checkout}
        router={this}/>,
      $('.menu')[0]
    );

  },
  checkout: function(){
    ReactDOM.render(
      <HomeHeader router={this}/>,
      $('.header')[0]
    );
    ReactDOM.render(
      <CheckedOut router={this}/>,
      $('.container')[0]
    );
  }
});


var router = new Router();




Backbone.history.start();
