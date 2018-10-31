import React, { Component } from 'react';
import C from '../C';

class B extends Component {
    render() {
        return (
            <div className="card card-default">
                <div className="card-body">
                    <span className="badge badge-primary">B-Component</span>
                    <C/>
                </div>
            </div>
        );
    }
}

export default B;