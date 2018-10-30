import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Greeting extends Component {
    constructor(props) {
        super(props)
        console.log('Greeting::constructor()');
        // this.state = {
        //     now: new Date().toLocaleTimeString()
        // }
    }
    render() {
        console.log('Greeting::render()');
        let { message } = this.props;
        // let { now } = this.state;
        let now = new Date().toLocaleTimeString();
        return (
            <div className="alert alert-info">
                {message}
                <hr />
                {now}
            </div>
        );
    }
    componentDidMount() {
        console.log('Greeting::componentDidMount()');
        this.interval = setInterval(() => {
            //this.setState({ now: new Date().toLocaleTimeString() });
            //this.forceUpdate();
        }, 500);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Greeting::shouldComponentUpdate()');
        return this.props.message !== nextProps.message;
    }

    componentDidUpdate() {
        console.log('Greeting::componentDidUpdate()');
    }

    componentWillUnmount() {
        console.log('Greeting::componentWillUnmount()');
        clearInterval(this.interval);
    }
}

Greeting.propTypes = {
    message: PropTypes.string
}

Greeting.defaultProps = {
    message: "greetings"
}
// Greeting.displayName = "<ibm-greeting>" // only for debugging in dev-tools


export default Greeting;