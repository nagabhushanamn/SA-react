import React, { Component } from 'react';
import PropTypes from 'prop-types';

class D extends Component {
    render() {
        return (
            <div className="card card-default">
                <div className="card-body">
                    <span className="badge badge-primary">D-Component</span>
                    {this.context.value}
                </div>
            </div>
        );
    }
}

D.contextTypes = {
    value: PropTypes.number
};

export default D;