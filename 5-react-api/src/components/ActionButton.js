import React, { Component } from 'react';
import './ActionButton.css';
import PropTypes from 'prop-types';

class ActionButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    handleClick(e) {
        let { count } = this.state;
        count += 1
        this.setState({ count })
        let { onAction, value } = this.props;
        if (onAction)
            onAction(value * count);
    }
    render() {
        let { value } = this.props;
        let { count } = this.state;
        let className = `btn btn-sm ${value > 0 ? 'btn-success' : 'btn-warning'}`
        return (
            <div className="action-button">
                <div className="card card-default">
                    <div className="card-body">
                        <button onClick={e => this.handleClick(e)} className={className}>
                            {value}
                        </button>
                        ==>
                        <span className="badge badge-danger">{count}</span>
                    </div>
                </div>
            </div>
        );
    }
}
ActionButton.propTypes = {
    value: PropTypes.number,
    onAction: PropTypes.func
}

export default ActionButton;