import React from 'react'

function Carousel() {
    return (
        <>
            <div className="container-fluid p-0">
                <div id="demo" className="carousel slide" data-bs-ride="carousel">
                    {/* Indicators */}
                    <ul className="carousel-indicators">
                        <li style={{ listStyle: 'none' }} data-bs-target="#demo" data-bs-slide-to="0" className="active " ></li>
                        <li style={{ listStyle: 'none' }} data-bs-target="#demo" data-bs-slide-to="1" ></li>
                        <li style={{ listStyle: 'none' }} data-bs-target="#demo" data-bs-slide-to="2" ></li>
                    </ul>
                    {/* The slideshow */}
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                src="./images/Hocbong-100-e-bannerweb.png"
                                className="d-block w-100"
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="./images/43irh1aw-toi-uu.png"
                                className="d-block w-100"
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="./images/TBTS-DHFPT-2024-bannerweb.png"
                                className="d-block w-100"
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

        </>
    )
}

export default Carousel