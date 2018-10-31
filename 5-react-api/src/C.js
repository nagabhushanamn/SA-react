import React, { Component } from 'react';
import PropTypes from 'prop-types';

class C extends Component {
    componentDidMount(){
        console.log(this.context);
    }
    render() {
        return (
            <div className="card card-default">
                <div className="card-body">
                    <span className="badge badge-primary">C-Component</span>
                    {this.context.value}
                </div>
            </div>
        );
    }
}

C.contextTypes = {
    value: PropTypes.number
};

export default C;