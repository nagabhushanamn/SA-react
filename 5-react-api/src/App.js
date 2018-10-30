import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types'
import Greeting from './components/Greeting';
import CounterApp from './components/CounterApp';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('App::constructor()');
    //console.log(props);
    this.state = {
      message: 'Hello..'
    }
  }

  changeMessage(message) {
    this.setState({ message: message })
  }


  render() {
    console.log('App::render()');
    // let title = this.props.title;
    // let author = this.props.author;
    //or
    let { title, author } = this.props
    let { message } = this.state;
    return (
      <div className="container">
        <hr />
        <h1>{title} : by {author}</h1>
        <hr />
        <CounterApp />
        <hr />
        <button className="btn btn-dark" onClick={e => this.changeMessage('good morning')}>GM</button>
        <button className="btn btn-dark" onClick={e => this.changeMessage('good noon')}>GN</button>
        <button className="btn btn-dark" onClick={e => this.changeMessage('good evening')}>GE</button>
        <button className="btn btn-danger" onClick={e => this.changeMessage('')}>Remove Greeting</button>
        <hr />
        {message ? <Greeting message={message} /> : null}
      </div>
    );
  }

  componentDidMount() {
    console.log('App::componentDidMount()');
    // api call
    //let serverMessage = "Hello, from server-side";
    //this.setState({ message: serverMessage });
  }

}

App.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string
}
App.defaultProps = {
  title: 'React-Lib-api'
}

export default App;
