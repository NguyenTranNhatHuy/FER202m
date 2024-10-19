import React from 'react'

export default function CarouselComponent() {
    return (

        <div className="container-fluid p-0">
            <div id="demo" className="carousel slide" data-bs-ride="carousel">
                {/* Indicators */}
                <ul className="carousel-indicators">
                    <li data-bs-target="#demo" data-bs-slide-to="0" className="active" ></li>
                    <li data-bs-target="#demo" data-bs-slide-to="1" ></li>
                    <li data-bs-target="#demo" data-bs-slide-to="2" ></li>
                    <li data-bs-target="#demo" data-bs-slide-to="3" ></li>
                    <li data-bs-target="#demo" data-bs-slide-to="4"></li>
                </ul>
                {/* The slideshow */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src="./Images/pizza1.jpg"
                            className="d-block w-100"
                            alt="Los Angeles"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="./Images/pizza2.jpg"
                            className="d-block w-100"
                            alt="Chicago"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="./Images/pizza3.jpg"
                            className="d-block w-100"
                            alt="Chicago"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="./Images/pizza4.jpg"
                            className="d-block w-100"
                            alt="Chicago"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="./Images/pizza5.jpg"
                            className="d-block w-100"
                            alt="Chicago"
                        />
                    </div>
                </div>
                {/* Left and right controls */}
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#demo"
                    data-bs-slide="prev"
                    role="button"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#demo"
                    data-bs-slide="next"
                    role="button"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>


    )
}
