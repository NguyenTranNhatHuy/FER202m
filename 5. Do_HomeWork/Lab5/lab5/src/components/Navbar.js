import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <Link to={"/home"} class="navbar-brand" >Home</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link to={"/about"} class="nav-link active" aria-current="page" >About</Link>
                            </li>
                            <li class="nav-item">
                                <Link to={"/news"} class="nav-link" >News</Link>
                            </li>
                            <li class="nav-item">
                                <Link to={"/quizzes"} class="nav-link">Quiz</Link>
                            </li>
                            <li class="nav-item">
                                <Link to={"/contact"} class="nav-link" >Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}
