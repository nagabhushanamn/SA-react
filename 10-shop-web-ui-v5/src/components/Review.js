
import React from 'react';
import 'font-awesome/css/font-awesome.css'

function renderStars(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(<i className="fa fa-star" key={i}></i>)
    }
    return arr;
}

const Review = ({ review }) => {
    return (
        <div className="row">
            <div className="col-10 col-sm-10 col-md-10">
                <div className="alert alert-danger">
                    <div className="col-10 col-sm-10 col-md-10">
                        <span>{renderStars(review.stars)}</span> &mdash; {review.author}
                        <hr />
                        <p>{review.body}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Review;