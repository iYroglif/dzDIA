import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

function Courses() {

    const [courses, setCourses] = useState([])

    useEffect(() => {
        axios({
            method: "GET",
            url: 'http://127.0.0.1:8000/api/courses/'
        }).then(response => {
            setCourses(response.data)
        })
    }, [])

    return (
        <div class="list-group">
            <li class="list-group-item">Курсы:</li>
            {courses.map(c => (
                <Link class="list-group-item list-group-item-action" to={{pathname: `/courses/${c.id}/`, fromDashboard: false}}>{c.name}</Link>
            ))}
        </div>
    );
}

export default Courses;
