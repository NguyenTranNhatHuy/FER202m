import React from 'react'

export default function HeaderComponent() {
    return (
        // <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        //     <div className="container">
        //         <a className="navbar-brand" href="https://nentang.vn">
        //             <h4>Pizza House</h4>
        //         </a>
        //         <button
        //             className="navbar-toggler"
        //             type="button"
        //             data-toggle="collapse"
        //             data-target="#navbarResponsive"
        //             aria-controls="navbarResponsive"
        //             aria-expanded="false"
        //             aria-label="Toggle navigation"
        //         >
        //             <span className="navbar-toggler-icon" />
        //         </button>
        //         <div className="collapse navbar-collapse" id="navbarResponsive">
        //             <ul className="navbar-nav mr-auto">
        //                 <li className="nav-item active">
        //                     <a className="nav-link" href="#">
        //                         Home
        //                         <span className="sr-only">(current)</span>
        //                     </a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link" href="#">
        //                         About Us
        //                     </a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link" href="#">
        //                         Contact
        //                     </a>
        //                 </li>
        //             </ul>
        //             <form className="form-inline">
        //                 <input
        //                     className="form-control mr-sm-2"
        //                     type="text"
        //                     placeholder="Tìm kiếm"
        //                 />
        //                 <button className="btn btn-danger" type="submit">
        //                     <i className="fa fa-search" />
        //                 </button>
        //             </form>
        //         </div>
        //     </div>
        // </nav>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div className="container">
                <a className="navbar-brand" href="https://nentang.vn">
                    <h4>Pizza House</h4>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarResponsive"
                    aria-controls="navbarResponsive"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                About Us
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Contact
                            </a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Tìm kiếm"
                            aria-label="Search"
                        />
                        <button className="btn btn-danger" type="submit">
                            <i className="fa fa-search" />
                        </button>
                    </form>
                </div>
            </div>
        </nav>

    )
}
