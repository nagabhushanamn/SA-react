import React, { Component } from 'react';
import ActionButton from './ActionButton';
import TotalCountDisplay from './TotalCountDisplay';

class CounterApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            totalCount: 0
        }
    }
    incrementTotalCount(e) {
        let { totalCount } = this.state;
        totalCount += e;
        this.setState({ totalCount })
    }
    renderActionButtons() {
        let nums = [1, 10, 100, 100, -1, -10, -100, -1000,1, 10, 100, 100, -1, -10, -100, -1000];
        return nums.map((n, idx) => {
            return <ActionButton key={idx} value={n} onAction={e => this.incrementTotalCount(e)} />
        })
    }
    render() {
        let { totalCount } = this.state;
        return (
            <div className="card card-default">
                <div className="card-header">Counter App : <span className="badge badge-success">{totalCount}</span></div>
                <div className="card-body">
                    {
                        /* 
                            <ActionButton value={1} onAction={e => this.incrementTotalCount(e)} />
                            <ActionButton value={10} onAction={e => this.incrementTotalCount(e)} /> 
                        */
                    }
                    {this.renderActionButtons()}
                    <div style={{ clear: "both" }}>
                        <hr />
                        <TotalCountDisplay value={totalCount} />
                    </div>
                </div>
            </div>
        );
    }
}

export default CounterApp;