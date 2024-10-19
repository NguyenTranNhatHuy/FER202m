import React from 'react'

export default function BookTableComponent() {
    return (
        <footer className="footer mb-5">
            <h1 className="text-center text-white">Book your table</h1>
            <div className="container">
                <div className="row align-items-stretch mb-5">
                    <div className="col-md-4">
                        <input
                            type="text"
                            className="form-control"
                            id="nameInput"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div className="col-md-4">
                        <input
                            type="email"
                            className="form-control"
                            id="emailInput"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="col-md-4">
                        <select className="form-select w-100" id="serviceSelect">
                            <option selected="">Select a service</option>
                            <option value="service1">Service 1</option>
                            <option value="service2">Service 2</option>
                            <option value="service3">Service 3</option>
                        </select>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-12">
                        <textarea
                            className="form-control"
                            id="commentTextarea"
                            rows={5}
                            placeholder="Write your comment here"
                            defaultValue={""}
                        />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-3">
                        <button
                            type="submit"
                            className="btn btn-primary w-100 bg-warning border-0"
                        >
                            Send message
                        </button>
                    </div>
                </div>
            </div>
        </footer>

    )
}
