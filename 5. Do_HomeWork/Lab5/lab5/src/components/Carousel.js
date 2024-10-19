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
                                src="./images/slide1.jpg"
                                className="d-block w-100"
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="./images/slide2.jpg"
                                className="d-block w-100"
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="./images/slide3.jpg"
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
            <div className='d-flex justify-content-around align-items-center'>
                <div>
                    <img
                        src="./images/menu-01.jpg"
                        className='rounded-circle'
                    />
                </div>
                <div>
                    <img
                        src="./images/menu-02.jpg"
                        className='rounded-circle'
                    />
                </div>
                <div>
                    <img
                        src="./images/menu-03.jpg"
                        className='rounded-circle'
                    />
                </div>
                <div>
                    <img
                        src="./images/menu-04.jpg"
                        className='rounded-circle'
                    />
                </div>
                <div>
                    <img
                        className='rounded-circle'
                        src="./images/menu-05.jpg"
                    />
                </div>
                <div>
                    <img
                        className='rounded-circle'
                        src="./images/menu-06.jpg"
                    />
                </div>

            </div>
            <h1 className='text-danger'>This is Home Page</h1>
        </>
    )
}

export default Carousel