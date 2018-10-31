import React, { Component } from 'react';

class ReviewForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            stars: 5,
            author: 'nag@gmail.com',
            body: ''
        }
    }
    toggleForm() {
        let { isOpen } = this.state;
        this.setState({ isOpen: !isOpen })
    }
    handleForm(e) {
        e.preventDefault();
        let { stars, author, body } = this.state;
        let newReview = {
            stars,
            author,
            body,
        }
        let { onNewReview } = this.props;
        if (onNewReview) {
            onNewReview(newReview)
            this.toggleForm();
        }
    }
    handleChange(e) {
        let id = e.target.id;
        let value = e.target.value;
        this.setState({ [id]: value })
    }
    isValidForm() {
        let { stars } = this.state;
        if (stars < 3) return true
        else return false;
    }
    renderForm() {
        let { isOpen, stars, author, body } = this.state;
        if (!isOpen) {
            return (<button onClick={e => this.toggleForm()} className="btn btn-info"><i className="fa fa-plus"></i></button>)
        } else {
            return (
                <div className="row">
                    <div className="col-10 col-sm-10 col-md-10">
                        <div className="card card-default">
                            <div className="card-header">Review Form</div>
                            <div className="card-body">
                                <form onSubmit={e => this.handleForm(e)}>
                                    <div className="form-group">
                                        <label>stars</label>
                                        <select className="form-control" id="stars" value={stars} onChange={e => this.handleChange(e)}>
                                            {[1, 2, 3, 4, 5].map((n, idx) => <option key={idx}>{n}</option>)}
                                        </select>
                                        {stars < 3 ? <span className="text text-danger">give 5 stars</span> : null}
                                    </div>
                                    <div className="form-group">
                                        <label>author</label>
                                        <input className="form-control" id="author" value={author} onChange={e => this.handleChange(e)} />
                                    </div>
                                    <div className="form-group">
                                        <label>body</label>
                                        <textarea className="form-control" id="body" value={body} onChange={e => this.handleChange(e)}></textarea>
                                    </div>
                                    <button disabled={this.isValidForm()} className="btn btn-dark">submit</button>
                                    &nbsp;
                                    <button type="button" onClick={e => this.toggleForm()} className="btn btn-danger">cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
    render() {
        return (
            <div>
                {this.renderForm()}
            </div >
        );
    }
}

export default ReviewForm;