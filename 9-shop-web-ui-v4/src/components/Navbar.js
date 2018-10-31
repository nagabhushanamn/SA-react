import React from 'react';

//way-1
//---------------------------------------------------------------------------
// class Navbar extends Component {
//     render() {
//         return (
//             <div>
//                 <nav className="navbar navbar-light bg-primary">
//                     <a className="navbar-brand" href="/#">{this.props.title}</a>
//                 </nav>
//             </div>
//         );
//     }
// }


//way-2
//---------------------------------------------------------------------------

// const Navbar = function (props) {
//     return (
//         <div>
//             <nav className="navbar navbar-light bg-primary">
//                 <a className="navbar-brand" href="/#">{props.title}</a>
//             </nav>
//         </div>
//     )
// }

//

const Navbar = ({ title }) => {
    return (
        <div>
            <nav className="navbar navbar-light bg-primary">
                <a className="navbar-brand" href="/">{title}</a>
            </nav>
        </div>
    )
}

//---------------------------------------------------------------------------


export default Navbar;