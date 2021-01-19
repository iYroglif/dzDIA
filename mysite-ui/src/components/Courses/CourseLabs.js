import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function CourseLabs({ match }) {

    const [course, setCourse] = useState({})
    const [course_labs, setCourse_labs] = useState([])
    const id = match.params.id

    useEffect(() => {
        axios({
            method: "GET",
            url: `http://127.0.0.1:8000/api/courses/${id}/`
        }).then(response => {
            setCourse(response.data)
            setCourse_labs(response.data.course_labs)
        })
    }, [id])

    return (
        <div>
            <hr />
            <p>Курс: <strong>{course.name}</strong></p>
            <hr />
            <div class="list-group">
            <li class="list-group-item">Лабораторные работы:</li>
                {course_labs.map(cl => (
                    <Link class="list-group-item list-group-item-action" to={{ pathname: `/courses-labs/${cl.id}`, fromDashboard: false }}>{cl.name}</Link>
                ))}
            </div>
        </div>
    );
}

export default CourseLabs;