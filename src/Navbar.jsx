import React from 'react'

export const Navbar = () => {

    return (
        <nav class="navbar navbar-expand-lg bg-white shadow-sm mb-5 custom-navbar">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src='../images/GDSC-logo.jpg'
                    />
                    GDSC RCOEM
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 gap-5 navbar-elements">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Events</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" >Team</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Alumni</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contact</a>
                        </li>

                    </ul>



                </div>
            </div>
        </nav>


    )
}
