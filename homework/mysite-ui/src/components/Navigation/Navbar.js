import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Navbar() {

    return (
        <div className="App">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">Мой сайт</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Главная</a>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to={{ pathname: `/students/`, fromDashboard: false }}>Студенты</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to={{ pathname: `/courses/`, fromDashboard: false }}>Курсы</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to={{ pathname: `/report/`, fromDashboard: false }}>Отчет</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
