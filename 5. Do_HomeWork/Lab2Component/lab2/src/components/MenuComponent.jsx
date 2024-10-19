import React from 'react'

export default function MenuComponent() {
    return (
        <div className="container mt-5">
            <h1 className="text-white">Our Menu</h1>
            <div className="row">
                <div className="col-lg-3 col-md-3 mb-5">
                    <div className="card">
                        {" "}
                        {/* Removed the border-0 class */}
                        <span className="position-absolute top-0 start-0 bg-warning text-uppercase rounded-pill py-1 px-3">
                            Sale
                        </span>
                        <img src="./Images/menu1.jpg" className="card-img-top" alt="Card image" />
                        <div className="card-body text-left">
                            <h3 className="card-title">Margheria Pizza</h3>
                            <p className="card-text d-flex">
                                <del>$50.00</del>
                                <span className="text-warning fw-bold">$24</span>
                            </p>
                            <a href="#" className="btn btn-dark w-100">
                                Buy
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 mb-5">
                    <div className="card">
                        {" "}
                        {/* Removed the border-0 class */}
                        <img src="./Images/menu3.jpg" className="card-img-top" alt="Card image" />
                        <div className="card-body text-left">
                            <h3 className="card-title">Mushroom Pizza</h3>
                            <p className="card-text">
                                <span>$50.00</span>
                            </p>
                            <a href="#" className="btn btn-dark w-100">
                                Buy
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 mb-5">
                    <div className="card">
                        {" "}
                        {/* Removed the border-0 class */}
                        <span className="position-absolute top-0 start-0 bg-warning text-uppercase rounded-pill py-1 px-3">
                            New
                        </span>
                        <img src="./Images/menu3.jpg" className="card-img-top" alt="Card image" />
                        <div className="card-body text-left">
                            <h3 className="card-title">Hawaiian Pizza</h3>
                            <p className="card-text">
                                <span>$50.00</span>
                            </p>
                            <a href="#" className="btn btn-dark w-100">
                                Buy
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 mb-5">
                    <div className="card">
                        {" "}
                        {/* Removed the border-0 class */}
                        <span className="position-absolute top-0 start-0 bg-warning text-uppercase rounded-pill py-1 px-3">
                            Sale
                        </span>
                        <img src="./Images/menu3.jpg" className="card-img-top" alt="Card image" />
                        <div className="card-body text-left">
                            <h3 className="card-title">Pesto Pizza</h3>
                            <p className="card-text d-flex">
                                <del>$50.00</del>
                                <span className="text-warning fw-bold">$24</span>
                            </p>
                            <a href="#" className="btn btn-dark w-100">
                                Buy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
