var React = require('react');
var Reflux = require('reflux');

var store =   Reflux.createStore({
  data: {message: 0},
  
  init() {
      setInterval(()=>{
        this.data.message++
        this.trigger(this.data);
      }, 2000);
    },
  getInitialState() {
      return this.data;
     },
})


var App = 
  React.createClass({
    mixins: [Reflux.connect(store)],

    render() {
      return (<h1>{this.state.message}</h1>);
    }
  });

module.exports = App;