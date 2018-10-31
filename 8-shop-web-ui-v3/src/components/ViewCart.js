import React from 'react'

function renderCartItems(props) {
    let { cart } = props;
    return cart.map((item, idx) => {
        return (
            <tr key={idx}>
                <td>{item.name}</td>
                <td>&#8377;{item.price}</td>
                <td>qty</td>
                <td>total</td>
            </tr>
        )
    })
}


const ViewCart = (props) => {
    return (
        <div className="row">
            <div className="col-10 col-sm-10 col-md-10">
                <div className="card card-default">
                    <div className="card-header">Items in cart</div>
                    <div className="card-body">
                        <table className="table table-bordered table-sm">
                            <tbody>
                                {renderCartItems(props)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewCart;