var React = require('react');
var Reflux = require('reflux');
var request = require('superagent');


var store = Reflux.createStore({
  data: {people: []},

  init() {
    request
      .get('http://localhost:3000/people.json')
      .end((err, res) => {
        this.data.people = res.body;
        this.trigger(this.data)
      });
  },
  getInitialState() {
    return this.data
  }
})


var App =  
  React.createClass({
    mixins: [Reflux.connect(store)],

    render() {
      return (
          <div>{this.state.people.map(person => {
            return (
              <div>
                <h2>{person.name}</h2>
                <img src={person.avatar} alt="" />
              </div>
            )
          })}</div>
        )
    }
  });

module.exports = App;

