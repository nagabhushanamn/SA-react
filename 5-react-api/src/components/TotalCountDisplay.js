
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TotalCountDisplay extends Component {
    render() {
        return (
            <div className="alert alert-info">
                Total Count:  : {this.props.value}
            </div>
        );
    }
}
TotalCountDisplay.propTypes = {
    value: PropTypes.number
}
TotalCountDisplay.defaultProps = {
    value: 0
}
export default TotalCountDisplay;