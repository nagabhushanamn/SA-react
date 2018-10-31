import React, { Component } from 'react';
import B from './B';
import D from './D';
import PropTypes from 'prop-types';

class A extends Component {
    getChildContext() {
        return { value: this.props.value };
    }
    render() {
        return (
            <div className="card card-default">
                <div className="card-body">
                    <span className="badge badge-primary">A-Component</span>
                    {this.props.value}
                    <B />
                    <D />
                </div>
            </div>
        );
    }
}
A.childContextTypes = {
    value: PropTypes.string
};

export default A;